module.exports = {

  authentication: require('./authentication_middleware'),

  errorHandler: require('./error_middleware'),

  events: require('./event_middleware'),

  isJSON: require('./is_json_middleware'),

  isPublic: require('./is_public_middleware'),

  teams: require('./team_middleware')

};