var AuthorSidebarLinkView = Backbone.View.extend({
  tagName: "li",
  template: App.templates.link_title,
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    this.$el.appendTo(App.$el.find("#author_recent_stories ol"));
  },
  initialize: function() {
    this.render();
    this.model.view = this;
  }
});
