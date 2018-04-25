var path = require("path");
var dataGetter = require(path.resolve(path.dirname(__dirname), "routes/route_methods"));

module.exports = function(router) {
  router.post("/login", function(req, res) {
    var login = req.body;
    var validLogins = dataGetter.getLoginInfo();
    var loginObj = { "username": "", "loggedIn": false };

    validLogins.forEach(function(obj) {
      if (login.username === obj.username && login.password === obj.password) {
        loginObj.username = login.username;
        loginObj.loggedIn = true;

        return
      }
    });

    res.json(loginObj);
  });
};
