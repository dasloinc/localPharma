$("#checkAccount").on("click", function (e) {
    e.preventDefault();
    
console.log("click")
  
 
    var accountCheck = $("#first_name").val();
   
    $.get("/api/checkAccount/"+accountCheck, function(data) {
      if (data) {
      alert("OK - Welcome to our store!");
      window.location.replace("/store");

    }
  
    else {
      alert("Please create an account ...");
      window.location.replace("/createacct");
     
    }
  });



});