/*globals Backbone*/

// #= require '../models/event_model'
(function() {

  var sh = window.SH;
  sh.EventCollection = Backbone.Collection.extend({

    url: '/events',

    model: sh.EventModel
  
  });

})();