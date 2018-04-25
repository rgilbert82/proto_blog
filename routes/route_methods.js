var path = require("path");
var fs = require('fs');
var articles_path = path.resolve(path.dirname(__dirname), "data/articles.json");
var article_path = path.resolve(path.dirname(__dirname), "data/articles");
var games_path = path.resolve(path.dirname(__dirname), "data/games.json");
var game_path = path.resolve(path.dirname(__dirname), "data/games");
var author_path = path.resolve(path.dirname(__dirname), "data/authors");
var users_path = path.resolve(path.dirname(__dirname), "data/users.json");

var DataManager = {
  getArticles: function() {
    return JSON.parse(fs.readFileSync(articles_path, "utf-8"));
  },
  getArticle: function(id) {
    var file_path = article_path + "/" + id + ".json";
    return JSON.parse(fs.readFileSync(file_path, "utf-8"));
  },
  getGames: function() {
    return JSON.parse(fs.readFileSync(games_path, "utf-8"));
  },
  getGame: function(id) {
    var file_path = game_path + "/" + id + ".json";
    return JSON.parse(fs.readFileSync(file_path, "utf-8"));
  },
  getAuthor: function(id) {
    var file_path = author_path + "/" + id + ".json";
    return JSON.parse(fs.readFileSync(file_path, "utf-8"));
  },
  getLoginInfo: function() {
    return JSON.parse(fs.readFileSync(users_path, "utf-8"));
  },
  setArticleData(id, data) {
    var file_path = article_path + "/" + id + ".json";
    fs.writeFileSync(file_path, JSON.stringify(data), "utf-8");
  }
};

module.exports = DataManager;
