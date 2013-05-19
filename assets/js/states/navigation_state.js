(function() {

  var sh = window.SH;
  var sc = window.SH.statechart;

  sc.addState('nav', {

    globalConcurrentState: 'navigation',

    enterState: function() {
      this.view = new sh.NavigationView();
      this.view.render();
    },

    exitState: function() {
      if (this.view) this.view.close();
    },

    logout: function() {
      window.location.href = '/logout';
    },

    dashboard: function() {
      sc.goToState('dashboard', 'default');
    }

  });

})();