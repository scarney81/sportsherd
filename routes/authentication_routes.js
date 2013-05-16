/*globals _:true*/
var _ = require('underscore');
var passport = require('passport');

module.exports = function(app) {

  app.get('/public/login', function(req, res, next) {
    res.render('index');
  });

  app.get('/login', passport.authenticate('facebook'));

  app.get(
    '/login/callback',
    passport.authenticate('facebook', { failureRedirect: '/public/login' }),
    function(req, res, next) {
      var redirect = '/';
      if (!_.isUndefined(req.session.redirectUrl)) {
        redirect = req.session.redirectUrl;
        delete req.session.redirectUrl;
      }
      res.redirect(redirect);
    }
  ); 

};