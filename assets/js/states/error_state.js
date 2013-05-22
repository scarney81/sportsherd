/*globals App*/
(function(app) {

  var sc = app.statechart;

  sc.addState('notInError', {

    globalConcurrentState: 'error'

  });

  sc.addState('inError', {

    globalConcurrentState: 'error'

  });

})(App);