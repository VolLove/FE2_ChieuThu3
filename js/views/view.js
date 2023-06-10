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
var IndexView = Backbone.View.extend({
  el: "#sliderMain",
  initialize: function () {
    this.listenTo(this.collection, "reset", this.render);
  },
  render: function () {
    var template = _.template(SliderProduct);
    var html = template({ products: this.collection.toJSON() });
    this.$el.html(html);
  },
});
