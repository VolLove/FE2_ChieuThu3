var ProductModel = Backbone.Model.extend({
  defaults: {
    name: "",
    description: "",
    manufacturer_id: 0,
    categories_id: 0,
    image: "",
    price: 0,
    off: 0,
    start: 0,
    add: "2023-06-11T04:34:56.932Z",
  },
});
var CategoriesModel = Backbone.Model.extend({
  default: {
    id: "1",
    name: "Phone",
    image: "icon-phone.png",
  },
});
