$(document).ready(function () {



// Make a request for a user with a given ID
  axios.get('http://localhost:8080/api/products')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });


  // $.get("/api/products", function (data) {
  //   for (const [index, val] of data.entries()) {
  //     let row = $('<div></div>').append($('<span></span>').text(index+1), $('<span></span>').text(val.name));
  //     $('#insertProducts').append(row);
  //     console.log(row);
  //   }
  // });
})
