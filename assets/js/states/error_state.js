/*globals App*/
(function(app) {
  "use strict";

  var sc = app.Statechart;

  sc.addState('notInError', {

    globalConcurrentState: 'error'

  });

  sc.addState('inError', {

    globalConcurrentState: 'error'

  });

})(App);