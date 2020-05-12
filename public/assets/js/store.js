
var getRoutes = 'https://api.fda.gov/drug/ndc.json?count=route';
var getDosageForm = 'https://api.fda.gov/drug/ndc.json?count=dosage_form';
var drugArray =[]

getRoutesFunction()
getDosageFormFunction()

$("#checkName").on("click", function (e) {
    e.preventDefault();

    const clearList = document.getElementById("drugList");
    clearList.innerHTML = '';
    

console.log("clicked")
var dosageForm = $("#dosageForm").val().trim();
var route = $("#route").val().trim();

getDrugList(route, dosageForm);
});

$("#drugList").on("click", function (e) {
    e.preventDefault();
    var newDrugSave={

      user: "Dmitri",
      brand_name: drugArray.results[e.target.id].brand_name,
      labeler_name: drugArray.results[e.target.id].labeler_name,
      marketing_start_date: drugArray.results[e.target.id].marketing_start_date,
      product_id: drugArray.results[e.target.id].spl_id,
      price: "400"

    }

     $.post("/api/saveDrug", newDrugSave,
  function(data) {

   
    if (data) {
      alert("Thank you, Drug Submitted");
      location.reload();

    }

    
    else {
      alert("Something went wrong ...");
     
    }
  });



});

function getDrugList(route, dosageForm){

var base = 'https://api.fda.gov/drug/ndc.json?count=';
var uri = `https://api.fda.gov/drug/ndc.json?search=route:${route}+AND+dosage_form=${dosageForm}&limit=12`;

$.ajax({
    url: uri,
    method: "GET"
  }).then(function(response){
    console.log(response)
    drugArray =response;

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
})
};

function getDosageFormFunction(){

    $.ajax({
    url: getDosageForm,
    method: "GET"
    }).then(function(response){
    console.log(response)

    for (let index = 0; index < response.results.length; index++) {
    $("#dosageForm").append("<option>"+ response.results[index].term+ "</option>" )}
})
};


function getRoutesFunction(){

$.ajax({
url: getRoutes,
method: "GET"
}).then(function(response){
console.log(response)

for (let index = 0; index < response.results.length; index++) {
    $("#route").append("<option>"+ response.results[index].term+ "</option>" )
}
})
};