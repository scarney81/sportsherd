(function() {

  var sh = window.SH;
  var sc = window.SH.statechart;

  var navigate = function(url) {
    return function() { window.SH.router.navigate(url, { trigger: true }); };
  };

  sc.addState('nav', {

    globalConcurrentState: 'navigation',

    enterState: function() {
      this.view = new sh.NavigationView();
      this.view.render();
    },

    exitState: function() {
      if (this.view) this.view.close();
    },

    switchState: function(state) { sc.goToHistoryState(state, 'default'); },

    logout: function() { window.location.href = '/logout'; },

    gotoProfile: navigate('/profile'),

    gotoDashboard: navigate(''),

    gotoEvents: navigate('/events'),

    gotoTeams: navigate('/teams')

  });

})();