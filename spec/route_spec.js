var request = require("request");
var blog = require("../app.js");
var root = "http://localhost:3000/";

describe("Proto Blog Server", function() {
  describe("GET /", function() {
    it("should return status code 200", function() {
      request.get(root, function(err, res, body) {
        expect(res.statusCode).toBe(200);
        blog.closeServer();
        done();
      });
    });
  });
});
