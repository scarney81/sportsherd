/*globals describe, it, should, before, after, beforeEach, afterEach*/
var Repository = require('../repositories/repository');

describe('events', function() {
  var events = new Repository('Event');
  var currentEvent = null;

  before(function(done) {
    events.removeAll(function(err) {
      if (err) return done(err);
      done();
    });
  });

  after(function(done) {
    events.removeAll(function(err) {
      if (err) return done(err);
      done();
    });
  });

  beforeEach(function(done) {
    events.save({ name: 'Invention of Electricity'}, function(err, event) {
      if (err) return done(err);
      currentEvent = event;
      done();
    });
  });

  afterEach(function(done) {
    events.remove(currentEvent, function(err) {
      if (err) return done(err);
      done();
    });
  });

  it('saves a new event', function(done) {
    events.save({ name: 'The Industrial Revolution' }, function(err, event) {
      if (err) return done(err);
      event.should.have.property('name', 'The Industrial Revolution');
      done();
    });
  });

  it('cannot save event without name', function(done) {
    events.save({}, function(err, event) {
      if (!err && event) return done('should not be able to create a event without a name');
      err.should.have.property('message', 'Validation failed');
      err.should.have.property('errors');
      err.errors.should.have.property('name');
      done();
    });
  });

  it('finds an event by its id', function(done) {
    events.findById(currentEvent._id, function(err, event) {
      if (err) return done(err);
      event.should.have.property('name', 'Invention of Electricity');
      done();
    });
  });

  it('removes an event by its id', function(done) {
    events.save({ name: 'The Manhattan Project' }, function(err, event) {
      if (err) return done(err);
      var id = event._id.toString();
      events.removeById(id, function(err) {
        if (err) return done(err);
        done();
      });
    });
  });

  it('remove an event', function(done) {
    events.save({ name: 'Discover of artificial intelligence' }, function(err, event) {
      if (err) return done(err);
      events.remove(event, function(err) {
        if (err) return done(err);
        done();
      });
    });
  });

});