var ProductCollection = Backbone.Collection.extend({
  model: ProductModel,
  url: "data/products.json",
});
var FirstThreeProducts = Backbone.Collection.extend({
  model: ProductModel,
  url: "data/products.json",
  parse: function (response) {
    return response.slice(0, 3); // Lấy 3 phần tử đầu tiên của response
  },
});
