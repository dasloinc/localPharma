var email = "";

$.get("/api/products", function (data) {
  if (data) {
    $("#shopping_cart_items_count").text(data.length);
    let total = 0;
    for (var i = 0; i < data.length; i++) {
      let cartItem = data[i];
      let row =
        '<p><a href="#">' +
        cartItem.brand_name +
        '</a><span class="price">$' +
        cartItem.price +
        "</span></p>";
      $("#shopping_cart_items").append(row);

      total += +cartItem.price;
    }

    $("#shopping_cart_total").text("$" + total);
    console.log(data);
    email = data[0].email;
  }
});

$("#purchase").on("click", function (e) {
  console.log(email);
});
