var App = {
  templates: JST,
  $el: $("main"),
  indexView: function() {
    this.index = new IndexView();
    this.renderArticleLinks();
    this.renderSlideshows();
    window.scrollTo(0, 0);
  },
  articleView: function(route) {
    var self = this;

    $.ajax({
      url: "/articles/" + route + "/data",
      error: function() {
        new ErrorView();
      },
      success: function(data) {
        var id = data.id;
        var obj2 = self.articles.where({ "id": id })[0].toJSON();
        _.extend(data, obj2);

        new ArticleView({
          model: new Article(data)
        });
        window.scrollTo(0, 0);
      }
    });
  },
  gameView: function(route) {
    $.ajax({
      url: "/games/" + route + "/data",
      error: function() {
        new ErrorView();
      },
      success: function(data) {
        new GameView({
          model: new Article(data)
        });
        window.scrollTo(0, 0);
      }
    });
  },
  contribView: function(route) {
    var self = this;

    $.ajax({
      url: "/contributors/" + route + "/data",
      error: function() {
        new ErrorView();
      },
      success: function(data) {
        new AuthorView({
          model: new Author(data)
        });
        window.scrollTo(0, 0);
      }
    });
  },
  categoryView: function(category) {
    var data = { "category": category, "categoryType": "Article Category" };

    new CategoryView({
      attributes: {
        id: "category_articles"
      },
      model: new Category(data)
    });

    this.renderCategoryLinks(category);
    window.scrollTo(0, 0);
  },
  tagView: function(tag) {
    var data = { "category": tag, "categoryType": "Article Tag" };

    new CategoryView({
      attributes: {
        id: "category_articles"
      },
      model: new Category(data)
    });

    this.renderTagLinks(tag);
    window.scrollTo(0, 0);
  },
  infoView: function() {
    new InfoView({
      attributes: {
        id: "info_body"
      }
    });
    window.scrollTo(0, 0);
  },
  renderCategoryLinks: function(category) {
    var self = this;

    function renderLinks(article) {
      self.renderArticleLinkView(article, "#category_articles ul");
    }

    if (category === "2017") {
      this.articles.sort().forEach(renderLinks);
    } else {
      this.articles.sort().where({ "category": category }).slice().forEach(renderLinks);
    }
  },
  renderTagLinks: function(tag) {
    var self = this;
    var taggedArticles = App.articles.sort().filter(function(article) { return article.get("tags").indexOf(tag) !== -1});

    taggedArticles.forEach(function(article) { self.renderArticleLinkView(article, "#category_articles ul"); });
  },
  renderArticleLinks: function() {
    this.renderCategoryColumns();
    this.renderCategoryThumbColumns();
    this.renderMostReadColumn();
    this.renderFeaturedArticleView(this.articles.sort().first());
    this.articles.sort().slice(0, 5).forEach(this.renderLatestArticleLinkView);
    $("#latest").find("img")[0].src = this.articles.toJSON()[0].image;
  },
  renderSlideshows: function() {
    var self = this;

    slideshowImages.forEach(function(image) {
      $("#slideshow_wrapper .slideshow ul").append(self.templates.slide(image));
    });
  },
  renderCategory: function(category, n) {
    var self = this;

    this.articles.sort().where({ "indexCategory": category }).slice(0, n).forEach(function(article) {
      self.renderArticleLinkView(article, "#" + category + " ul");
    });
  },
  renderMostReadColumn: function() {
    var mostReadList = this.articles.slice().sort(function(a, b) {
      return b.get("views") - a.get("views");
    }).slice(0, 5);

    mostReadList.forEach(this.renderMostReadArticleView);
    $("#most_read").find("img")[0].src = mostReadList[0].toJSON().image;
  },
  renderCategoryColumns: function() {
    var self = this;
    var categories_1 = ["news", "blogs", "history"];
    var categories_2 = ["light", "wily", "cossack"];

    categories_1.forEach(function(category) { self.renderCategory(category, 3) });
    categories_2.forEach(function(category) { self.renderCategory(category, 2) });
  },
  renderCategoryThumbColumns: function() {
    var self = this;
    var categories = ["2017", "games", "gallery"];

    function renderCategory(category) {
      self.articles.sort().where({ "indexCategory": category }).slice(0, 1).forEach(function(article) {
        self.renderArticleThumbLinkView(article, "#" + category + " ul");
      });
    }

    categories.forEach(renderCategory);
  },
  renderArticleLinkView: function(article, col) {
    new ArticleLinkView( {
      attributes: {
        column: col,
        class: "article_link article_link_wrapper"
      },
      model: article
    });
  },
  renderLatestArticleLinkView: function(article) {
    new LatestArticleLinkView( {
      attributes: {
        class: "latest_article_link article_link_wrapper"
      },
      model: article
    });
  },
  renderArticleThumbLinkView: function(article, col) {
    new ArticleThumbLinkView( {
      attributes: {
        column: col,
        class: "thumb_link article_link_wrapper"
      },
      model: article
    });
  },
  renderMostReadArticleView: function(article) {
    new MostReadArticleView({
      attributes: {
        class: "most_read_article article_link_wrapper"
      },
      model: article
    });
  },
  renderFeaturedArticleView: function(article) {
    new FeaturedArticleView({
      attributes: {
        class: "featured_article article_link_wrapper"
      },
      model: article
    });
  },
  adjustPageForLoggedInUser: function() {
    var sessionObj = window.sessionStorage.protoBlogLogin;
    var loginObj;

    if (sessionObj) {
      loginObj = JSON.parse(sessionObj);
    } else {
      return
    }

    if (loginObj.loggedIn === true) {
      $("#header_login").text(loginObj.username);
      $("#login .dropdown form").css("display", "none");
      $("#login .dropdown a").css("display", "block");
    }
  },
  adjustPageForLoggedOutUser: function() {
    $("#header_login").text("Log In");
    $("#login .dropdown a").css("display", "none");
    $("#login .dropdown form").css("display", "block");
    $(".dropdown:visible").css("display", "none");
  },
  login: function(e) {
    e.preventDefault();

    var $f = $(e.currentTarget);
    var $loginMessageWindow = $("#login_message_window .message_window");
    var self = this;
    $(".dropdown:visible").css("display", "none");

    $.ajax({
      url: $f.attr("action"),
      type: $f.attr("method"),
      data: $f.serialize(),
      success: function(obj) {
        $f[0].reset();

        if (obj.loggedIn === true) {
          window.sessionStorage.setItem("protoBlogLogin", JSON.stringify(obj));
          self.adjustPageForLoggedInUser();
        } else {
          self.message($loginMessageWindow, "Invalid Login");
        }
      }
    });
  },
  logout: function(e) {
    e.preventDefault();

    delete window.sessionStorage.protoBlogLogin;
    this.adjustPageForLoggedOutUser();
  },
  message: function(messageWindow, msg) {
    messageWindow.find("h2").text(msg);
    messageWindow.fadeIn(400);
    window.setTimeout(function() {
      messageWindow.fadeOut(400);
    }, 3000);
  }
};

_.extend(App, Backbone.Events);

$(".dropdown_li").hover(function(e) {
  var $dropdown = $(e.currentTarget).find(".dropdown");
  $dropdown.fadeIn(100);
}, function(e) {
  var $dropdown = $(e.currentTarget).find(".dropdown");
  $dropdown.fadeOut(100);
});

$(".dropdown form").on("submit", App.login.bind(App));
$("#login .dropdown a").on("click", App.logout.bind(App));
