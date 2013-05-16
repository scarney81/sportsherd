module.exports = function(req, res, next) {
  var public_routes = [ /^\/favicon.ico/, /^\/login/, /^\/public/, /^\/images/, /^\/css/, /^\/js/ ];
  var matching = public_routes.filter(function(route) { return (req.path.match(route) !== null); });
  req.isPublic = !!(matching && matching.length);
  next();
};