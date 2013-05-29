var Strategy = require('passport-facebook').Strategy,
    config   = require('./config');

module.exports = new Strategy(config.facebookOAuthParams, function(accessToken, refreshToken, profile, done) {
  profile.accessToken = accessToken;
  return done(null, profile);
});