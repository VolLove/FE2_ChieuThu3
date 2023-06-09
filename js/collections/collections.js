var Products = Backbone.Collection.extend({
  model: ProductModel,
  url: "data/products.json",
});
var productList = new Products();
productList.fetch({
  success: function () {
    var productsToShow = productList.models.slice(0, 3);
    console.log(productsToShow);
  },
});
