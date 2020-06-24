$("#checkAccount").on("click", function (e) {
  e.preventDefault();

  console.log("click");

  var accountCheck = $("#first_name").val();

  $.get("/api/checkAccount/" + accountCheck, function (data) {
    if (data) {
      alert("OK - Welcome to our store!");
      console.log(data);
      window.location.replace("/store?userID=" + data.first_name);
    } else {
      alert("Please create an account ...");
      window.location.replace("/createacct");
    }
  });
});
