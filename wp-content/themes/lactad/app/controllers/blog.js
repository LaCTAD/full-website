app.controller('BlogController', [
  '$scope',
  '$rootScope',
  '$posts',
  function($scope, $rootScope, $posts) {

  $rootScope.currentPage = 0;
  $rootScope.pageSize = 10;
  $rootScope.numPages = 0;

  $posts.all().then(function(data) {
    $scope.posts = data;
    $rootScope.numPages = Math.ceil($scope.posts.length / $rootScope.pageSize);
  });

}]);