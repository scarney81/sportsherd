window.SH.statechart.addState('application', {

  enterState: function() {
    Backbone.history.start({ pushState:true });
  },

  exitState: function() {
    if(this.view) this.view.close();
  },

  logout: function() {
    window.location.href = '/logout';
  },

  home: function() {
    this.view = new window.SH.ApplicationView();
    this.view.render();
  }

});