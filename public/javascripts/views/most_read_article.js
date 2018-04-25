var MostReadArticleView = Backbone.View.extend({
  tagName: "li",
  template: App.templates.link_title,
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    this.$el.appendTo(App.$el.find("#most_read ol"));
  },
  initialize: function() {
    this.render();
    this.model.view = this;
  }
});
