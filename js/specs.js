describe ("Purchase", function() {
  describe("totalCost", function() {
    it("will multiply a purchased item by the amount entered", function() {
      var pizza = Object.create(Purchase);
      pizza.quantity = 1;
      pizza.price = 10;
      pizza.totalCost;
      pizza.totalCost().should.equal(10);
    });
  });
});

