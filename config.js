/*globals process*/
module.exports = {
  port: process.env.PORT || 3000,
  connectionString: process.env.CONNECTION_STRING || process.env.MONGOHQ_URL || 'mongodb://localhost/sportsherd-test',

  facebookOAuthParams: {
    clientID: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    callbackURL: process.env.FACEBOOK_CALLBACK_URL
  }
};