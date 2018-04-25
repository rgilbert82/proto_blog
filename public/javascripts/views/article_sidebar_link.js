var ArticleSidebarLinkView = Backbone.View.extend({
  tagName: "li",
  template: App.templates.article_sidebar_link,
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    this.$el.appendTo(App.$el.find("#article_sidebar_links ul"));
  },
  initialize: function() {
    this.render();
    this.model.view = this;
  }
});
