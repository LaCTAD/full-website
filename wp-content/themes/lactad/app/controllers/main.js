app.controller('MainController', function($scope, $rootScope, $http, $stateParams, $translate, $state, language, $timeout) {

  $rootScope.root = root.root;

  // Active on menu
  $rootScope.isAbout = function() {
    switch($state.params.page) {
      case 'sobre':
      case 'about':
      case 'citacao':
      case 'citation':
      case 'blog':
      case 'eventos':
      case 'events':
      case 'midia':
      case 'press':
      case 'contato':
      case 'contact':
      case 'gestao':
      case 'management':
        return true;
        break;
      default:
        return false;
        break;
    }
  }

  // Errors
  if($stateParams.lang != 'en' && $stateParams.lang != 'br') {
    $state.go('error');
  }

  // Loader
  $scope.$on('$stateChangeStart', function(event, toState, toParams) {
    event.preventDefault();
    jQuery('.bkg').fadeIn('fast');
    centerLoader();
    $timeout(function() {
      $state.go(toState, toParams, {notify: false, reload: true}).then(function(state) {
        $rootScope.$broadcast('$stateChangeSuccess', state, null);
      });
    }, 300);
  });

  $scope.$on("$stateChangeSuccess", function(event) {
    jQuery('.bkg').delay(500).fadeOut();
  });

  function centerLoader() {
    var wh = jQuery(window).height();
    posY = (wh/2) - (jQuery('.loader').height()/2) + jQuery(window).scrollTop();
    jQuery('.loader').css({'top': posY});
  }

  centerLoader();

  // Language setting
  $rootScope.setLanguage = function(lang) {
    console.log('setando language...');
    $translate.use(lang).then(function() {
      $rootScope.language = lang;
      $rootScope.pages = {
        about: {
          id: 'sobre',
          name: $translate.instant('PAGES.ABOUT.NAME'),
          slug: $translate.instant('PAGES.ABOUT.SLUG'),
          color: '#2ecc71'
        },
        citation: {
          id: 'citacao',
          name: $translate.instant('PAGES.CITATION.NAME'),
          slug: $translate.instant('PAGES.CITATION.SLUG'),
          desc: $translate.instant('PAGES.CITATION.DESC'),
          color: '#2ecc71'
        },
        management: {
          id: 'gestao',
          name: $translate.instant('PAGES.MANAGEMENT.NAME'),
          slug: $translate.instant('PAGES.MANAGEMENT.SLUG'),
          desc: $translate.instant('PAGES.MANAGEMENT.DESC'),
          color: '#2ecc71'
        },
        press: {
          id: 'midia',
          name: $translate.instant('PAGES.PRESS.NAME'),
          slug: $translate.instant('PAGES.PRESS.SLUG'),
          color: '#2ecc71'
        },
        contact: {
          id: 'contato',
          name: $translate.instant('PAGES.CONTACT.NAME'),
          slug: $translate.instant('PAGES.CONTACT.SLUG'),
          color: '#2ecc71'
        },
        biocel: {
          id: 'biologia-celular',
          name: $translate.instant('PAGES.BIOCEL.NAME'),
          slug: $translate.instant('PAGES.BIOCEL.SLUG'),
          desc: $translate.instant('PAGES.BIOCEL.DESC'),
          color: '#f39c12'
        },
        genomica: {
          id: 'genomica',
          name: $translate.instant('PAGES.GENOMA.NAME'),
          slug: $translate.instant('PAGES.GENOMA.SLUG'),
          desc: $translate.instant('PAGES.GENOMA.DESC'),
          color: '#3498db'
        },
        proteomica: {
          id: 'proteomica',
          name: $translate.instant('PAGES.PROTEOMA.NAME'),
          slug: $translate.instant('PAGES.PROTEOMA.SLUG'),
          desc: $translate.instant('PAGES.PROTEOMA.DESC'),
          color: '#e74c3c'
        },
        bioinformatica: {
          id: 'bioinformatica',
          name: $translate.instant('PAGES.BIOINFO.NAME'),
          slug: $translate.instant('PAGES.BIOINFO.SLUG'),
          desc: $translate.instant('PAGES.BIOINFO.DESC'),
          color: '#9b59b6'
        },
        blog: {
          id: 'blog',
          name: $translate.instant('PAGES.BLOG.NAME'),
          slug: $translate.instant('PAGES.BLOG.SLUG'),
          color: '#2ecc71'
        },
        events: {
          id: 'events',
          name: $translate.instant('PAGES.EVENTS.NAME'),
          slug: $translate.instant('PAGES.EVENTS.SLUG'),
          color: '#2ecc71',
          subpages: {
            goals: {
              name: $translate.instant('PAGES.EVENTS.SUBPAGES.GOALS.NAME'),
              slug: $translate.instant('PAGES.EVENTS.SUBPAGES.GOALS.SLUG')
            },
            schedule: {
              name: $translate.instant('PAGES.EVENTS.SUBPAGES.SCHEDULE.NAME'),
              slug: $translate.instant('PAGES.EVENTS.SUBPAGES.SCHEDULE.SLUG')
            },
            speakers: {
              name: $translate.instant('PAGES.EVENTS.SUBPAGES.SPEAKERS.NAME'),
              slug: $translate.instant('PAGES.EVENTS.SUBPAGES.SPEAKERS.SLUG')
            },
            registered: {
              name: $translate.instant('PAGES.EVENTS.SUBPAGES.REGISTERED.NAME'),
              slug: $translate.instant('PAGES.EVENTS.SUBPAGES.REGISTERED.SLUG')
            },
            selected: {
              name: $translate.instant('PAGES.EVENTS.SUBPAGES.SELECTED.NAME'),
              slug: $translate.instant('PAGES.EVENTS.SUBPAGES.SELECTED.SLUG')
            }
          }
        },
        services: {
          id: 'services',
          name: $translate.instant('PAGES.SERVICES.NAME'),
          slug: $translate.instant('PAGES.SERVICES.SLUG'),
          color: ''
        },
        equipments: {
          id: 'equipments',
          name: $translate.instant('PAGES.EQUIPS.NAME'),
          slug: $translate.instant('PAGES.EQUIPS.SLUG'),
          color: ''
        },
        teams: {
          id: 'members',
          name: $translate.instant('PAGES.TEAM.NAME'),
          slug: $translate.instant('PAGES.TEAM.SLUG'),
          color: ''
        },
        faq: {
          id: 'faq',
          name: 'FAQ',
          slug: 'faqs',
          color: ''
        }
      }
      var single, english_single, item, english_item;
      if($rootScope.page) {
        single = $rootScope.page.single;
        if($rootScope.page.english_single) {
          english_single = $rootScope.page.english_single;
        }
        item = $rootScope.page.item;
        if($rootScope.page.english_item) {
          english_item = $rootScope.page.english_item;
        }
        switch($rootScope.page.id) {
          case 'events':
            $rootScope.page = $rootScope.pages.events;
            break;
          case 'blog':
            $rootScope.page = $rootScope.pages.blog;
            break;
          case 'sobre':
            $rootScope.page = $rootScope.pages.about;
            break;
          case 'citacao':
            $rootScope.page = $rootScope.pages.citation;
            break;
          case 'gestao':
            $rootScope.page = $rootScope.pages.management;
            break;
          case 'contato':
            $rootScope.page = $rootScope.pages.contact;
            break;
          case 'midia':
            $rootScope.page = $rootScope.pages.press;
            break;
          case 'biologia-celular':
            $rootScope.page = $rootScope.pages.biocel;
            break;
          case 'genomica':
            $rootScope.page = $rootScope.pages.genomica;
            break;
          case 'proteomica':
            $rootScope.page = $rootScope.pages.proteomica;
            break;
          case 'bioinformatica':
            $rootScope.page = $rootScope.pages.bioinformatica;
            break;
          case 'services':
            $rootScope.page = $rootScope.pages.services;
          case 'equipments':
            $rootScope.page = $rootScope.pages.equipments;
            break;
          case 'members':
            $rootScope.page = $rootScope.pages.teams;
            break;
          case 'faq':
            $rootScope.page = $rootScope.pages.faq;
            break;
          default:
            $rootScope.page = '';
            break;
        }
        if(single) {
          switch(single) {
            case 'servicos':
            case 'services':
              $rootScope.page.single = 'servicos';
              $rootScope.page.english_single = 'services';
              break;
            case 'equipamentos':
            case 'equipments':
              $rootScope.page.single = 'equipamentos';
              $rootScope.page.english_single = 'equipments';
              break;
            case 'equipe':
            case 'team':
              $rootScope.page.single = 'equipe';
              $rootScope.page.english_single = 'team';
              break;
            case 'faq':
              $rootScope.page.single = 'faq';
              $rootScope.page.english_single = 'faq';
              break;
            default:
              $rootScope.page.english_single = english_single;
              $rootScope.page.single = single;
            break;
          }
          if(item || english_item) {
            if($rootScope.language == 'en') {
              $rootScope.page.item = item;
              $rootScope.page.english_item = english_item;
              $state.transitionTo($state.current, {lang: lang, page: $rootScope.page.slug, single: $rootScope.page.english_single, item: $rootScope.page.english_item}, {location: 'true'});
            } else {
              $rootScope.page.item = item;
              $rootScope.page.english_item = english_item;
              $state.transitionTo($state.current, {lang: lang, page: $rootScope.page.slug, single: $rootScope.page.single, item: $rootScope.page.item}, {location: 'true'});
            }
          } else {
            if($rootScope.language == 'en') {
              $state.transitionTo($state.current, {lang: lang, page: $rootScope.page.slug, single: $rootScope.page.english_single}, {location: 'true'});
            } else {
              $state.transitionTo($state.current, {lang: lang, page: $rootScope.page.slug, single: $rootScope.page.single}, {location: 'true'});
            }
          }
        } else {
          $state.transitionTo($state.current, {lang: lang, page: $rootScope.page.slug}, {location: 'true'});
        }
      } else {
        $state.transitionTo($state.current, {lang: lang}, {location: 'true'});
      }
    });
  }

  jQuery(window).resize(function() {
    footerOnBottom();
  });

  function footerOnBottom() {
    var hf = jQuery('footer').height() + 20;
    jQuery('main').css({'padding-bottom':hf});
  }

  footerOnBottom();

});