(function() {

  var sh = window.SH;
  var sc = window.SH.statechart;

  sc.addState('events', {

    parentState: 'application',

    enterState: function() {
      var view = new sh.EventsView();
      $('.content').html(view.render().el);
      this.setData('view', view);
    },

    exitState: function() {
      var view = this.getData('view');
      if (view) view.close();
    }

  });

})();