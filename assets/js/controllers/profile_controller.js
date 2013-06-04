/*globals App*/
// #= require '../models/profile_model'
// #= require '../collections/profile_collection'

(function(app) {

  var controllers = app.Controllers;
  var Profile = app.Models.Profile;
  var Profiles = app.Collections.Profiles;

  controllers.Profiles = {

    profiles: new Profiles(),

    currentUser: new Profile({ id: 'my' }),

    fetchedCurrent: false,

    fetchCurrent: function(done) {
      var that = this;

      this.currentUser.fetch({ success: function(profile) {
        that.profiles.push(profile);
        that.currentProfile = profile;
        if (done) done();
      }});
    }

  };

})(App);
