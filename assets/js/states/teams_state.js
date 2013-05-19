(function() {

  var sh = window.SH;
  var sc = window.SH.statechart;

  sc.addState('teams', {

    parentState: 'application',

    enterState: function() {
      var view = new sh.TeamsView();
      $('.content').html(view.render().el);
      this.setData('view', view);
    },

    exitState: function() {
      var view = this.getData('view');
      if (view) view.close();
    }

  });

})();