// #= require 'base_view'

(function() {

  var sh = window.SH;
  sh.EventView = sh.BaseView.extend({

    template: window.JadeTemplates['templates/event'],

    tagName: 'li',

    className: 'event'

  });

})();