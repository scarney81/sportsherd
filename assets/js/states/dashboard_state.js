/*globals App*/
// #= require ../controllers/events_controller
// #= require ../controllers/navigation_controller
// #= require ../controllers/teams_controller

(function(app) {
  "use strict";

  var sc = app.Statechart;
  var views = app.Views;

  var eventController = app.Controllers.Events;
  var navigationController = app.Controllers.Navigation;
  var teamController = app.Controllers.Teams;

  sc.addState('dashboard', {

    parentState: 'application',

    initialSubstate: 'dashboard-teams',

    enterState: function() {
      navigationController.selectItem('Home');
      
      var teams = teamController.teams;
      var events = eventController.events;
      this.view = new views.Dashboard(teams, events);
      $('.content').html(this.view.render().el);
    },

    exitState: function() {
      navigationController.deselectItem('Home');
      this.view.close();
    },

    showTeams: function() { this.goToState('dashboard-teams'); },

    showEvents: function() { this.goToState('dashboard-events'); },

    idle: function(section) { this.view.idle(section); },

    busy: function(section) { this.view.busy(section); },

    expand: function(section) { this.view.expand(section); },

    collapse: function(section) { this.view.collapse(section); }

  });

  sc.addState('dashboard-teams', {

    parentState: 'dashboard',

    enterState: function() {
      var state = teamController.fetchedTeams ? 'dashboard-teams-ready' : 'dashboard-teams-loading';
      this.goToState(state);
    },

    states: [
      {
        name: 'dashboard-teams-loading',
        enterState: function() {
          var that = this;

          this.sendEvent('busy', 'teams');
          teamController.fetchTeams(function() { that.goToState('dashboard-teams-ready'); });
        }
      },
      {
        name: 'dashboard-teams-ready',
        enterState: function() {
          this.sendEvent('idle', 'teams');
          this.sendEvent('expand', 'teams');
        },
        exitState: function() {
          this.sendEvent('collapse', 'teams');
        }
      }
    ]

  });

  sc.addState('dashboard-events', {

    parentState: 'dashboard',

    enterState: function() {
      var state = eventController.fetchedEvents ? 'dashboard-events-ready' : 'dashboard-events-loading';
      this.goToState(state);
    },

    states: [
      {
        name: 'dashboard-events-loading',
        enterState: function() {
          var that = this;

          this.sendEvent('busy', 'events');
          eventController.fetchEvents(function() { that.goToState('dashboard-events-ready'); });
        }
      },
      {
        name: 'dashboard-events-ready',
        enterState: function() {
          this.sendEvent('idle', 'events');
          this.sendEvent('expand', 'events');
        },
        exitState: function() {
          this.sendEvent('collapse', 'events');
        }
      }
    ]

  });
  
})(App);