var CategoryView = Backbone.View.extend({
  tagName: "section",
  template: App.templates.category,
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    App.$el.html(this.$el);
  },
  initialize: function() {
    this.render();
  }
});
