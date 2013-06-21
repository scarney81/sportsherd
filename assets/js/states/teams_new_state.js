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


  sc.addState('teams-new', {

    parentState: 'teams',

    enterState: function() {
      var team = teamController.getNewTeam();
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

    groupSelected: function(id){
      teamController.selectedTeam.set('facebookGroupId',id);
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
      var id = this.getData('id');
      console.log(id);

    },

    exitState: function() {
      if (this.view) this.view.close();
    }

  });


})(App);