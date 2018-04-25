var GameView = Backbone.View.extend({
  tagName: "article",
  template: App.templates.game,
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    App.$el.html(this.$el);
  },
  initialize: function() {
    this.render();
  }
});
