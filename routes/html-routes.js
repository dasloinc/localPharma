// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/.html"));
  });

  // homepage route loads homepage.html
  app.get("/homepage", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/homepage.html"));
  });

  // profile route loads profile.html
  app.get("/products", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/profile.html"));
  });
  
  // store route loads store.html
  app.get("/store", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/store.html"));
  });

  // checkout route loads checkout.html
  app.get("/products", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/checkout.html"));
  });

};
