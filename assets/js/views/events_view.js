// #= require 'base_view'

(function() {

  var sh = window.SH;
  sh.EventsView = sh.BaseView.extend({

    template: window.JadeTemplates['templates/events'],

    className: 'events'

  });

})();