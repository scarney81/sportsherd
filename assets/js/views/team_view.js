// #= require 'base_view'

(function() {

  var sh = window.SH;
  sh.TeamView = sh.BaseView.extend({

    template: window.JadeTemplates['templates/team'],

    tagName: 'li',

    className: 'team'

  });

})();