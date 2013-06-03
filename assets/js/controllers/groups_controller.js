/*globals App*/
(function(app) {

  var controllers = app.Controllers;
  var Groups = app.Collections.Groups;

  controllers.Groups = {

    groups: new Groups(),

    fetchedGroups: false,

    fetchGroups: function(done) {
      var that = this;

      this.groups.fetch({ success: function(groups) {
        that.groups = groups;
        that.fetchedGroups = true;
        if (done) done();
      }});
    }

  };

})(App);