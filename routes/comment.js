var path = require("path");
var dataManager = require(path.resolve(path.dirname(__dirname), "routes/route_methods"));

module.exports = function(router) {
  router.post("/comment", function(req, res) {
    var comment = req.body;
    var article = dataManager.getArticle(comment.articleID);
    var numComments = article.comments.length;
    var newCommentID = numComments > 0 ? Number(article.comments[numComments - 1].commentID) + 1 : 1;

    comment.commentID = newCommentID;
    article.comments.push(comment);
    dataManager.setArticleData(comment.articleID, article);

    res.json(article);
  });
};
