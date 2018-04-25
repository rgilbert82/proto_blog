describe("Login", function() {
  it("logs in with valid username and password combo", function(done) {
    $.ajax({
      url: "/login",
      type: "post",
      data: "username=admin&password=password",
      success: function(obj) {
        expect(obj.loggedIn).toBe(true);
        done();
      }
    });
  });

  it("doesn't log in with invalid username and password combo", function(done) {
    $.ajax({
      url: "/login",
      type: "post",
      data: "username=admin&password=wrongpassword",
      success: function(obj) {
        expect(obj.loggedIn).toBe(false);
        done();
      }
    });
  });
});
