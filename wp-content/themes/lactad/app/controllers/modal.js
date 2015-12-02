app.controller('ModalController', function($rootScope, $scope, close, $sce) {
  $scope.close = function(result) {
    close(result, 500); // close, but give 500ms for bootstrap to animate
  };

  $scope.$sce = $sce;

  console.log($rootScope.pages.events.subpages.registered.name);
});