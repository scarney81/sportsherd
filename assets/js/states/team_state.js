/*globals App*/
(function(app) {
  "use strict";

  var data = app.Data;
  var helpers = app.Helpers;
  var sc = app.Statechart;
  var models = app.Models;
  var views = app.Views;

  sc.addState('team', {

    parentState: 'application',

    enterState: function() {
      var self = this;
      var id = this.getData('id');

      var team = data.Teams.get(id);
      var event = !!team ? 'show' : 'fetch';
      
      if (helpers.isNull(team)) team = new models.Team({ id: id });

      this.model = team;
      this.view = new views.Team({ model: team });
      this.sendEvent(event);
    },

    exitState: function() {
      if (this.view) this.view.close();
    },

    fetch: function() {
      var that = this;

      this.model.fetch({ sucess: function(team) {
        data.Teams.push(team);
        that.model = team;
        that.sendEvent('show');
      }});
    },

    show: function() {
      $('.content').html(this.view.render().el);
    }

  });

})(App);