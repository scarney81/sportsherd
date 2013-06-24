/*globals App, $*/
// #= require ../controllers/groups_controller
// #= require ../models/team_model

(function(app) {
  'use strict';

  var sc = app.Statechart;
  var views = app.Views;

  var Team = app.Models.Team;
  var groupController = app.Controllers.Groups;

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
      this.goToState('teams-new-create');
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
      var team = this.getData('model');
      if (team) {
        team.set('name', group.get('name'));
        team.set('facebookGroupId', group.id);
      }
      this.goToState('teams-new-confirm');
    },

    exitState: function() {
      if (this.view) this.view.close();
    }

  });

  sc.addState('teams-new-create', {

    parentState: 'teams-new',

    enterState: function() {
      this.view = new views.NewTeamCreate();
      $('.content').html(this.view.render().el);
    },

    exitState: function() {
      if (this.view) this.view.close();
    }

  });

  sc.addState('teams-new-confirm', {

    parentState: 'teams-new',

    enterState: function() {
      var team = this.getData('model');
      console.log(team);
    },

    exitState: function() {
      if (this.view) this.view.close();
    }

  });

})(App);