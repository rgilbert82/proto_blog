var InfoView = Backbone.View.extend({
  tagName: "section",
  template: App.templates.info,
  events: {
    "submit #general_email_alerts form": "emailAlertsMessage"
  },
  emailAlertsMessage: function(e) {
    var $messageWindow = $("#general_email_alerts .message_window");
    var msg = "Thanks for signing up for fake updates!";

    e.preventDefault();

    $("#general_email_alerts form")[0].reset();
    App.message($messageWindow, msg);
  },
  render: function() {
    this.$el.html(this.template());
    App.$el.html(this.$el);
  },
  initialize: function() {
    this.render();
  }
});
