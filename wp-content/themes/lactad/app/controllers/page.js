app.controller('PageController', function($scope, $rootScope, $http, $state, $stateParams, $translate, $posts, page, language, ModalService, $sce) {

  if(page == null) {
    $state.go('error');
  }

  $scope.showModalService = function(url) {
    ModalService.showModal({
      templateUrl: root.views + "modals/service.modal.html",
      controller: "ModalController"
    }).then(function(modal) {
      $rootScope.iframe_url = $sce.trustAsResourceUrl(url);
      modal.element.modal();
      modal.close.then(function(result) {
        console.log(result);
      });
    });
  }

  $scope.showModalSample = function() {
    ModalService.showModal({
      templateUrl: root.views + "modals/sample.modal.html",
      controller: "ModalController"
    }).then(function(modal) {
      modal.element.modal();
      modal.close.then(function(result) {
        console.log(result);
      });
    });
  }

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

    console.log('haha');
    jQuery('#event-form-container').on('mouseover mouseout', 'form', function(event) {
      event.preventDefault();
      event.stopPropagation();
      alert('para tuuudo!');
    });
  };

  $scope.contact = {};
  $scope.contact.type = 'contact';

  $scope.fileNameChanged = function(el) {
    $scope.contact.file = el;
    console.log(el);
  }

  $scope.sendMail = function() {
    $scope.contact['g-recaptcha-response'] = grecaptcha.getResponse();
    console.log($scope.contact);
    if($scope.contact.name != '' && $scope.contact.email != '' && $scope.contact.subject != '' && $scope.contact.message != '') {
      jQuery.ajax({
        type: "POST",
        url: root.root + "send.php",
        data: $scope.contact,
        success: function() {
          if($scope.contact['g-recaptcha-response'].length != 0) {
            console.log('sucesso!');
            jQuery('.log-message').html("<p style='margin: 30px 0;'><b>Mensagem enviada com sucesso!</b> Em breve retornaremos seu email com uma resposta. Obrigado.</p>");
          } else {
            console.log('erro!');
            jQuery('.log-message').html("<p style='margin: 30px 0;'><b>Erro ao enviar a mensagem!</b> Por favor, preencha o Captcha corretamente!</p>");
          }
        }
      });
    }
  }

});