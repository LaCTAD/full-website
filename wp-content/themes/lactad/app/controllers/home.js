app.controller('HomeController', [
  '$scope',
  '$timeout',
  function($scope, posts, events, $timeout) {
    console.log("rota home");
    var locked = 0;

    jQuery(window).scroll(function() {
      if (jQuery(this).scrollTop() < 700 && locked == 0) {
        jQuery('#tera').animateNumber({
          number: 10.91,
          numberStep: function(now, tween) {
            jQuery(tween.elem).text(now.toFixed(2));
          }
        }, 2500);
        jQuery("#region").animateNumber({
          number: 14
        }, 2500);
        jQuery("#research").animateNumber({
          number: 206
        }, 2500);
        jQuery("#courses").animateNumber({
          number: 15
        }, 2500);
        locked = 1;
      } else if (jQuery(this).scrollTop() == 0) {
        // locked = 0;
      }
    });
}]);