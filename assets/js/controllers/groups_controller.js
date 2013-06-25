/*globals App*/
// #= require '../collections/group_collection'

(function(app) {
  'use strict';

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
    },

    createGroup: function(group, success, failure) {
      this.groups.create(group, { wait: true, success: success, error: failure });
    }

  };

})(App);