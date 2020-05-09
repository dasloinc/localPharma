// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
const router = require('express').Router();

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public/index.html"));
  });

  // homepage route loads homepage.html
  router.get("/homepage", function(req, res) {
    res.sendFile(path.join(__dirname, "public/homepage.html"));
  });

  // profile route loads profile.html
  router.get("/products", function(req, res) {
    res.sendFile(path.join(__dirname, "public/profile.html"));
  });
  
  // store route loads store.html
  router.get("/store", function(req, res) {
    res.sendFile(path.join(__dirname, "public/store.html"));
  });

  // checkout route loads checkout.html
  router.get("/checkout", function(req, res) {
    res.sendFile(path.join(__dirname, "public/checkout.html"));
  });

};
