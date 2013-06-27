/*globals App, $*/
// #= require ../controllers/groups_controller
// #= require ../controllers/teams_controller
// #= require ../models/team_model

(function(app) {
  'use strict';

  var sc = app.Statechart;
  var views = app.Views;
  var Team = app.Models.Team;
  var groupController = app.Controllers.Groups;
  var teamController = app.Controllers.Teams;

  sc.addState('teams-new', {

    parentState: 'teams',

    enterState: function() {
      // create and store team model for child states to use
      var team = new Team();
      this.setData('model', team);
      this.view = new views.NewTeam();
      $('.content').html(this.view.render().el);
    },

    newSelectTeam: function(){
      this.goToState('teams-new-select');
    },

    newCreateTeam: function(){
      this.goToState('groups-new', { onCreate: 'teams-new-confirm' });
    },

    exitState: function() {
      if (this.view) this.view.close();
      // remove the model if exiting create new team
      this.removeData('model');
    }

  });

  sc.addState('teams-new-select', {

    parentState: 'teams-new',

    enterState: function() {
      this.view = new views.NewTeamSelect();
      $('.content').html(this.view.render().el);

      this.sendEvent('loadGroups');
    },

    loadGroups: function() {
      var groups = groupController.groups;
      var view = new views.Groups({ collection: groups });

      this.view.$el.find('.groups').html(view.render().el);
      this.view.views.push(view);

      var fetched = groupController.fetchedGroups;
      if (!fetched) groupController.fetchGroups();
    },

    selectGroup: function(group) {
      this.goToState('teams-new-confirm', {group:group});
    },

    exitState: function() {
      if (this.view) this.view.close();
    }

  });

  sc.addState('teams-new-confirm', {

    parentState: 'teams-new',

    enterState: function() {
      var team = this.getData('model');
      var group = this.getData('group');

      if (team && group) {
        team.set('name', group.get('name'));
        team.set('facebookGroupId', group.id);
      }


      var view = new views.NewTeamConfirm({model: team});
      this.setData('view', view);
      $('.content').html(view.render().el);
    },

    exitState: function() {
      var view = this.getData('view');
      if (view) view.close();
    },

    saveTeam: function(team) {
      var that = this;
      var success = function() { that.goToState('team-created'); };
      var failure = function() { that.goToState('team-notCreated'); };
      teamController.createTeam(team, success, failure);
    },

    states: [
      {
        name: 'team-created',

        enterState: function() {
          var view = this.getData('view');
          view.showSuccessMessage();
        },

        exitState: function() {
          var view = this.getData('view');
          view.hideSuccessMessage();
        },

        completed: function() {
          this.goToState('teams-list');
        }
      },
      {
        name: 'team-notCreated',

        enterState: function() {
          var view = this.getData('view');
          view.showFailureMessage();
        },

        exitState: function() {
          var view = this.getData('view');
          view.hideFailureMessage();
        }
      }
    ]

  });

})(App);