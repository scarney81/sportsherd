(function() {

  var sh = window.SH;
  var sc = window.SH.statechart;

  sc.addState('dashboard', {

    parentState: 'application',

    enterState: function() {
      this.view = new sh.DashboardView();
      this.view.render();
    },

    exitState: function() {
      if (this.view) this.view.close();
    }

  });

  sc.addState('dashboard-upcoming-events', {

    parentState: 'dashboard',

    enterState: function() {
      // expand upcoming events view
    },

    willExitState: function(done) {
      // collapse upcoming events view
      done();
    }

  });

  sc.addState('dashboard-teams', {

    parentState: 'dashboard',

    enterState: function() {
      // expand teams view
    },

    willExitState: function(done) {
      // collapse teams view
      done();
    }

  });

  sc.addState('dashboard-events', {

    parentState: 'dashboard',

    enterState: function() {
      // TODO: expand events view
    },

    willExitState: function(done) {
      // TODO: collapse events view
      done();
    }

  });

  sc.addState('dashboard-account', {

    parentState: 'dashboard',

    enterState: function() {
      // TODO: expande account view
    },

    willExitState: function(done) {
      // TODO: collapse account view
      done();
    }

  });

})();