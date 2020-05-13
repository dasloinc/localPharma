
var db = require("../models");


module.exports = function(app) {

 
  app.get("/api/checkAccount/:accountCheck1", function(req, res) {
    
    db.profile_table.findOne({
      where: {
        first_name: req.params.accountCheck1
      }
    })
      .then(function(dbPost) {
        console.log(res.body)
        res.json(dbPost);
      });
  });

 app.get("/api/products", function(req,res){
    db.product.findAll({ 

    })
    .then(function(dbAllProducts) {
      console.log(res.body)
      res.json(dbAllProducts);

    });  
  })
 
  app.post("/api/saveDrug", function(req, res) {
    
    db.product.create({
      brand_name: req.body.brand_name,
      labeler_name: req.body.labeler_name,
      marketing_start_date: req.body.marketing_start_date,
      price: req.body.price,
      user: req.body.user,
      product_id: req.body.product_id,
    })
      .then(function(dbsaveDrug) {
        res.json(dbsaveDrug);
      });
  });

  app.post("/api/saveAccount", function(req, res) {
   
    db.profile_table.create({
      first_name: req.body.first_name,
      address_name: req.body.address_name,
      province: req.body.province,
      postal_code: req.body.postal_code
       })
      .then(function(dbsaveAccount) {
        res.json(dbsaveAccount);
      });
  });

};
