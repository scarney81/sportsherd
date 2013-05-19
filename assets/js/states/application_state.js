(function() {

  var sh = window.SH;
  var sc = window.SH.statechart;

  sc.addState('application', {

    enterState: function() {
      this.view = new sh.ApplicationView();
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

})();