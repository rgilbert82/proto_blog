var Articles = Backbone.Collection.extend({
  model: Article,
  comparator: function(article) {
    return -article.get("id");
  }
});
