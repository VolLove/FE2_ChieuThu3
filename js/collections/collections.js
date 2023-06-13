var ProductCollection = Backbone.Collection.extend({
  model: ProductModel,
  url: "data/products.json",
});
var CategoriesCollection = Backbone.Collection.extend({
  model: CategoriesModel,
  url: "data/categories.json",
  parse: function (response) {
    // xử lý dữ liệu trả về từ file JSON
    return response;
  },
});
var ThreeCategoryColection = Backbone.Collection.extend({
  model: CategoriesModel,
  url: "data/categories.json",
  parse: function (response) {
    return response.slice(0, 3);
  },
});

var ProductByIdCate = Backbone.Collection.extend({
  model: ProductModel,
  url: "data/products.json",
  parse: function (response) {
    // Lọc các sản phẩm với id_category được truyền vào
    return response
      .filter(
        function (product) {
          return product.categories_id === this.categoryId;
        }.bind(this)
      )
      .slice(0, 8); // Chỉ lấy 8 sản phẩm đầu tiên
  },
  initialize: function (options) {
    // Lưu lại categoryId được truyền vào
    this.categoryId = options.categoryId;
  },
});
var Cart = Backbone.Collection.extend({
  model: ProductModel,
  total: function () {
    return this.reduce(function (memo, product) {
      return memo + product.get("price");
    }, 0);
  },
});
