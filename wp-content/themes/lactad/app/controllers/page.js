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

  $scope.contact = {};
  $scope.contact.type = 'contact';

  $scope.fileNameChanged = function(el) {
    $scope.contact.file = el;
    console.log(el);
  }

  $scope.sendMail = function() {
    console.log($scope.contact);
    console.log(root.root + 'send.php');
    if($scope.contact.name != '' && $scope.contact.email != '' && $scope.contact.subject != '' && $scope.contact.message != '') {
      jQuery.ajax({
        type: "POST",
        url: root.root + "send.php",
        contentType: false,
        cache: false,
        processData:false,
        data: $scope.contact,
        success: function() {
          console.log('sucesso!');
          jQuery('.log-message').html("<p style='margin-bottom: 30px;'><b>Mensagem enviada com sucesso!</b> Em breve retornaremos seu email com uma resposta. Obrigado.</p>");
        }
      });
    }
  }

});