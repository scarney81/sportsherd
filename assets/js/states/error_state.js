/*globals App*/
(function(app) {
  "use strict";

  var sc = app.statechart;

  sc.addState('notInError', {

    globalConcurrentState: 'error'

  });

  sc.addState('inError', {

    globalConcurrentState: 'error'

  });

})(App);