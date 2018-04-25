var ArticleView = Backbone.View.extend({
  tagName: "article",
  template: App.templates.article,
  commentTemplate: App.templates.comment,
  events: {
    "click #comments h1:first-child": "toggleCommentsList",
    "submit #comments form": "commentIfLoggedIn"
  },
  message: function(msg) {
    var $messageWindow = $("#comments .message_window");
    App.message($messageWindow, msg);
  },
  toggleCommentsList: function() {
    $("#comments section").slideToggle();
  },
  commentIfLoggedIn: function(e) {
    var $f = $(e.currentTarget);
    var isValidComment = $.trim($f.serializeArray()[0].value).length > 0;
    var articleID = "&articleID=" + $("article header").attr("data-id");
    var dateTime = "&time=" + new Date();
    var username = "&username=";
    var commentData = $f.serialize() + articleID + dateTime;
    var login = window.sessionStorage.protoBlogLogin;
    var isLoggedIn = login && JSON.parse(login).loggedIn === true;

    e.preventDefault();
    $("#comments form")[0].reset();

    if (isLoggedIn && isValidComment) {
      username += JSON.parse(login).username;
      commentData += username;
      this.addComment(commentData);
    } else if (isLoggedIn) {
      this.message("Invalid Comment");
    } else {
      this.message("You must be logged in to comment. Try logging in as 'guest' with password 'mega'.");
    }
  },
  addComment: function(commentData) {
    var self = this;

    $.ajax({
      url: "/comment",
      type: "post",
      data: commentData,
      success: function(obj) {
        self.renderNewComment(obj);
      }
    })
  },
  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    App.$el.html(this.$el);
    App.articles.sort().slice(0, 5).forEach(this.renderSidebarLinks);
  },
  renderSidebarLinks: function(article) {
    new ArticleSidebarLinkView( {
      attributes: {
        class: "article_link article_link_wrapper"
      },
      model: article
    });
  },
  renderNewComment: function(obj) {
    var newComment = obj.comments[obj.comments.length - 1];
    $(".comments_list").append(this.commentTemplate(newComment));
  },
  initialize: function() {
    Handlebars.registerPartial('comment_partial', this.commentTemplate);
    this.render();
  }
});
