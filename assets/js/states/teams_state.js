/*globals App, $*/
// #= require ../controllers/groups_controller
// #= require ../controllers/navigation_controller
// #= require ../controllers/teams_controller

(function(app) {
  'use strict';

  var sc = app.Statechart;
  var views = app.Views;

  var navigationController = app.Controllers.Navigation;
  var teamController = app.Controllers.Teams;

  sc.addState('teams', {

    parentState: 'application',

    enterState: function() { navigationController.selectItem('Teams'); },

    exitState: function() { navigationController.deselectItem('Teams'); }

  });

  sc.addState('teams-list', {

    parentState: 'teams',

    enterState: function() {
      var fetched = teamController.fetchedTeams;
      var state = fetched ? 'teams-ready' : 'teams-loading';
      this.goToState(state);
    }

  });

  sc.addState('teams-loading', {

    parentState: 'teams-list',

    enterState: function() {
      var that = this;
      teamController.fetchTeams(function() { that.goToState('teams-ready'); });
    }

  });

  sc.addState('teams-ready', {

    parentState: 'teams-list',

    enterState: function() {
      var state = teamController.teams.length ? 'teams-list-hasTeams' : 'teams-list-noTeams';
      this.goToState(state);
    },

    states: [
      {
        name: 'teams-list-hasTeams',

        enterState: function() {
          var teams = teamController.teams;
          this.view = new views.Teams({ collection: teams });
          $('.content').html(this.view.render().el);
        },

        exitState: function() {
          if (this.view) this.view.close();
        }
      },
      {
        name: 'teams-list-noTeams',

        enterState: function() {
          this.view = new views.NoTeams();
          $('.content').html(this.view.render().el);
        },

        exitState: function() {
          if (this.view) this.view.close();
        }
      }
    ]

  });

  sc.addState('team', {

    parentState: 'teams',

    enterState: function() {
      var id = this.getData('id');
      var team = teamController.getTeam(id);
      var fetched = team.get('fetched') || false;
      var state = fetched ? 'team-ready' : 'team-loading';
      this.goToState(state);
    }

  });

  sc.addState('team-loading', {

    parentState: 'team',

    enterState: function() {
      var that = this;
      this.view = new views.LoadingContent();
      $('.content').html(this.view.render().el);
      teamController.fetchTeam(function() { that.goToState('team-ready'); });
    },

    exitState: function() {
      if(this.view) this.view.close();
    }
  });

  sc.addState('team-ready', {

    parentState: 'team',

    enterState: function() {
      this.view = new views.TeamProfile({ model: teamController.selectedTeam });
      $('.content').html(this.view.render().el);
    },

    exitState: function() {
      if (this.view) this.view.close();
    }
  });



})(App);