/*globals App*/
(function(app) {
  "use strict";

  var sc = app.statechart;
  var views = app.Views;
  var data = app.Data;

  sc.addState('dashboard', {

    parentState: 'application',

    initialSubstate: 'dashboard-upcoming-events',

    enterState: function() {
      this.view = new views.DashboardView(data.Teams, data.Events);
      $('.content').html(this.view.render().el);
    },

    exitState: function() {
      this.view.close();
    },

    showUpcoming: function() { this.goToState('dashboard-upcoming-events'); },

    showTeams: function() { this.goToState('dashboard-teams'); },

    showEvents: function() { this.goToState('dashboard-events'); },

    showAccount: function() { this.goToState('dashboard-account'); },

    idle: function(section) { this.view.idle(section); },

    busy: function(section) { this.view.busy(section); },

    expand: function(section) { this.view.expand(section); },

    collapse: function(section) { this.view.collapse(section); }

  });

  var dashboard_substate = function(name) {
    var state = {
      parentState: 'dashboard',
      enterState: function() { this.sendEvent('expand', name); },
      exitState: function() { this.sendEvent('collapse', name); }
    };
    return state;
  };

  sc.addState('dashboard-upcoming-events', dashboard_substate('upcoming'));
  sc.addState('dashboard-account', dashboard_substate('account'));

  sc.addState('dashboard-teams', {

    parentState: 'dashboard',

    initialSubstate: 'dashboard-teams-loading',

    states: [
      {
        name: 'dashboard-teams-loading',
        enterState: function() {
          var self = this;
          var teams = data.Teams;
          this.sendEvent('busy', 'teams');
          if (teams.length) this.goToState('dashboard-teams-ready');
          else teams.fetch({ success: function() { self.goToState('dashboard-teams-ready'); }});
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

    initialSubstate: 'dashboard-events-loading',

    states: [
      {
        name: 'dashboard-events-loading',
        enterState: function() {
          var self = this;
          var events = data.Events;
          this.sendEvent('busy', 'events');
          if (events.length) this.goToState('dashboard-events-ready');
          else events.fetch({ success: function() { self.goToState('dashboard-events-ready'); }});
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