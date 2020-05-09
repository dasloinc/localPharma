const express = require('express');
const PORT = process.env.PORT || 8080;
const app = express();


var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + "/config/config.json")[env];
var db = {};

var htmlRoute = require('./routes/html-routes.js');
var postapiRoute = require('./routes/post-api-routes.js');
var productsapiRoute = require('./routes/products-api-routes.js');


app.use('/', htmlRoute);
app.use('/', postapiRoute);
app.use('/', productsapiRoute);
app.use('./public', express.static(path.join(__dirname, 'public')))

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf(".") !== 0) && (file !== basename) && (file.slice(-3) === ".js");
  })
  .forEach(function(file) {
    var model = sequelize["import"](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;


// Sync sequelize models then start Express app
// =============================================
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
  });
});
