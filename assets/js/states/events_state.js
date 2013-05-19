(function() {

  var sh = window.SH;
  var sc = window.SH.statechart;

  sc.addState('events', {

    parentState: 'application',

    enterState: function() {
      this.view = new sh.EventsView();
      $('.content').html(this.view.render().el);
    },

    exitState: function() {
      if (this.view) this.view.close();
    }

  });

})();