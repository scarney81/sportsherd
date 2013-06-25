module.exports = {

  authentication: require('./authentication_middleware'),

  csrf: require('./csrf_middleware'),

  errorHandler: require('./error_middleware'),

  facebookAppToken: require('./facebook_appToken_middleware'),

  facebookProxy: require('./facebook_proxy_middleware'),

  events: require('./event_middleware'),

  isJSON: require('./is_json_middleware'),

  isPublic: require('./is_public_middleware'),

  locals: require('./locals_middleware'),

  teams: require('./team_middleware')

};