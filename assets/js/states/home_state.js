window.SH.statechart.addState('home', {

  parentState: 'application',

  enterState: function() {

  },

  exitState: function() {
    if(this.view) this.view.remove();
  }

});