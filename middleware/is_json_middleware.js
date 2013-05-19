module.exports = function(req, res, next) {
  // http://www.ietf.org/rfc/rfc4627.txt
  req.isJSON = req.accepted.filter(function(type) {
    return (type.value === 'application/json');
  }).length > 0;
  next();
};