/*globals App*/
(function(app) {
  "use strict";

  var sc = app.Statechart;
  var views = app.Views;
  var data = app.Data;

  sc.addState('teams', {

    parentState: 'application',

    enterState: function() {
      var teams = data.Teams;

      this.view = new views.Teams({ collection: teams });
      $('.content').html(this.view.render().el);

      var state = teams.length ? 'teams-ready' : 'teams-loading';
      this.goToState(state);
    },

    exitState: function() {
      if (this.view) this.view.close();
    }

  });

  sc.addState('teams-loading', {
    
    parentState: 'teams',

    enterState: function() {
      this.sendEvent('busy');
      
      var self = this;
      data.Teams.fetch({ success: function() { self.goToState('teams-ready'); }});
    },

    exitState: function() {
      this.sendEvent('idle');
    }

  });

  sc.addState('teams-ready', {
    
    parentState: 'teams',

    showTeam: function(id) {
      app.Router.navigate('/teams/'+id, { trigger: true });
    },

    createTeam: function() {
      app.Router.navigate('/teams/new', { trigger: true });
    }
    
  });

  sc.addState('teams-new', {

    parentState: 'application',

    enterState: function() {
      this.view = new views.NewTeam();
      $('.content').html(this.view.render().el);

      this.sendEvent('loadGroups');
    },

    loadGroups: function() {
      var self = this;
      var groups = data.Groups;
      groups.fetch({ success: function(groups) {
        self.view.renderGroups(groups);
      }});
    },

    exitState: function() {
      if (this.view) this.view.close();
    }

  });

})(App);