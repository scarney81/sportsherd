window.Sportsherd = window.Sportsherd || {};
window.Sportsherd.statechart = Stativus.createStatechart();

$(document).ready(function() {
  $.ajaxSetup({ headers: {'X-CSRF-Token': window.CSRF} });

  window.Sportsherd.router = new window.Sportsherd.Router();
  window.Sportsherd.statechart.initStates({ 'default': 'application', 'error': 'notInError' });
});