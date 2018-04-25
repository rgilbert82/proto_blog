var AuthorView = Backbone.View.extend({
  tagName: "article",
  template: App.templates.author,
  events: {
    "submit #author_email_alerts form": "emailAlertsMessage",
    "submit #author_contact form": "contactAuthorMessage"
  },
  emailAlertsMessage: function(e) {
    var $messageWindow = $("#author_email_alerts .message_window");
    var msg = "Thanks for signing up for fake updates!";

    e.preventDefault();

    $("#author_email_alerts form")[0].reset();
    App.message($messageWindow, msg);
  },
  contactAuthorMessage: function(e) {
    var $messageWindow = $("#author_contact .message_window");
    var msg = "Thanks for contacting an 8-bit character!";

    e.preventDefault();

    $("#author_contact form")[0].reset();
    App.message($messageWindow, msg);
  },
  render: function() {
    var authorID;

    this.$el.html(this.template(this.model.toJSON()));
    App.$el.html(this.$el);

    authorID = Number($("#author_body").attr("data-id"));
    App.articles.where({"author_id": authorID}).forEach(this.renderSidebarLinks);
  },
  renderSidebarLinks: function(article) {
    new AuthorSidebarLinkView( {
      attributes: {
        class: "most_read_article article_link_wrapper"
      },
      model: article
    });
  },
  initialize: function() {
    this.render();
  }
});
