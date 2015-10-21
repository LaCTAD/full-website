app.controller('EventController', [
  '$scope',
  '$rootScope',
  '$posts',
  function($scope, $rootScope, $posts) {

  $rootScope.currentPage = 0;
  $rootScope.pageSize = 10;
  $rootScope.numPages = 0;

  $posts.type('events').then(function(data) {
    $scope.events = data;
    $rootScope.numPages = Math.ceil($scope.events.length / $rootScope.pageSize);
  });

}]);