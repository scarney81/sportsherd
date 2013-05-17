window.SH.statechart.addState('application', {

  enterState: function() {
    this.view = new window.SH.ApplicationView();
    this.view.render();
    
    Backbone.history.start({ pushState:true });
  },

  exitState: function() {
    if(this.view) this.view.close();
  },

  toggleNavigation: function() {
    if (this.view) this.view.toggleNavigation();
  }

});