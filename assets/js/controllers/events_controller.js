/*globals App*/
// #= require '../collections/event_collection'
// #= require '../models/event_model'

(function(app) {

  var controllers = app.Controllers;
  var Events = app.Collections.Events;
  var Event = app.Models.Event;

  controllers.Events = {

    events: new Events(),

    selectedEvent: null,

    fetchedEvents: false,

    fetchEvents: function(done) {
      var that = this;

      this.events.fetch({ success: function(events) {
        that.events = events;
        that.fetchedEvents = true;
        if (done) done();
      }});
    },

    getEvent: function(id) {
      return this.events.get(id) || new Event({ id: id });
    },

    fetchEvent: function(done) {
      if (this.selectedEvent === null) {
        if (done) done();
        return;
      }

      this.selectedEvent.fetch({
        success: function(evt) {
          evt.set('fetched', true);
          if (done) done();
        }
      });
    }

  };

})(App);