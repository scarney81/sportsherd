/* jshint strict:false */

var request = require('request');
var tokenUrl = 'https://graph.facebook.com/oauth/access_token?client_id='+process.env.CLIENT_ID+'&client_secret='+process.env.CLIENT_SECRET+'&grant_type=client_credentials';
var Facebook = require('../facebook');

console.log('Retrieving App Access Token');
request(tokenUrl, function(err, response, body) {
  if (err) return console.error(err);
  if (response.statusCode !== 200) {
    console.error(response.statusCode);
    console.error(response.body);
    return;
  }

  var appToken = body.split('=')[1];
  console.log('App Token: '+appToken);

  var options = { accessToken: process.env.ACCESS_TOKEN, appToken: appToken, clientId: process.env.CLIENT_ID };
  var facebook = new Facebook(options);

  facebook.getAppGroups(function(err, groups) {
    if (err) return console.error(err);

    groups.forEach(function(group) {
      console.log('Deleting group: '+group.id);
      facebook.deleteGroup(group.id, function(err) {
        if (err) console.error(err);
        console.log('Group deleted: '+group.id);
      });
    });
  });

});