window.Sportsherd.statechart.addState('application', {

  enterState: function(){
    Backbone.history.start({ pushState:true });
  },

  exitState: function(){
    if(this.view) this.view.remove();
  },

  doLogin: function() {
    this.goToState('login');
  },

  home: function(){
    this.view = new window.Sportsherd.ApplicationView();
    this.view.render();
  }

});