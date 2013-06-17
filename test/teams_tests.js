/*globals describe, it, should, before, after, beforeEach, afterEach*/
var Teams = require('../repositories/team_repository');

describe('teams', function() {
  var teams = new Teams();
  var currentTeam = null;

  var clean_up = function(done) {
    teams.removeAll(function(err) {
      if (err) return done(err);
      done();
    });
  };

  before(clean_up);
  after(clean_up);

  beforeEach(function(done) {
    var new_team = { name: 'The Cereal Killers', facebookGroupId: '1234567890' };
    teams.create(new_team, function(err, team) {
      if (err) return done(err);
      currentTeam = team;
      done();
    });
  });

  afterEach(function(done) {
    currentTeam.remove(function(err) {
      if (err) return done(err);
      done();
    });
  });

  it('returns all teams', function(done) {
    teams.all(function(err, teams) {
      if (err) return done(err);
      teams.should.be.an.instanceOf(Array);
      teams.length.should.be.above(0);
      done();
    });
  });

  it('creates a new team', function(done) {
    var new_team = { name: 'The Thunder Down Under', facebookGroupId: '0987654321' };
    teams.create(new_team, function(err, team) {
      if (err) return done(err);
      team.should.have.property('name', 'The Thunder Down Under');
      done();
    });
  });

  it('cannot create team without name', function(done) {
    teams.create({ facebookGroupId: '1234567890' }, function(err, team) {
      if (!err && team) return done('should not be able to create a team without a name');
      err.should.have.property('message', 'Validation failed');
      err.should.have.property('errors');
      err.errors.should.have.property('name');
      done();
    });
  });

  it('cannot create team without facebookId', function(done) {
    teams.create({ name: 'A new team' }, function(err, team) {
      if (!err && team) return done('should not be able to create a team without a facebook id');
      err.should.have.property('message', 'Validation failed');
      err.should.have.property('errors');
      err.errors.should.have.property('facebookGroupId');
      done();
    });
  });

  it('finds a team by its id', function(done) {
    teams.findById(currentTeam._id, function(err, team) {
      if (err) return done(err);
      team.should.have.property('name', 'The Cereal Killers');
      done();
    });
  });

  it('finds team(s) by facebookId', function(done) {
    teams.findByGroupId('1234567890', function(err, teams) {
      if (err) return done(err);
      teams.should.be.an.instanceOf(Array);
      teams.length.should.be.above(0);
      done();
    });
  });

  it('finds team(s) by multiple facebookIds', function(done) {
    var new_team = { name: 'The Thunder Down Under', facebookGroupId: '1029384756' };
    teams.create(new_team, function(err, team) {
      if (err) return done(err);

      var ids = [ '1234567890', '1029384756' ];
      teams.findByGroupId(ids, function(err, teams) {
        if (err) return done(err);
        teams.should.be.an.instanceOf(Array);
        teams.length.should.be.eql(2);
        done();
      });
    });
  });

  it('removes a team by its id', function(done) {
    var new_team = { name: 'Space Monkey Mafia', facebookGroupId: '5432167890' };
    teams.create(new_team, function(err, team) {
      if (err) return done(err);
      var id = team._id.toString();
      teams.removeById(id, function(err) {
        if (err) return done(err);
        done();
      });
    });
  });

});