(function() {

  var sh = window.SH;
  var sc = window.SH.statechart;

  sc.addState('dashboard', {

    parentState: 'application',

    initialSubstate: 'dashboard-upcoming-events',

    enterState: function() {
      this.view = new sh.DashboardView(sh.Data.Teams, sh.Data.Events);
      $('.content').html(this.view.render().el);
    },

    exitState: function() {
      this.view.close();
    },

    showUpcoming: function() { this.goToState('dashboard-upcoming-events'); },

    showTeams: function() { this.goToState('dashboard-teams'); },

    showEvents: function() { this.goToState('dashboard-events'); },

    showAccount: function() { this.goToState('dashboard-account'); },

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

    enterState: function() {
      var self = this;
      var teams = sh.Data.Teams;
      if (teams.length) this.goToState('dashboard-teams-ready');
      else teams.fetch({ success: function() { self.goToState('dashboard-teams-ready'); }});
    },

    states: [
      {
        name: 'dashboard-teams-ready',
        enterState: function() {
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
      var self = this;
      var events = sh.Data.Events;
      if (events.length) this.goToState('dashboard-events-ready');
      else events.fetch({ success: function() { self.goToState('dashboard-events-ready'); }});
    },

    states: [
      {
        name: 'dashboard-events-ready',
        enterState: function() {
          this.sendEvent('expand', 'events');
        },
        exitState: function() {
          this.sendEvent('collapse', 'events');
        }
      }
    ]

  });
  
})();