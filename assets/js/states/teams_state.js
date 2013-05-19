(function() {

  var sh = window.SH;
  var sc = window.SH.statechart;

  sc.addState('teams', {

    parentState: 'application',

    initialSubstate: 'teams-loading',

    enterState: function() {
      var teams = sh.Data.Teams;

      var view = new sh.TeamsView({ collection: teams });
      $('.content').html(view.render().el);
      this.setData('view', view);
    },

    exitState: function() {
      if (this.view) this.view.close();
    }

  });

  sc.addState('teams-loading', {
    
    parentState: 'teams',

    enterState: function() {
      var self = this;
      var teams = sh.Data.Teams;
      if (teams) {
        if (teams.length) this.goToState('teams-ready');
        else teams.fetch({ success: function() { self.goToState('teams-ready'); }});
      }
    }

  });

  sc.addState('teams-ready', {
    
    parentState: 'teams',
    
    enterState: function() {}

  });

})();