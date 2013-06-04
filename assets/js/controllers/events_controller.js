/*globals App*/
// #= require '../collections/event_collection'

(function(app) {

  var controllers = app.Controllers;
  var Events = app.Collections.Events;

  controllers.Events = {

    events: new Events(),

    fetchedEvents: false,

    fetchEvents: function(done) {
      var that = this;

      this.events.fetch({ success: function(events) {
        that.events = events;
        that.fetchedEvents = true;
        if (done) done();
      }});
    }

  };

})(App);