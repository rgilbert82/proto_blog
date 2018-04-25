var ArticleThumbLinkView = Backbone.View.extend({
  tagName: "li",
  template: App.templates.article_thumb_link,
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    this.$el.appendTo(App.$el.find(this.attributes.column));
  },
  initialize: function() {
    this.render();
    this.model.view = this;
  }
});
