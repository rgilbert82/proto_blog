var path = require("path");
var dataGetter = require(path.resolve(path.dirname(__dirname), "routes/route_methods"));

module.exports = function(router) {
  router.get('/games/:id', function(req, res) {
    res.render('game', {
      articles: dataGetter.getArticles()
    });
  });

  router.get('/games/:id/data', function(req, res) {
    var gameID = req.params.id.replace(/^.+_/, '');
      res.send(dataGetter.getGame(gameID));
  });
};
