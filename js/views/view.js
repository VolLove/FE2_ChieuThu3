var PersonView = Backbone.View.extend({
  tagName: "li",

  template: _.template(
    "<strong><%= name %></strong> (<%= age %>) - <%= occupation %>"
  ),

  initialize: function () {
    this.render();
  },

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
  },
});
var PeopleView = Backbone.View.extend({
  tagName: "ul",

  initialize: function () {
    this.render();
  },

  render: function () {
    this.collection.each(function (person) {
      var personView = new PersonView({ model: person });
      this.$el.append(personView.el);
    }, this);
  },
});
