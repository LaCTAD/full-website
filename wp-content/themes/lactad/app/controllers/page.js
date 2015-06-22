app.controller('PageController', function($scope, $rootScope, $http, $state, $stateParams, $translate, $posts, page, language, ModalService) {

  $scope.showModalAbout = function() {
    ModalService.showModal({
      templateUrl: root.views + "modals/about.modal.html",
      controller: "ModalController"
    }).then(function(modal) {
      modal.element.modal();
      modal.close.then(function(result) {
        console.log(result);
      });
    });
  };

  $scope.showModalEvent = function() {
    ModalService.showModal({
      templateUrl: root.views + "modals/event.modal.html",
      controller: "ModalController"
    }).then(function(modal) {
      modal.element.modal();
      modal.close.then(function(result) {
        console.log(result);
      });
    });
  };

});