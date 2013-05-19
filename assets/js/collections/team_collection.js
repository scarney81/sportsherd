/*globals Backbone*/

// #= require '../models/team_model'
(function() {

  var sh = window.SH;
  sh.TeamCollection = Backbone.Collection.extend({

    url: '/teams',

    model: sh.TeamModel
  
  });

})();