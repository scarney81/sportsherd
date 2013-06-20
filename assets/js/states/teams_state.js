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

  sc.addState('teams-new', {

    parentState: 'teams',

    enterState: function() {
      var team = teamController.newTeam();
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

    }

  });

  sc.addState('teams-new-create', {

    parentState: 'teams-new',

    enterState: function() {

      this.view = new views.NewTeamCreate();
      $('.content').html(this.view.render().el);

    },

    exitState: function() {
      
    }

  });

  sc.addState('teams-new-confirm', {

    parentState: 'teams-new',

    enterState: function() {
      var id = this.getData('id');
      console.log(id);

    },

    exitState: function() {
      
    }

  });


})(App);