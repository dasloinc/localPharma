$("#createAccount").on("click", function (e) {
  e.preventDefault();

  var newAccountSave = {
    first_name: $("#first_name").val(),
    address_name: $("#address_name").val(),
    province: $("#province").val(),
    postal_code: $("#postal_code").val(),
    email: $("#email").val(),
  };

  console.log(newAccountSave);

  $.post("/api/saveAccount", newAccountSave, function (data) {
    if (data) {
      alert("Thank you, Account Submitted");
      window.location.replace("/store?userID=" + newAccountSave.first_name);
    } else {
      alert("Something went wrong ...");
    }
  });
});
