window.Sportsherd.statechart.addState('application', {

  enterState: function(){
    Backbone.history.start({pushState:true});
  },
  exitState: function(){
    if(this.view) this.view.remove();
  },
  login: function(){
    alert('foo');
  },
  default: function(){
    this.view = new window.Sportsherd.ApplicationView();
    this.view.render();
  }

});