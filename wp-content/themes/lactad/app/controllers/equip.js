app.controller('EquipController', [
  '$scope',
  '$rootScope',
  '$posts',
  '$timeout',
function($scope, $rootScope, $posts, $timeout) {

  if($rootScope.page.slug) {
    $posts.category('equipments', $rootScope.page.id).then(function(data) {
      $rootScope.equipments = data;
      $timeout(function() {
        jQuery(".owl-carousel").owlCarousel({
          autoPlay: true,
          stopOnHover: true,
          singleItem: true,
          itemsDesktop : [1199,1],
          itemsDesktopSmall : [980,1],
          itemsTablet: [768,1],
          itemsTabletSmall: false,
          itemsMobile : [479,1],
        });
      });
    });
  } else {
    $posts.type('equipments').then(function(data) {
      $rootScope.equipments = data;
    });
  }


}]);