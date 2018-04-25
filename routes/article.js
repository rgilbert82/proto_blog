var path = require("path");
var dataGetter = require(path.resolve(path.dirname(__dirname), "routes/route_methods"));

module.exports = function(router) {
  router.get('/articles/:id', function(req, res) {
    res.render('article', {
      articles: dataGetter.getArticles()
    });
  });

  router.get('/articles/:id/data', function(req, res) {
    var articleID = req.params.id.replace(/^.+_/, '');
      res.send(dataGetter.getArticle(articleID));
  });
};
