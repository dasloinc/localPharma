// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying data from the db
//new from natasha 
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Product model
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/api/product", function(req, res) {
    // Write code here to retrieve all of the products from the database and res.json them
    // back to the user
    db.product.findAll({}).then(function(dbProduct){
      res.json(dbProduct);
    });
   });
};
