window.Sportsherd.statechart.addState('application', {

  enterState: function(){
    this.view = new window.Sportsherd.ApplicationView();
    this.view.render();
  },
  exitState: function(){
    if(this.view) this.view.remove();
  }

});