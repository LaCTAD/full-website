app.controller('DetailController', [
  '$scope',
  '$rootScope',
  '$posts',
  '$sce',
function($scope, $rootScope, $posts, $sce) {

  $scope.getIframeUrl = function(address) {
    return $sce.trustAsResourceUrl('https://maps.google.com/maps?hl=en&q='+ address +'&ie=UTF8&z=17&output=embed');
  }

  $scope.$sce = $sce;
}]);