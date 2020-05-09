$(document).ready(function() {
    
  
    // Our initial products array
    var products = [];
  
    // Getting products from database when page loads
    getProduct();
    // This function grabs product from the database and updates the view
    function getProduct() {
      $.get("/api/product", function(data) {
        // product = data;
        // initializeRows();
        console.log(data);
      });
    }
   })
  
