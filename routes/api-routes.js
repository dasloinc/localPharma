
var db = require("../models");

var nodemailer = require('nodemailer');

const Handlebars = require("handlebars");

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'dmitrisnodemailer2@gmail.com',
    pass: '%6uD/"ZbwdRA{m__'
  }
});


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
      email: req.body.email,
    })
      .then(function(dbsaveDrug) {

        console.log(dbsaveDrug)
        res.json(dbsaveDrug);
      });
  });

  app.post("/api/saveAccount", function(req, res) {
   
    db.profile_table.create({
      first_name: req.body.first_name,
      address_name: req.body.address_name,
      province: req.body.province,
      postal_code: req.body.postal_code,
      email: req.body.email
       })
      .then(function(dbsaveAccount) {
      
        // using handlebars engine to generate email text from template

        const emailTextTemplate = Handlebars.compile("Dear valued customer {{firstName}} {{lastName}}, Thank you for spending time with us today and hope that you enjoy yourself!");
        const emailText = emailTextTemplate({ firstName: req.body.first_name, lastName: req.body.last_name })

        var mailOptions = {
          from: 'dmitrisnodemailer2@gmail.com',
          to: dbsaveAccount.dataValues.email,
          subject: `Welcome to Our Store ${dbsaveAccount.dataValues.first_name} !!!`,
          text: emailText
        };
        
        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        });


        res.json(dbsaveAccount);
      });
  });

};
