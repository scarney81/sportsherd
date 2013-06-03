/*globals App*/
// #= require '../collections/team_collection'

(function(app) {

  var controllers = app.Controllers;
  var Teams = app.Collections.Teams;

  controllers.Teams = {

    teams: new Teams(),

    fetchedTeams: false,

    fetchTeams: function(done) {
      var that = this;

      this.teams.fetch({ success: function(teams) {
        that.teams = teams;
        that.fetchedTeams = true;
        if (done) done();
      }});
    }

  };

})(App);