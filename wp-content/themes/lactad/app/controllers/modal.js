app.controller('ModalController', function($rootScope, $scope, close, $sce) {
  $scope.close = function(result) {
    close(result, 500); // close, but give 500ms for bootstrap to animate
  };
  if($rootScope.page.id == 'events') {
    $scope.content = $rootScope.event.event.register_form;
  }
  $scope.$sce = $sce;
});