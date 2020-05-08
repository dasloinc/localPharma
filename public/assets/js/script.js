console.log("hello")




var getRoutes = 'https://api.fda.gov/drug/ndc.json?count=route';
var getDosageForm = 'https://api.fda.gov/drug/ndc.json?count=dosage_form';


getRoutesFunction()
getDosageFormFunction()



$("#checkName").on("click", function (e) {
    e.preventDefault();

    console.log("clicked")
    var dosageForm = $("#dosageForm").val().trim();
    var route = $("#route").val().trim();
  
  
    
    getDrugList(route, dosageForm);

  
  });



function getDrugList(route, dosageForm){

    var base = 'https://api.fda.gov/drug/ndc.json?count=';
    var uri = `https://api.fda.gov/drug/ndc.json?search=route:${route}+AND+dosage_form=${dosageForm}&limit=10`;

    $.ajax({

        url: uri,
        method: "GET"
        
      }).then(function(response){
    
        console.log(response)
    
        for (let index = 0; index < response.results.length; index++) {
            $("#responses").append(`<h1>${response.results[index].brand_name}</h1><br><p>${response.results[index].labeler_name}</p>`);
            
        }
          
       
    
    
      })
    


}


function getDosageFormFunction(){

    $.ajax({

        url: getDosageForm,
        method: "GET"
        
      }).then(function(response){
    
        console.log(response)
    
        for (let index = 0; index < response.results.length; index++) {
          $("#dosageForm").append("<option>"+ response.results[index].term+ "</option>" )
          
        }
    
    
      });

}


function getRoutesFunction(){

    $.ajax({

        url: getRoutes,
        method: "GET"
        
      }).then(function(response){
    
        console.log(response)
    
        for (let index = 0; index < response.results.length; index++) {
          $("#route").append("<option>"+ response.results[index].term+ "</option>" )
          
        }
    
    
      });




}



