app.controller('BlogController', [
  '$scope',
  '$rootScope',
  '$posts',
  function($scope, $rootScope, $posts) {

  $posts.all().then(function(data) {
    $scope.posts = data;
  });

}]);