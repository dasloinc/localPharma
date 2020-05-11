$(document).ready(function () {
    $.get("/api/products", function (data) {
      for (const [index, val] of data.entries()) {
        let row = $('<div></div>').append($('<span></span>').text(index+1), $('<span></span>').text(val.name));
        $('#insertProducts').append(row);
        console.log(row);
      }
    });
  })