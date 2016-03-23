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

    jQuery('body').on('submit', 'form:first', function(event) {
      var hasFile = jQuery(this).find("input[type='file']").val();
      var dateCorrect = isDate(jQuery(this).find("input.datepicker").val());
      var formFilled = true;
      var hasCheckboxes = jQuery(this).find(':checkbox');
      var checkboxesChecked = false;
      var hasRadios = jQuery(this).find(':radio');
      var radiosChecked = false;
      jQuery(".gform_fields :input").not("input[type='submit'], input[type='hidden'], :checkbox, :radio").each(function() {
        if (jQuery.trim(jQuery(this).val()) === "") {
          console.log(jQuery(this).attr('id'));
          formFilled = false;
        }
      });
      if(hasCheckboxes.length) {
        jQuery(".gform_fields :checkbox").each(function() {
          if (jQuery(this).is(':checked')) {
            checkboxesChecked = true;
          }
        });
      }
      if(hasRadios.length) {
        jQuery(".gform_fields :radio").each(function() {
          if (jQuery(this).is(':checked')) {
            radiosChecked = true;
          }
        });
      }
      if (hasFile == false) {
        event.preventDefault();
        alert('Por favor, anexe um arquivo antes de enviar o formulário!');
      } else if (dateCorrect == false) {
        event.preventDefault();
        alert('Por favor, insira uma data válida e no formato dd/mm/yyyy!');
      } else if (formFilled == false || (hasRadios.length && radiosChecked == false) || (hasCheckboxes.length && checkboxesChecked == false)) {
        event.preventDefault();
        alert('Por favor, preencha todos os campos antes de submeter o formulário!');
      }
    });

    function isDate(txtDate) {
      var currVal = txtDate;
      if(currVal == '')
        return false;

      var rxDatePattern = /^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/; //Declare Regex
      var dtArray = currVal.match(rxDatePattern); // is format OK?

      if (dtArray == null)
        return false;

      //Checks for dd/mm/yyyy format.
      dtDay = dtArray[1];
      dtMonth = dtArray[3];
      dtYear = dtArray[5];

      if (dtDay < 1 || dtDay> 31)
        return false;
      else if (dtMonth < 1 || dtMonth > 12)
        return false;
      else if ((dtMonth == 4 || dtMonth == 6 || dtMonth == 9 || dtMonth == 11) && dtDay == 31)
        return false;
      else if (dtMonth == 2) {
        var isleap = (dtYear % 4 == 0 && (dtYear % 100 != 0 || dtYear % 400 == 0));
        if (dtDay > 29 || (dtDay == 29 && !isleap))
          return false;
      }
      return true;
    }
  };

  $scope.contact = {};
  $scope.contact.type = 'contact';

  $scope.fileNameChanged = function(el) {
    $scope.contact.file = el;
    console.log(el);
  }

  $scope.sendMail = function() {
    //$scope.contact['g-recaptcha-response'] = grecaptcha.getResponse();
    console.log($scope.contact);
    if($scope.contact.name != '' && $scope.contact.email != '' && $scope.contact.subject != '' && $scope.contact.message != '') {
      jQuery.ajax({
        type: "POST",
        url: root.root + "send.php",
        data: $scope.contact,
        success: function() {
          //if($scope.contact['g-recaptcha-response'].length != 0) {
            console.log('sucesso!');
            jQuery('.log-message').html("<p style='margin: 30px 0;'><b>Mensagem enviada com sucesso!</b> Em breve retornaremos seu email com uma resposta. Obrigado.</p>");
         // } else {
        //    console.log('erro!');
        //    jQuery('.log-message').html("<p style='margin: 30px 0;'><b>Erro ao enviar a mensagem!</b> Por favor, preencha o Captcha corretamente!</p>");
         // }
        }
      });
    }
  }

});
