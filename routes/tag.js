var path = require("path");
var dataGetter = require(path.resolve(path.dirname(__dirname), "routes/route_methods"));

module.exports = function(router) {
  router.get('/tag/:id', function(req, res) {
    res.render('category', {
      articles: dataGetter.getArticles()
    });
  });
};
