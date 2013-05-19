module.exports = function(app) {

  var render_index = function(req, res, next) {
    if (req.isJSON) return next();
    res.render('index');
  };

  app.get('/profile', render_index);
  app.get('/profile/:user_id', render_index);

};