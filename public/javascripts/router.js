var router = new (Backbone.Router.extend({
  routes: {
    "articles/:articleID": App.articleView.bind(App),
    "games/:gameID": App.gameView.bind(App),
    "contributors/:authorID": App.contribView.bind(App),
    "category/:categoryName": App.categoryView.bind(App),
    "tag/:tagName": App.tagView.bind(App),
    "info": App.infoView.bind(App)
  },
  index: function() { App.indexView(); },
  initialize: function() {
    this.route(/^\/?$/, "index", this.index);
  }
}))();

Backbone.history.start({
  pushState: true
});

function navigateToRoute(pathName) {
  $(".dropdown:visible").css("display", "none");
  router.navigate(pathName, { trigger: true });
}

$("#hamburger_wrapper").on("click", function(e) {
  var pathName = "/";

  e.preventDefault();
  navigateToRoute(pathName);
});

$("body").on("click", "a.article_link_tag", function(e) {
  var articleID = $(e.target).closest(".article_link_wrapper").find("input").attr("data-id");
  var pathName = "articles/article_" + articleID;

  e.preventDefault();
  navigateToRoute(pathName);
});

$("body").on("click", ".author_link_tag",function(e) {
  var authorID = $(e.target).attr("data-author_id");
  var pathName = "contributors/author_" + authorID;

  e.preventDefault();
  navigateToRoute(pathName);
});

$("body").on("click", ".category_link_tag", function(e) {
  var category = $(e.currentTarget).attr("data-category");
  var pathName = "category/" + category;

  e.preventDefault();

  if (category === "gallery") {
    $("#proto_pics")[0].scrollIntoView(true);
  } else {
    navigateToRoute(pathName);
  }
});

$("body").on("click", ".tipsheet_link_tag", function(e) {
  var gameID = $(e.currentTarget).attr("data-id");
  var pathName = "games/megaman_" + gameID;

  e.preventDefault();
  navigateToRoute(pathName);
});

$("body").on("click", ".tagged_link_tag", function(e) {
  var tagName = $(e.currentTarget).find("h4").text();
  var pathName = "tag/" + tagName;

  e.preventDefault();
  navigateToRoute(pathName);
});

$("footer").on("click", ".more_info_link", function(e) {
  var infoSection = "#" + $(e.currentTarget).attr("data-info");

  e.preventDefault();

  navigateToRoute("info");
  $(infoSection)[0].scrollIntoView(true);
});
