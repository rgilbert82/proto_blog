var LatestArticleLinkView = Backbone.View.extend({
  tagName: "li",
  template: App.templates.link_title,
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    this.$el.appendTo(App.$el.find("#latest ul"));
  },
  initialize: function() {
    this.render();
    this.model.view = this;
  }
});
