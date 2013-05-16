window.Sportsherd.statechart.addState('application', {

  enterState: function() {
    Backbone.history.start({ pushState:true });
  },

  exitState: function() {
    if(this.view) this.view.remove();
  },
  
  doLogin: function() {
    this.goToState('login');
  },

  logout: function() {
    window.location.href = '/logout';
  },

  home: function() {
    this.view = new window.Sportsherd.ApplicationView();
    this.view.render();
  }

});