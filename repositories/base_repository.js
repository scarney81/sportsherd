/*globals _:true*/
var _ = require('underscore');

module.exports = {

  extend: function(child) {
    return _.extend({}, this, child);
  },

  find_by_id: function(id, callback) {
    callback(null, {id: '12345'});
  }

};