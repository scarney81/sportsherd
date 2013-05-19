(function() {

  var sh = window.SH;
  var sc = window.SH.statechart;

  sc.addState('dashboard', {

    parentState: 'application',

    initialSubstate: 'dashboard-upcoming-events',

    enterState: function() {
      var view = new sh.DashboardView(sh.Data.Teams);
      $('.content').html(view.render().el);
      this.setData('view', view);
    },

    exitState: function() {
      var view = this.getData('view');
      if (view) view.close();
    },

    showUpcoming: function() { this.goToState('dashboard-upcoming-events'); },

    showTeams: function() { this.goToState('dashboard-teams'); },

    showEvents: function() { this.goToState('dashboard-events'); },

    showAccount: function() { this.goToState('dashboard-account'); }

  });

  var dashboard_substate = function(name) {
    var state = {

      parentState: 'dashboard',
      
      enterState: function() {
        var view = this.getData('view'), func = 'expand'+name;
        if (view && view[func] && typeof view[func] === 'function') view[func]();
      },

      exitState: function() {
        var view = this.getData('view'), func = 'collapse'+name;
        if (view && view[func] && typeof view[func] === 'function') view[func]();
      }

    };
    return state;
  };

  sc.addState('dashboard-upcoming-events', dashboard_substate('Upcoming'));

  sc.addState('dashboard-teams', {

    parentState: 'dashboard',

    enterState: function() {
      var self = this;
      var teams = sh.Data.Teams;
      if (teams) {
        if (teams.length) this.goToState('dashboard-teams-ready');
        else teams.fetch({ success: function() { self.goToState('dashboard-teams-ready'); }});
      }
    },

    states: [
      {
        name: 'dashboard-teams-ready',

        enterState: function() {
          var view = this.getData('view');
          if (view) view.expandTeams();
        },

        exitState: function() {
          var view = this.getData('view');
          if (view) view.collapseTeams();
        }
      }
    ]

  });

  sc.addState('dashboard-events', dashboard_substate('Events'));
  
  sc.addState('dashboard-account', dashboard_substate('Account'));

})();