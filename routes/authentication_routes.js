/*globals _:true*/
var _ = require('underscore');
var passport = require('passport');

module.exports = function(app) {

  app.get('/logout', function(req, res, next) {
    req.logout();
    res.render('loggedOut');
  });

  app.get('/public/login', function(req, res, next) {
    res.render('index');
  });

  app.get('/login', passport.authenticate('facebook'));

  app.get('/login/callback', passport.authenticate('facebook'), function(req, res, next) {
    if (req.isUnauthenticated()) res.redirect('/login/error');

    var redirect = '/';
    if (!_.isUndefined(req.session.redirectUrl)) {
      redirect = req.session.redirectUrl;
      delete req.session.redirectUrl;
    }
    res.redirect(redirect);
  });

  app.get('/login/error', function(req, res, next) {
    // TODO: Build out some sore of meaningful error
  });

};