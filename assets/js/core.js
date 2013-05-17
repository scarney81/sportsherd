window.Sportsherd = window.Sportsherd || {};
window.Sportsherd.statechart = Stativus.createStatechart();

$(document).ready(function() {
  // Change in session redirect behavior. Need to remove #_=_.
  // https://developers.facebook.com/blog/post/552/
  // https://github.com/jaredhanson/passport-facebook/issues/12#issuecomment-5913711
  if (window.location.hash === '#_=_') {
    window.location.hash = '';
    history.pushState('', document.title, window.location.pathname);
  }

  $.ajaxSetup({ headers: {'X-CSRF-Token': window.CSRF} });

  window.Sportsherd.router = new window.Sportsherd.Router();
  window.Sportsherd.statechart.initStates({ 'default': 'application', 'error': 'notInError' });
});