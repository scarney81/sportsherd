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

    switchState: function(state) {
      sc.goToState(state, 'default');
    },

    logout: function() {
      window.location.href = '/logout';
    },

    gotoDashboard: function() {
      window.SH.router.navigate('', { trigger: true });
    },

    gotoEvents: function() {
      window.SH.router.navigate('/events', { trigger: true });
    },

    gotoTeams: function() {
      window.SH.router.navigate('/teams', { trigger: true });
    }

  });

})();