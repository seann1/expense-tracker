describe ("Purchase", function() {
  describe("totalCost", function() {
    it("will multiply a purchased item by the amount entered", function() {
      var pizza = Object.create(Purchase);
      pizza.quantity = 1;
      pizza.price = 10;
      pizza.totalCost().should.equal(10);
    });
  });
  describe("initialize", function() {
    it("will give give a purchase a name", function() {
      var pizza = Object.create(Purchase);
      pizza.initialize("pizza");
      pizza.name.should.equal("pizza");
    });
  });
});

describe ("Category", function() {
  describe("initialize", function () {
    it("will give a category a name and display an array of the purched items in that category", function() {
      var testInitialize = Object.create(Category);
      testInitialize.initialize();
      testInitialize.purchases.should.eql([]);
    });
  });
  describe("totalCost", function() {
    it("will loop through each array element and give a grand total of purchases for that category", function() {
      var testTotalCost = Object.create(Category);
      //create a purhcase object and add it to that category
      var pizza = Object.create(Purchase);
      pizza.initialize("pizza");
      pizza.quantity = 2;
      pizza.price = 10;

      var sandwich = Object.create(Purchase);
      sandwich.initialize("sandwich");
      sandwich.quantity = 2;
      sandwich.price = 5;

      var school = Object.create(Category);
      school.initialize("school");
      school.totalCost().should.equal(30);
    });
  });
});

