/*!
 * Connect - errorHandler
 * Copyright(c) 2010 Sencha Inc.
 * Copyright(c) 2011 TJ Holowaychuk
 * MIT Licensed
 */

/*globals _:true*/
var _ = require('underscore');

/**
 * Error handler:
 *
 * Development error handler, providing stack traces
 * and error message responses for requests accepting text, html,
 * or json.
 *
 * Text:
 *
 *   By default, and when _text/plain_ is accepted a simple stack trace
 *   or error message will be returned.
 *
 * JSON:
 *
 *   When _application/json_ is accepted, connect will respond with
 *   an object in the form of `{ "error": error }`.
 *
 * HTML:
 *
 *   When accepted connect will output a nice html stack trace.
 *
 * @return {Function}
 * @api public
 */
module.exports = function(err, req, res, next) {

  var statusCode = 500;
  var error = null;
  if (err.status && err.Status >= 400) statusCode = err.status;

  if (req.isJSON) {
    error = {};
    if (err.message) error.message = err.message;
    if (err.stack) error.stack = err.stack;

    for (var key in err) {
      if (err.hasOwnProperty(key)) error[key] = err[key];
    }
    res.json(error);
  } else {
    var stack = (err.stack || '')
      .split('\n').slice(1)
      .map(function(v){ return '<div>'+v+'</div>'; }).join('');
    error = _.escape(err.toString());
    res.render('error', { statusCode: statusCode, error: error, stack: stack });
  }

};