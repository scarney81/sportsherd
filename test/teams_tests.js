/*globals describe, it, should, before, after, beforeEach, afterEach*/
var Repository = require('../repositories/repository');

describe('teams', function() {
  var teams = new Repository('Team');
  var currentTeam = null;

  before(function(done) {
    teams.removeAll(function(err) {
      if (err) return done(err);
      done();
    });
  });

  after(function(done) {
    teams.removeAll(function(err) {
      if (err) return done(err);
      done();
    });
  });

  beforeEach(function(done) {
    teams.create({ name: 'The Cereal Killers'}, function(err, team) {
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
    teams.create({ name: 'The Thunder Down Under' }, function(err, team) {
      if (err) return done(err);
      team.should.have.property('name', 'The Thunder Down Under');
      done();
    });
  });

  it('cannot create team without name', function(done) {
    teams.create({}, function(err, team) {
      if (!err && team) return done('should not be able to create a team without a name');
      err.should.have.property('message', 'Validation failed');
      err.should.have.property('errors');
      err.errors.should.have.property('name');
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

  it('removes a team by its id', function(done) {
    teams.create({ name: 'Space Monkey Mafia' }, function(err, team) {
      if (err) return done(err);
      var id = team._id.toString();
      teams.removeById(id, function(err) {
        if (err) return done(err);
        done();
      });
    });
  });

});