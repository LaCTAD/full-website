app.controller('HomeController', [
  '$scope',
  '$timeout',
  '$posts',
  function($scope, $timeout, $posts) {
    console.log("rota home");
    var locked = 0;

    jQuery(window).scroll(function() {
      if (jQuery(this).scrollTop() < 700 && locked == 0) {
        jQuery('#tera').stop().animateNumber({
          number: 12.83,
          numberStep: function(now, tween) {
            jQuery(tween.elem).text(now.toFixed(2));
          }
        }, 2500);
        jQuery("#region").stop().animateNumber({
          number: 14
        }, 2500);
        jQuery("#research").stop().animateNumber({
          number: 206
        }, 2500);
        jQuery("#courses").stop().animateNumber({
          number: 15
        }, 2500);
        locked = 1;
      } else if (jQuery(this).scrollTop() == 0) {
        // locked = 0;
      }
    });

    // get mudancas-de-horario posts
    $posts.category('post', 'mudanca-de-horario').then(function(data) {
      $scope.mudancas = data;
      console.log(data);
    });

}]);