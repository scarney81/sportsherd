module.exports = {

  errorHandler: require('./error_middleware'),

  events: require('./event_middleware'),

  isJSON: require('./is_json_middleware'),

  teams: require('./team_middleware')

};