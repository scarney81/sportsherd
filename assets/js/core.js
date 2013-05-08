window.Sportsherd = window.Sportsherd || {};
window.Sportsherd.statechart = Stativus.createStatechart();

$(document).ready(function() {
  window.Sportsherd.statechart.initStates({ 'default': 'application', 'error': 'notInError' });
});