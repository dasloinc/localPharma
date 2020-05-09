var db = require("../models");

module.exports = function(app) {
  app.get("/api/products", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Product.findAll({
      include: [db.Post]
    }).then(function(dbProduct) {
      res.json(dbProduct);
    });
  });

  app.get("/api/products/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Product.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Post]
    }).then(function(dbProduct) {
      res.json(dbProduct);
    });
  });

  app.post("/api/products", function(req, res) {
    db.Product.create(req.body).then(function(dbProduct) {
      res.json(dbProduct);
    });
  });

  app.delete("/api/Products/:id", function(req, res) {
    db.Product.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbProduct) {
      res.json(dbProduct);
    });
  });

};
