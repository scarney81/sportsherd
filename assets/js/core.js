window.Sportsherd = window.Sportsherd || {};
window.Sportsherd.statechart = Stativus.createStatechart();

// Change in session redirect behavior. Need to remove #_=_.
// https://developers.facebook.com/blog/post/552/
// https://github.com/jaredhanson/passport-facebook/issues/12#issuecomment-5913711
(function() {
  if (window.location.hash === '#_=_') {
    if (window.history && window.history.pushState) {
      history.pushState('', document.title, window.location.pathname);
    } else {
      window.location.hash = '';
      var position = {
        top: document.body.scrollTop,
        left: document.body.scrollLeft
      };
      // Restore the scroll offset, should be flicker free
      document.body.scrollTop = position.top;
      document.body.scrollLeft = position.left;
    }
  }
})();

$(document).ready(function() {
  $.ajaxSetup({ headers: {'X-CSRF-Token': window.CSRF} });

  window.Sportsherd.router = new window.Sportsherd.Router();
  window.Sportsherd.statechart.initStates({ 'default': 'application', 'error': 'notInError' });
});