var Category = {
  initialize: function(name) {
    this.name = name;
    this.purchases = [];
  },
  totalCost: function(place) {
    var total = 0;
    for (var i = 0; i <= this.purchases.length; i++) {
    total = total + this.purchase.totalCost(i);
      console.log(total);
    }
    return total;
  }
};

var Purchase = {
  item: "",
  price: 0,
  quantity: 0,
  totalCost: function() {
    return this.quantity * this.price;
  },
  initialize: function(name) {
    this.name = name
  }
};








$(document).ready(function() {
  $("form#expense-tracker").submit(function(event) {

    var categoryItem = $("input#category").val();

    $(".cat-list").append("<li><span class='ind-cat'>" + categoryItem + "</span></li>");

    $(".ind-cat").last().click(function(event) {
      $("#purchases").show();
      $("#cat-name").text(categoryItem);
      event.preventDefault();
    });

    var newPurchase = Object.create(Purchase);

    newPurchase.item = $("input#item").val();
    newPurchase.quantity = parseInt($("input#quantity").val());
    newPurchase.price = parseInt($("input#price").val());

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
