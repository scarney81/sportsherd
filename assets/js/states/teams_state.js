/*globals App, $*/
// #= require ../controllers/groups_controller
// #= require ../controllers/navigation_controller
// #= require ../controllers/teams_controller

(function(app) {
  "use strict";

  var sc = app.Statechart;
  var views = app.Views;
  var groupController = app.Controllers.Groups;
  var navigationController = app.Controllers.Navigation;
  var teamController = app.Controllers.Teams;

  sc.addState('teams', {

    parentState: 'application',

    enterState: function() {
      navigationController.selectItem('Teams');
    },

    exitState: function() {
      navigationController.deselectItem('Teams');
    }

  });

  sc.addState('teams-list', {
    
    parentState: 'teams',

    enterState: function() {
      var teams = teamController.teams;
      var fetched = teamController.fetchedTeams;

      this.view = new views.Teams({ collection: teams });
      $('.content').html(this.view.render().el);

      var state = fetched ? 'teams-ready' : 'teams-loading';
      this.goToState(state);
    },

    exitState: function() {
    }

  });

  sc.addState('teams-loading', {
    
    parentState: 'teams',

    enterState: function() {
      var that = this;

      this.sendEvent('busy');
      teamController.fetchTeams(function() { that.goToState('teams-ready'); });
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

    parentState: 'teams',

    enterState: function() {
      var groups = groupController.groups;

      this.view = new views.NewTeam();
      $('.content').html(this.view.render().el);

      this.sendEvent('loadGroups');
    },

    loadGroups: function() {
      var that = this;
      var fetched = groupController.fetchedGroups;
      var groups = groupController.groups;

      var render = function() { that.view.renderGroups(groups); };

      if (fetched) render();
      else groupController.fetchGroups(render);
    },

    exitState: function() {
      if (this.view) this.view.close();
    }

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
      this.sendEvent('busy');
      this.view = new views.LoadingContent();
      $('.content').html(this.view.render().el);
      teamController.fetchTeam(teamController.selectedTeam.id, function() { that.goToState('team-ready'); });
    },

    exitState: function() {
      this.sendEvent('idle');
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

    }
  });



})(App);