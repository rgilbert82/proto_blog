var FeaturedArticleView = Backbone.View.extend({
  tagName: "div",
  template: App.templates.featured_article_link,
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    App.$el.find("#featured .col1").html(this.$el);
  },
  initialize: function() {
    this.render();
    this.model.view = this;
  }
});
