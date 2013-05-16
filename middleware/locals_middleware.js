module.exports = function(req, res, next) {
  res.locals.csrf_token = (typeof req.session === 'undefined' || req.session === null) ? '' : req.session._csrf;
  next();
};