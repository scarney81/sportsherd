(function() {

  var sc = window.SH.statechart;

  sc.addState('notInError', {

    globalConcurrentState: 'error'

  });

  sc.addState('inError', {

    globalConcurrentState: 'error'

  });

})();