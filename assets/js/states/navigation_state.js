window.SH.statechart.addState('nav', {

  globalConcurrentState: 'navigation',

  enterState: function() {
    this.view = new window.SH.NavigationView();
    this.view.render();
  },

  exitState: function() {
    if (this.view) this.view.close();
  },

  logout: function() {
    window.location.href = '/logout';
  },

  home: function() {
    // TODO: Build some kind of home state
  }


});