var getRoutes = "https://api.fda.gov/drug/ndc.json?count=route.exact";
var getDosageForm = "https://api.fda.gov/drug/ndc.json?count=dosage_form.exact";
var drugArray = [];

getRoutesFunction();
getDosageFormFunction();

var userID = getUserID("userID");
var email = "";

$.get("/api/checkAccount/" + userID, function (data) {
  if (data) {
    email = data.email;
  } else {
    alert("something went wrong ...");
  }
});

$("#checkName").on("click", function (e) {
  e.preventDefault();

  const clearList = document.getElementById("drugList");
  clearList.innerHTML = "";

  var dosageForm = $("#dosageForm").val().trim();
  var route = $("#route").val().trim();

  getDrugList(route, dosageForm);
});

$("#drugList").on("click", function (e) {
  e.preventDefault();

  var newDrugSave = {
    user: userID,
    brand_name: drugArray.results[e.target.id].brand_name,
    labeler_name: drugArray.results[e.target.id].labeler_name,
    marketing_start_date: drugArray.results[e.target.id].marketing_start_date,
    product_id: drugArray.results[e.target.id].spl_id,
    price: "400",
    email: email,
  };

  $.post("/api/saveDrug", newDrugSave, function (data) {
    if (data) {
      alert("Thank you, Drug Submitted");
      location.reload();
    } else {
      alert("Something went wrong ...");
    }
  });
});

function getDrugList(route, dosageForm) {
  var base = "https://api.fda.gov/drug/ndc.json?count=";
  var uri = `https://api.fda.gov/drug/ndc.json?search=route:${route}+AND+dosage_form=${dosageForm}&limit=12`;

  $.ajax({
    url: uri,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    drugArray = response;

    for (let index = 0; index < response.results.length; index++) {
      $("#drugList").append(`
        <div class="column">
    <img class="thumbnail" src="https://picsum.photos/300/400?random=${index}">
    <h5>${response.results[index].brand_name}</h5>
    <p>${response.results[index].labeler_name}</p>
    <p>$400</p>
    <a href="#" class="button expanded buyDrug" id="${index}">Buy</a>
  </div>
        
`);
    }
  });
}

function getDosageFormFunction() {
  $.ajax({
    url: getDosageForm,
    method: "GET",
  }).then(function (response) {
    console.log(response);

    for (let index = 0; index < response.results.length; index++) {
      $("#dosageForm").append(
        "<option>" + response.results[index].term + "</option>"
      );
    }
  });
}

function getRoutesFunction() {
  $.ajax({
    url: getRoutes,
    method: "GET",
  }).then(function (response) {
    console.log(response);

    for (let index = 0; index < response.results.length; index++) {
      $("#route").append(
        "<option>" + response.results[index].term + "</option>"
      );
    }
  });
}

function getUserID(name) {
  var results = new RegExp("[?&]" + name + "=([^&#]*)").exec(
    window.location.href
  );
  if (results == null) {
    return null;
  } else {
    return decodeURI(results[1]) || 0;
  }
}
