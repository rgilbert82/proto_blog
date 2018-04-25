var path = require("path");
var dataGetter = require(path.resolve(path.dirname(__dirname), "routes/route_methods"));

/* GET home page. */
module.exports = function(router) {
  router.get('/', function(req, res, next) {
    res.render('index', {
      articles: dataGetter.getArticles()
    });
  });
};
