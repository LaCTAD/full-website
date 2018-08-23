app.controller('HomeController', [
  '$scope',
  '$timeout',
  function($scope, $timeout) {
    console.log("rota home");
    var locked = 0;

    jQuery(window).scroll(function() {
      if (jQuery(this).scrollTop() < 700 && locked == 0) {
        jQuery('#tera').stop().animateNumber({
          number: 26.22,
          numberStep: function(now, tween) {
            jQuery(tween.elem).text(now.toFixed(2));
          }
        }, 2500);
        jQuery("#region").stop().animateNumber({
          number: 16
        }, 2500);
        jQuery("#research").stop().animateNumber({
          number: 561 
        }, 2500);
        jQuery("#courses").stop().animateNumber({
          number: 16
        }, 2500);
        locked = 1;
      } else if (jQuery(this).scrollTop() == 0) {
        // locked = 0;
      }
    });

}]);
