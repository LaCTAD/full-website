app.controller('EventController', [
  '$scope',
  '$rootScope',
  '$posts',
  function($scope, $rootScope, $posts) {

  $posts.type('events').then(function(data) {
    $scope.events = data;
  });

}]);