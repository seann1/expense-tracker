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

  initialize: function(item, quantity, price) {
    this.item = item;
    this.price = price;
    this.quantity = quantity;
  },

  totalCost: function() {
    return this.quantity * this.price;
  },

};




$(document).ready(function() {

  var currentCat;

  $("form#expense-tracker").submit(function(event) {


    var categoryItem = $("input#category").val();
    var categoriesObject = {catName: categoryItem, purchases: [] }
    event.preventDefault();
    currentCat = categoriesObject;
    $(".cat-list").append("<li><span class='ind-cat'>" + categoryItem + "</span></li>");
    $(".ind-cat").last().click(function(event) {
      //$("#table-items-body").empty();
      //$("#table-items-body").empty();
      $("#purchases").show();
      $("#cat-name").show();
      $("#cat-name").text(categoryItem + " Purchases");
      event.preventDefault();

      //$("#table-items-body").empty();

      //$('#table-items-body').show();
    });
  });

    $('form#purchases-input').submit(function(event) {
      event.preventDefault();
      //$("#table-items-body").empty();
      var item = $("input#item").val();
      var quantity = parseInt($("input#quantity").val());
      var price = parseInt($("input#price").val());

      var newPurchase = Object.create(Purchase);
      newPurchase.initialize(item, quantity, price);


      currentCat.purchases.push(newPurchase);

      console.log(currentCat.purchases);
      $("#table-items-body").empty();
      currentCat.purchases.forEach(function(purchase) {
          $("#table-items-body").append("<tr>" +
                          "<td>" + purchase.item + "</td>" +
                          "<td>" + purchase.quantity + "</td>" +
                          "<td>" + purchase.price + "</td>" +
                          "<td>" + purchase.totalCost() + "</td>" +
                        "</tr>");
         });

      $('#table-items-body').show();
      $(".table").show();
      $(".result").show();
      event.preventDefault();
    });




    $(".result").show();

    event.preventDefault();
});
