module.exports = function(req, res, next) {
  // http://www.ietf.org/rfc/rfc4627.txt
  req.isJSON = req.is('application/json');
  next();
};