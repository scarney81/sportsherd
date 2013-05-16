window.Sportsherd.statechart.addState('login', {

  parentState: 'application',

  enterState: function() {
    this.view = new window.Sportsherd.LoginView();
    this.view.render();
  },

  exitState: function() {
    if(this.view) this.view.remove();
  },

  login: function() {
    window.location.href = '/login';
  }

});