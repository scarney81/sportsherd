/*globals App*/
(function(app) {

  var sc = app.statechart;
  var views = app.Views;
  var data = app.Data;

  sc.addState('teams', {

    parentState: 'application',

    initialSubstate: 'teams-loading',

    enterState: function() {
      var teams = data.Teams;
      var view = new views.TeamsView({ collection: teams });

      $('.content').html(view.render().el);
      this.setData('view', view);
    },

    exitState: function() {
      if (this.view) this.view.close();
    }

  });

  sc.addState('teams-loading', {
    
    parentState: 'teams',

    enterState: function() { // TODO: Show loading animation
      this.sendEvent('loadTeams');
    },

    exitState: function() { // TODO: Hide loading animation
    },

    loadTeams: function() {
      var self = this;
      var teams = data.Teams;
      
      if (teams) {
        if (teams.length) this.goToState('teams-ready');
        else teams.fetch({ success: function() { self.goToState('teams-ready'); }});
      }
    }

  });

  sc.addState('teams-ready', {
    
    parentState: 'teams'
    
  });

})(App);