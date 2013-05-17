window.SH.statechart.addState('login', {

  parentState: 'application',

  enterState: function() {
    this.view = new window.SH.LoginView();
    this.view.render();
  },

  exitState: function() {
    if(this.view) this.view.close();
  },

  login: function() {
    window.location.href = '/login';
  }

});