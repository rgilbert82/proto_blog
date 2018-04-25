describe("Articles Collection", function() {
  it("fetches a collection of 2 articles", function(done) {
    expect(App.articles.models.length).toBe(2);
    done();
  });

  it("sorts the articles in the proper order", function(done) {
    expect(App.articles.toJSON()[0].id).toBe(2);
    expect(App.articles.toJSON()[1].id).toBe(1);
    done();
  });
});
