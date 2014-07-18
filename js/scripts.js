var Purchase = {
  price: 0,
  quantity: 0,
  totalCost: function() {
    return this.quantity * this.price;
  }
};

$(document).ready(function() {
  $("form#expense-tracker").submit(function(event) {

    var categoryItem = $("input#category").val();

    $(".cat-list").append("<li><span class='ind-cat'>" + categoryItem + "</span></li>");


    var newPurchase = Object.create(Purchase);

    newPurchase.item = $("input#item").val();
    newPurchase.quantity = parseInt($("input#quantity").val());
    newPurchase.price = parseInt($("input#price").val());

    console.log(newPurchase.totalCost());


    $("tbody#purchases").append("<tr>" +
                        "<td>" + newPurchase.item + "</td>" +
                        "<td>" + newPurchase.quantity + "</td>" +
                        "<td>" + newPurchase.price + "</td>" +
                        "<td>" + newPurchase.totalCost() + "</td>" +
                      "</tr>");


    $(".result").show();

    event.preventDefault();
  })
});
