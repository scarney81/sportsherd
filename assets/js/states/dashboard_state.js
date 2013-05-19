(function() {

  var sh = window.SH;
  var sc = window.SH.statechart;

  sc.addState('dashboard', {

    parentState: 'application',

    initialSubstate: 'dashboard-upcoming-events',

    enterState: function() {
      var view = new sh.DashboardView();
      view.render();
      this.setData('view', view);
    },

    exitState: function() {
      var view = this.getData('view');
      if (this.view) this.view.close();
    },

    showUpcoming: function() {
      this.goToState('dashboard-upcoming-events');
    },

    showTeams: function() {
      this.goToState('dashboard-teams');
    },

    showEvents: function() {
      this.goToState('dashboard-events');
    },

    showAccount: function() {
      this.goToState('dashboard-account');
    }

  });

  sc.addState('dashboard-upcoming-events', {

    parentState: 'dashboard',

    enterState: function() {
      var view = this.getData('view');
      if (view) view.expandUpcoming();
    },

    exitState: function() {
      var view = this.getData('view');
      if (view) view.collapseUpcoming();
    }

  });

  sc.addState('dashboard-teams', {

    parentState: 'dashboard',

    enterState: function() {
      var view = this.getData('view');
      if (view) view.expandTeams();
    },

    exitState: function() {
      var view = this.getData('view');
      if (view) view.collapseTeams();
    }

  });

  sc.addState('dashboard-events', {

    parentState: 'dashboard',

    enterState: function() {
      var view = this.getData('view');
      if (view) view.expandEvents();
    },

    exitState: function() {
      var view = this.getData('view');
      if (view) view.collapseEvents();
    }

  });

  sc.addState('dashboard-account', {

    parentState: 'dashboard',

    enterState: function() {
      var view = this.getData('view');
      if (view) view.expandAccount();
    },

    exitState: function() {
      var view = this.getData('view');
      if (view) view.collapseAccount();
    }

  });

})();