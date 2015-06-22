app.controller('MembersController', [
  '$scope',
  '$rootScope',
  '$posts',
function($scope, $rootScope, $posts) {

  $posts.category('members', $rootScope.page.id).then(function(data) {
    $rootScope.members = data;
  });

}]);