var path = require("path");
var dataGetter = require(path.resolve(path.dirname(__dirname), "routes/route_methods"));

module.exports = function(router) {
  router.get('/info', function(req, res, next) {
    res.render('info', {
      articles: dataGetter.getArticles(),
    });
  });
};
