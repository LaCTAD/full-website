app.controller('ModalController', function($scope, close, $sce) {
  $scope.close = function(result) {
    close(result, 500); // close, but give 500ms for bootstrap to animate
  };

  $scope.$sce = $sce;
});