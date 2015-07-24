app.controller('FaqController', [
  '$scope',
  '$rootScope',
  '$posts',
function($scope, $rootScope, $posts) {

  if($rootScope.page.slug) {
    $posts.category('faqs', $rootScope.page.id).then(function(data) {
      $rootScope.faqs = data;
    });
  } else {
    $posts.type('faqs').then(function(data) {
      $rootScope.faqs = data;
    });
  }

  // Controls the faq questions
  $scope.questionToggle = function($event) {
    angular.element($event.currentTarget).toggleClass('active');
    angular.element(angular.element($event.currentTarget).children()[2]).slideToggle();
    angular.element(angular.element($event.currentTarget).children()[0]).children().toggleClass('fa-minus');
  }

}]);