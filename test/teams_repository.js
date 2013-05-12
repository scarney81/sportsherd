/*globals describe, it, should, beforeEach*/
var Repository = require('../repositories/repository');

describe('team', function() {
  var teams = null;
  var saved_team = null;

  beforeEach(function(done) {
    teams = new Repository('Team');
    done();
  });

  it('should be able to create a team', function(done) {
    teams.save({ name: 'new team' }, function(err, team) {
      if (err) return done(err);
      team.should.have.property('name', 'new team');
      saved_team = team;
      done();
    });
  });

  it('should be able to get a team', function(done) {
    var id = saved_team._id;
    teams.find_by_id(id, function(err, team) {
      if (err) return done(err);
      done();
    });
  });

  it('should be able to remove a team', function(done) {
    teams.remove(saved_team, function(err) {
      if (err) return done(err);
      done();
    });
  });

});