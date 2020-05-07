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
    res.sendFile(path.join(__dirname, "../public/folder1.html"));
  });

  // cms route loads cms.html
  app.get("/cms", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/cms.html"));
  });

  // folder1 route loads blog.html
  app.get("/folder1", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/folder1.html"));
  });

  // authors route loads products-manager.html
  app.get("/products", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/products-manager.html"));
  });

};
