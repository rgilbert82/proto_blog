var IndexView = Backbone.View.extend({
  id: "index_view",
  template: App.templates.index,
  events: {
    "click .nav_arrow": "changeTipsheet",
    "click .slide": "displaySlide",
    "click #gallery_slide_layer": "removeSlide",
    "click #featured_article_info": "clickFeaturedArticle",
    "submit #email_signup form": "message"
  },
  message: function(e) {
    var $messageWindow = $("#email_signup .message_window");
    var $form = $("#email_signup form");
    var msg = "Thanks for signing up for fake updates!";

    e.preventDefault();

    $form[0].reset();
    App.message($messageWindow, msg);
  },
  changeTipsheet: function(e) {
    var prevOrNext = $(e.currentTarget).attr("class");
    var $listItems = $(e.currentTarget).closest("div").siblings("ul").find("li");
    var $li = $listItems.filter(":visible");
    var idx = $li.index();
    var prevIdx = idx === 0 ? $listItems.length - 1 : idx - 1;
    var nextIdx = idx === $listItems.length - 1 ? 0 : idx + 1;

    $listItems.stop();
    $li.fadeOut(300);

    if (prevOrNext.match("left_arrow")) {
      $listItems.eq(prevIdx).delay(300).fadeIn(300);
    } else {
      $listItems.eq(nextIdx).delay(300).fadeIn(300);
    }
  },
  displaySlide: function(e) {
    var imageSource = $(e.currentTarget).find("img").attr("src");

    e.preventDefault();

    $("#gallery_slide_layer").find("img")[0].setAttribute("src", imageSource);
    $("#gallery_slide_layer").fadeIn(400);
  },
  removeSlide: function(e) {
    e.preventDefault();

    $("#gallery_slide_layer").fadeOut(400);
  },
  clickFeaturedArticle: function(e) {
    if (!e.target.classList.contains("author_link_tag")) {
      $(".featured_article .article_link_tag")[0].click();
    }
  },
  render: function() {
    this.$el.html(this.template());
    App.$el.html(this.$el);
  },
  initialize: function() {
    this.render();
  }
});
