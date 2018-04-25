var path = require("path");
var dataGetter = require(path.resolve(path.dirname(__dirname), "routes/route_methods"));

module.exports = function(router) {
  router.get('/contributors/:id', function(req, res) {
    res.render('author', {
      articles: dataGetter.getArticles()
    });
  });

  router.get('/contributors/:id/data', function(req, res) {
    var authorID = req.params.id.replace(/^.+_/, '');
      res.send(dataGetter.getAuthor(authorID));
  });
};
