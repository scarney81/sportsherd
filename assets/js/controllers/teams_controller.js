/*globals App*/
// #= require '../collections/team_collection'

(function(app) {

  var controllers = app.Controllers;
  var Teams = app.Collections.Teams;
  var Team = app.Models.Team;

  controllers.Teams = {

    teams: new Teams(),

    fetchedTeams: false,

    selectedTeam: null,

    fetchTeams: function(done) {
      var that = this;

      this.teams.fetch({ success: function(teams) {
        that.teams = teams;
        that.fetchedTeams = true;
        if (done) done();
      }});
    },

    getTeam: function(id){
      var team = this.teams.get(id);
      if (!team) {
        team = new Team({ _id: id });
        this.teams.push(team);
      }

      this.selectedTeam = team;
      return team;
    },

    fetchTeam: function(done){
      this.selectedTeam.fetch({
        success: function(team) {
          team.set('fetched', true);
          if (done) done();
        }
      });
    }

  };

})(App);