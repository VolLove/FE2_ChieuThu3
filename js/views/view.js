// mẫu
var TableProductView = Backbone.View.extend({
  el: "#product-table",
  initialize: function () {
    this.listenTo(this.collection, "reset", this.render);
  },
  render: function () {
    var template = _.template(TableProductTemplate);
    var html = template({ products: this.collection.toJSON() });
    this.$el.html(html);
  },
});

// load navbar với 3 sản phẩm
var NavbarLoad = Backbone.View.extend({
  el: "#navbar-contain",
  initialize: function () {
    this.listenTo(this.collection, "reset", this.render);
  },
  render: function () {
    var template = _.template(NavBar);
    var html = template({ threeCategories: this.collection.toJSON() });
    this.$el.html(html);

    // load dropdown
    var categories = new CategoriesCollection();
    new categoryNav({ collection: categories });
    categories.fetch({
      reset: true,
    });
  },
});
// load tất cả sp nào dropdowmenu
var categoryNav = Backbone.View.extend({
  el: "#dropdownmenu",
  initialize: function () {
    this.listenTo(this.collection, "reset", this.render);
  },
  render: function () {
    var template = _.template(allcategories);
    var html = template({ categories: this.collection.toJSON() });
    this.$el.html(html);
  },
});
//load table sản phẩm
var TableProduct = Backbone.View.extend({
  el: "#product-info",
  initialize: function () {
    this.collection.on("reset", this.render, this);
  },
  render: function () {
    var template = _.template(ProductTable);
    var html = template({ categories: this.collection.toJSON() });
    this.$el.html(html);
    var cate = this.collection.toJSON();
    cate.forEach((element) => {
      var products = new ProductByIdCate({ categoryId: element.id });

      new SingleProduct({
        collection: products,
        el: "#" + element.name.trim().replace(" ", ""),
      });

      products.fetch({
        reset: true,
      });
    });
  },
});
// load thẻ sản phẩm
var SingleProduct = Backbone.View.extend({
  el: "#Phone",
  initialize: function (options) {
    this.listenTo(this.collection, "reset", this.render);
  },

  render: function () {
    var template = _.template(singleProduct);
    var html = template({ products: this.collection.toJSON() });
    this.$el.html(html);
  },
});
