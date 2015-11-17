var app = angular.module('app', [
  'ui.router',
  'ngSanitize',
  'ngAnimate',
  'pascalprecht.translate',
  'angularModalService'
])

.config(function($stateProvider, $urlRouterProvider, $translateProvider, $locationProvider) {
  /* TRANSLATION */
  $translateProvider.translations('en', {
    GLOBAL: {
      TITLE: 'LaCTAD - The Central Laboratory of High Performance Technologies',
      BUTTON_LANG_EN: 'English',
      BUTTON_LANG_BR: 'Portuguese',
      COPYRIGHT: '© 2015 LaCTAD -  All rights reserved',
      ABOUT: 'About'
    },
    PAGES: {
      INDEX: {
        HEADLINE: 'We are a multiuser laboratory ready for you',
        SUBHEADLINE: 'We work in the areas of Cell Biology, Genomics, Proteomics and Bioinformatics offering high quality services to the entire scientific community and private companies',
        BUTTON_ABOUT: 'About Us',
        BUTTON_CONTACT: 'Contact Us',
        TITLE1: 'in Numbers',
        TITLE2: 'States Assisteds',
        TITLE3: 'Researchers Served',
        TITLE4: 'Sequenced Terabases',
        TITLE5: 'Concluded Courses'
      },
      ABOUT: {
        NAME: 'The LaCTAD',
        SLUG: 'about',
        DESC: 'We work in the areas of Cell Biology, Genomics, Proteomics and Bioinformatics offering high quality services to the entire scientific community and private companies',
        TITLE1: 'What is LaCTAD?',
        TITLE2: 'Mission, Vision and Values',
        TITLE3: 'Mission',
        TITLE4: 'Vision',
        TITLE5: 'Values',
        TITLE6: 'Funding',
        TEXT1: '<p>The Central Laboratory of High Performance Technologies (LaCTAD) is an initiative of UNICAMP supported by FAPESP, through the Multi-User Equipment program (in proc. 2009/54129-9), which aims at the acquisition of equipment for research that are not usually acquired at regular grantsdue to their high cost. Learn about our mission, vision and values.</p><p>The LaCTAD is being created at UNICAMP in combination with the areas of Cell Biology, Genomics, Proteomics and Bioinformatics, in order to develop advanced studies by using the state of the art equipment and Techniques.</p>',
        TEXT2: '<p>The installation of this Laboratory is based on the acquisition of scientific equipment to be continuously used and operated by a specialized team (learn about our team) enabling a better use of each device beyond offer high quality and cost-benefit services to the community of the State University of Campinas (UNICAMP) and other Universities and Research Institutes.</p>',
        TEXT3: '<i class="fa fa-file-o"></i> Learn more about our Management Plan',
        TEXT4: 'The Central Laboratory of High Performance Technologies in Life Sciences (LaCTAD) mission is to provide for the Brazilian scientific community advanced technologies in genomics, proteomics, cell biology and bioinformatics comply with the growing demand for world-class research involving high-performance technologies through high quality services.',
        TEXT5: 'The LaCTAD wil consolidate and will remain as a reference of excellence in the provision of high quality and reliability services in the areas of Genomics, Proteomics, Cell Biology and Bioinformatics, operating  in self-sustaining way and investing in leading edge technologies and continuous improvement of your team.',
        TEXT6: '<ul><li>Act with agility, clarity, competence, flexibility, honesty, commitment and ethics;</li><li>Ensuring the confidentiality of user information;</li><li>Value and respect people;</li><li>Encouraging interdisciplinary and teamwork at all levels;</li><li>Optimize the use of resources;</li><li>Create an environment with  stimulating participation to decision making;</li><li>Exercising creativity and innovativeness;</li><li>Create propitious environment to education and environmental preservation;</li><li>Encourage the continued development of the employees.</li></ul>',
        TEXT7: '<p>The LaCTAD is funded by Unicamp and FAPESP. The physical infrastructure and staff needed to operate the LaCTAD are provided by UNICAMP, while the equipment is provided by FAPESP Multi-User Equipment Program.</p><p>With the installation of LaCTAD, UNICAMP intends to boost research institution providing to its researchers an odd infrastructure with  professional management, which should enable the associated projects, complementary projects and the scientific community  the ability to generate and process large volumes of biological information making possible a broader interpretation of biological phenomena.</p>'
      },
      CITATION: {
        NAME: 'Paper Citation',
        SLUG: 'citation',
        DESC: 'Learn how to create a citation about LaCTAD',
        TEXT1: '<p>We kindly ask our customers to cite LaCTAD in scientific papers that include our services, in order to help LaCTAD to continue to have public financing, allowing the constant update of our equipment and technical platforms.</br>Below, we provide a suggestion of acknowledgement to be included in scientific papers or posters. The text could be modified, depending on the context of each customer.</p>',
        TEXT2: '<h2>For articles:</h2><p>We suggest the following model:</p><p>“We thank the staff of the XXX (Cell Biology/ Genomics/ Proteomics/ Bioinformatics) section of the Life Sciences Core Facility (LaCTAD), part of the University of Campinas (UNICAMP), for their contributions to YYY (confocal microscopy/ sequencing/ mass spectrometry/ bioinformatics analysis, etc) ”</p>',
        TEXT3: '<h2>For posters:</h2><p>We suggest adding LaCTAD logo in the poster. A high-quality archive of our logo can be downloaded here.</p><p>Description of the equipment used during the services provided by LaCTAD can be found at “Equipment” section. If you need specific help, please contact our specialist team for the contracted service.</p>',
      },
      MANAGEMENT: {
        NAME: 'Management Plan',
        SLUG: 'management',
        DESC: "LaCTAD's Management plan and equipment's sharing policy",
      },
      PRESS: {
        NAME: 'Press',
        SLUG: 'press',
        DESC: 'See what the media is talking about us'
      },
      CONTACT: {
        NAME: 'Contact',
        SLUG: 'contact',
        TITLE1: 'Contact Form',
        TITLE2: "LaCTAD's Address",
        TITLE3: 'Name',
        TITLE4: 'Subject',
        TITLE5: 'Message',
        TEXT1: 'Fill the form below to contact us. For services requests go to the Service page on the desired Area.',
        TEXT2: '<i class="fa fa-briefcase"></i><b>Work with us:</b> Be a part of our team sending us your Curriculum Vitae attached to the Contact Form.',
        BUTTON_SEND: 'Send'
      },
      BIOCEL: {
        NAME: 'Cell Biology',
        SLUG: 'cell-biology',
        DESC: 'The LaCTAD of the Cell Biology area aims at providing and boosting research, offering  its users an infrastructure with services for monitoring and manipulation of cells and tissues'
      },
      GENOMA: {
        NAME: 'Genomics',
        SLUG: 'genomics',
        DESC: 'The Genomics Core goal is to offer and promote top scientfic services, providing its users with a modern infrastructure for nucleic acid sequencing'
      },
      PROTEOMA: {
        NAME: 'Proteomics',
        SLUG: 'proteomics',
        DESC: 'In the area of Proteomics, LaCTAD, aims to promote and foster research, by providing its users with an infrastructure of services for Calorimetry and Liquid Chromatography'
      },
      BIOINFO: {
        NAME: 'Bioinformatics',
        SLUG: 'bioinformatics',
        DESC: 'The LaCTAD in the area of ​​Bioinformatics aims to provide and boost research, providing to users  services infrastructure'
      },
      SERVICES: {
        NAME: 'Services',
        SLUG: 'services',
        DESC: 'Check out the reliable services offered by our {{page}} area',
        BUTTON_REQUEST: 'Service Request',
        BUTTON_PRICE: 'Estimate Price',
        BUTTON_SAMPLE: 'Sample Sending',
        TITLE_MODAL: 'Request for Service'
      },
      EQUIPS: {
        NAME: 'Equipments',
        SLUG: 'equipments'
      },
      TEAM: {
        NAME: 'Team',
        SLUG: 'team'
      },
      BLOG: {
        NAME: 'News',
        SLUG: 'blog'
      },
      EVENTS: {
        NAME: 'Events',
        SLUG: 'events',
        BUTTON_REGISTER: 'Register',
        TEXT1: 'All fields with * are required. Students must attach their school records. Maximum file size of 2 MB (.doc, .docx or .PDF).',
        SUBPAGES: {
          GOALS: {
            NAME: 'Goals',
            SLUG: 'goals'
          },
          SCHEDULE: {
            NAME: 'Schedule',
            SLUG: 'schedule'
          },
          SPEAKERS: {
            NAME: 'Speakers',
            SLUG: 'speakers'
          },
          REGISTERED: {
            NAME: 'Registered',
            SLUG: 'registered'
          },
          SELECTED: {
            NAME: 'Selected',
            SLUG: 'selected'
          }
        }
      }
    }
  })
  .translations('br', {
    GLOBAL: {
      TITLE: 'LaCTAD - Laboratório Central de Tecnologias de Alto Desempenho em Ciências da Vida',
      BUTTON_LANG_EN: 'Inglês',
      BUTTON_LANG_BR: 'Português',
      COPYRIGHT: '© 2015 LaCTAD -  Todos os Direitos Reservados',
      ABOUT: 'Sobre'
    },
    PAGES: {
      INDEX: {
        HEADLINE: 'Somos um laboratório multiusuário pronto para atender você',
        SUBHEADLINE: 'Atuamos nas áreas de Biologia Celular, Genômica, Proteômica e Bioinformática oferecendo serviços de alta qualidade para toda a comunidade científica e empresas privadas',
        BUTTON_ABOUT: 'Saiba mais',
        BUTTON_CONTACT: 'Entre em Contato',
        TITLE1: 'em Números',
        TITLE2: 'Estados Atendidos',
        TITLE3: 'Pesquisadores Atendidos',
        TITLE4: 'Terabases Sequenciadas',
        TITLE5: 'Cursos Oferecidos'
      },
      MANAGEMENT: {
        NAME: 'Plano de Gestão',
        SLUG: 'gestao',
        DESC: 'Plano de gestão e compartilhamento do uso dos equipamentos do LaCTAD'
      },
      ABOUT: {
        NAME: 'O LaCTAD',
        SLUG: 'sobre',
        DESC: 'Atuamos nas áreas de Biologia Celular, Genômica, Proteômica e Bioinformática oferecendo serviços de alta qualidade para toda a comunidade científica e empresas privadas',
        TITLE1: 'O que é o LaCTAD?',
        TITLE2: 'Missão, Visão e Valores',
        TITLE3: 'Missão',
        TITLE4: 'Visão',
        TITLE5: 'Valores',
        TITLE6: 'Financiamento e Apoio',
        TEXT1: '<p>O Laboratório Central de Tecnologias de Alto Desempenho em Ciências da Vida (LaCTAD) é uma iniciativa da UNICAMP apoiada pela FAPESP, através do programa Equipamento Multiusuários (proc no. 2009/54129-9), o qual visa a aquisição de equipamentos para pesquisa que, comumente, não são adquiridos em auxílios regulares, muitas vezes pelo alto custo. Conheça nossa missão, visão e valores.</p><p>O LaCTAD está sendo criado na UNICAMP a partir de associação entre as áreas de Biologia Celular, Genômica, Proteômica e Bioinformática, com o intuito de desenvolver estudos avançados utilizando técnicas e equipamentos de última geração.</p>',
        TEXT2: '<p>A implantação desse Laboratório tem como base a aquisição de equipamentos científicos, que deverão ser utilizados de forma continuada por uma equipe especializada (conheça nossa equipe) possibilitando um melhor aproveitamento das funções de cada equipamento. Oferecendo assim, recursos de alta qualidade e boa relação custo-benefício à comunidade da Universidade Estadual de Campinas (UNICAMP) e outras Universidades e Institutos de Pesquisa e de Tecnologias Avançadas.</p>',
        TEXT3: '<i class="fa fa-file-o"></i> Conheça o nosso Plano de Gestão.',
        TEXT4: 'O Laboratório Central de Tecnologias de Alto Desempenho em Ciências da Vida (LaCTAD) tem como missão disponibilizar para a comunidade científica brasileira tecnologias avançadas de Genômica, Proteômica, Biologia Celular e Bioinformática que atendam à crescente demanda de pesquisas de classe mundial envolvendo tecnologias de alto desempenho através de serviços de alta qualidade.',
        TEXT5: 'O LaCTAD se consolidará e se manterá como uma referência de excelência na prestação de serviços de alta qualidade e confiabilidade nas áreas de Genômica,  Proteômica, Biologia Celular e Bioinformática, buscando operar de forma autossustentável e investindo em tecnologias de ponta e aprimoramento contínuo de sua equipe técnica.',
        TEXT6: '<ul><li>Atuar com agilidade, clareza, competência, flexibilidade, honestidade, comprometimento e ética;</li><li>Garantir a confidencialidade das informações dos usuários;</li><li>Valorizar e respeitar as pessoas;</li><li>Incentivar a interdisciplinaridade e o trabalho em grupo em todos os níveis;</li><li>Otimizar o uso dos recursos;</li><li>Criar um ambiente de estímulo à participação para a tomada de decisões;</li><li>Exercitar a criatividade e a capacidade de inovação;</li><li>Criar ambiente propício à educação e preservação ambiental;</li><li>Estimular o desenvolvimento contínuo dos funcionários.</li></ul>',
        TEXT7: '<p>O LaCTAD é financiado pela Unicamp e pela FAPESP.  A infra-estrutura física e o pessoal necessário para operar o LaCTAD são fornecidos pela UNICAMP, enquanto que os equipamentos são fornecidos pelo programa Equipamentos Multiusuários da FAPESP.</p><p>Com a instalação do LaCTAD, a UNICAMP pretende impulsionar as pesquisas da instituição disponibilizando aos seus pesquisadores uma infra-estrutura impar, com administração profissional, que deverá possibilitar aos projetos associados, projetos complementares e a toda a comunidade a capacidade de gerar e processar grandes volumes de informação biológica possibilitando uma interpretação mais abrangente dos fenômenos biológicos.</p>'
      },
      CITATION: {
        NAME: 'Como citar o LaCTAD',
        SLUG: 'citacao',
        DESC: 'Saiba mais sobre como citar o LaCTAD em suas publicações',
        TEXT1: '<p>Para que o LaCTAD possa continuar sendo financiado com verbas públicas, e a fim de que a sua plataforma técnica possa ser constantemente atualizada, solicitamos que o pesquisador cite o LaCTAD nas publicações que incluam os serviços utilizados.</br>A seguir, disponibilizamos modelos de agradecimento ao LaCTAD pelos serviços prestados, com versões em inglês e em português. Os textos podem ser modificados, de acordo com a experiência de cada cliente.</p>',
        TEXT2: '<h2>Para artigos em inglês</h2><p>Sugerimos o seguinte modelo de agradecimento:</p><p>“We thank the staff of the Life Sciences Core Facility (LaCTAD) from State University of Campinas (UNICAMP), for the XXX (Cell Biology/ Genomics/ Proteomics/ Bioinformatics) analysis”</p><br><h2>Para artigos em português</h2><p>Sugerimos o seguinte modelo de agradecimento:</p><p>“Nós agradecemos à equipe de XXX (Biologia Celular/Genômica/ Proteômica/ Bioinformática) do Laboratório Central de Tecnologias de Alto Desempenho em Ciências da Vida (LaCTAD), parte da Universidade Estadual de Campinas (UNICAMP), pelas contribuições nas etapas de YYY (microscopia confocal/ sequenciamento/ espectrometria de massa/ análise de bioinformática, etc).”</p>',
        TEXT3: '<h2>Em pôsteres:</h2><p>Sugerimos a adição do logo do LaCTAD no pôster. O arquivo de alta-resolução do logo pode ser baixado aqui.</p><p>Para a descrição dos equipamentos utilizados durante os serviços prestados pelo LaCTAD, favor consultar a seção “Equipamentos”. Caso necessite de ajuda específica, entre em contato com o especialista de nossa equipe para o serviço contratado.</p>'
      },
      PRESS: {
        NAME: 'LaCTAD na mídia',
        SLUG: 'midia',
        DESC: 'Veja o que a mídia tem falado sobre nós'
      },
      CONTACT: {
        NAME: 'Contato',
        SLUG: 'contato',
        TITLE1: 'Formulário de Contato',
        TITLE2: 'Endereço do LaCTAD',
        TITLE3: 'Nome',
        TITLE4: 'Assunto',
        TITLE5: 'Mensagem',
        TEXT1: 'Preencha o Formulário abaixo para entrar em contato conosco. Para Orçamento ou Solicitação de nossos Serviços acesse a página de Serviços da respectiva Área de Interesse.',
        TEXT2: '<i class="fa fa-briefcase"></i><b>Trabalhe Conosco:</b> Faça parte da equipe do LaCTAD, envie seu Curriculum Vitae no formulário de contato.',
        BUTTON_SEND: 'Enviar'
      },
      BIOCEL: {
        NAME: 'Biologia Celular',
        SLUG: 'biologia-celular',
        DESC: 'O LaCTAD na área de Biologia Celular tem como objetivo disponibilizar e impulsionar pesquisas, disponibilizando aos seus usuários uma infra-estrutura de prestação de serviços para monitoramento e manipulação de células e tecidos'
      },
      GENOMA: {
        NAME: 'Genômica',
        SLUG: 'genomica',
        DESC: 'O LaCTAD na área de Genômica tem como objetivo disponibilizar e impulsionar pesquisas, disponibilizando aos seus usuários uma infra-estrutura de prestação de serviços para sequenciamento de ácidos nucleicos'
      },
      PROTEOMA: {
        NAME: 'Proteômica',
        SLUG: 'proteomica',
        DESC: 'O LaCTAD na área de Proteômica tem como objetivo impulsionar e colaborar nas pesquisas, disponibilizando aos seus usuários uma infra-estrutura de prestação de serviços nas áreas de Cromatografia Líquida para purificação de proteínas e de Calorimetria, para obtenção dos parâmetros de ligação em interações biomoleculares.'
      },
      BIOINFO: {
        NAME: 'Bioinformática',
        SLUG: 'bioinformatica',
        DESC: 'O LaCTAD na área de Bioinformática tem como objetivo disponibilizar e impulsionar pesquisas, disponibilizando aos seus usuários uma infra-estrutura de prestação de serviços'
      },
      SERVICES: {
        NAME: 'Serviços',
        SLUG: 'servicos',
        DESC: 'Confira os serviços oferecidos pela {{page}}',
        BUTTON_REQUEST: 'Solicitar Serviço',
        BUTTON_PRICE: 'Estimar Preço',
        BUTTON_SAMPLE: 'Envio de Amostras',
        TITLE_MODAL: 'Solicitação de Serviço'
      },
      EQUIPS: {
        NAME: 'Equipamentos',
        SLUG: 'equipamentos'
      },
      TEAM: {
        NAME: 'Equipe',
        SLUG: 'equipe'
      },
      BLOG: {
        NAME: 'Notícias',
        SLUG: 'blog'
      },
      EVENTS: {
        NAME: 'Eventos',
        SLUG: 'eventos',
        BUTTON_REGISTER: 'Inscrever',
        TEXT1: 'Os campos assinalados com * são obrigatórios. Alunos de graduação devem anexar histórico escolar completo (disciplinas, notas e eventuais reprovações) Arquivos com no máximo 2 MB nos formatos Word (.doc e .docx) ou PDF.',
        SUBPAGES: {
          GOALS: {
            NAME: 'Objetivo',
            SLUG: 'objetivo'
          },
          SCHEDULE: {
            NAME: 'Programação',
            SLUG: 'programacao'
          },
          SPEAKERS: {
            NAME: 'Palestrantes',
            SLUG: 'palestrantes'
          },
          REGISTERED: {
            NAME: 'Inscritos',
            SLUG: 'inscritos'
          },
          SELECTED: {
            NAME: 'Selecionados',
            SLUG: 'selecionados'
          }
        }
      }
    }
  });

  /* ROUTES */
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/404');
  $stateProvider
    .state('app', {
      url: '/:lang',
      abstract: true,
      template: '<ui-view/>',
      controller: 'MainController',
      params: {
        lang: {
          value: 'br',
          squash: false
        }
      },
      resolve: {
        language: ['$rootScope', '$stateParams', '$translate', '$state', function($rootScope, $stateParams, $translate, $state) {
          if($stateParams.lang == 'en' || $stateParams.lang == 'br') {
            console.log('Resolving Language...');
            $translate.use($stateParams.lang).then(function() {
              $rootScope.language = $stateParams.lang;
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
                      slug: $translate.instant('PAGES.EVENTS.SUBPAGES.GOALS.SLUG'),
                    },
                    schedule: {
                      name: $translate.instant('PAGES.EVENTS.SUBPAGES.SCHEDULE.NAME'),
                      slug: $translate.instant('PAGES.EVENTS.SUBPAGES.SCHEDULE.SLUG'),
                    },
                    speakers: {
                      name: $translate.instant('PAGES.EVENTS.SUBPAGES.SPEAKERS.NAME'),
                      slug: $translate.instant('PAGES.EVENTS.SUBPAGES.SPEAKERS.SLUG'),
                    },
                    registered: {
                      name: $translate.instant('PAGES.EVENTS.SUBPAGES.REGISTERED.NAME'),
                      slug: $translate.instant('PAGES.EVENTS.SUBPAGES.REGISTERED.SLUG'),
                    },
                    selected: {
                      name: $translate.instant('PAGES.EVENTS.SUBPAGES.SELECTED.NAME'),
                      slug: $translate.instant('PAGES.EVENTS.SUBPAGES.SELECTED.SLUG'),
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
            });
            return $stateParams.lang;
          }
        }]
      }
    })
    .state('app.home', {
      url: '',
      templateUrl: root.views + 'pages/home.html',
      controller: 'HomeController',
      resolve: {
        changes: ['$posts', '$rootScope', function($posts, $rootScope) {
          // get mudancas-de-horario posts
          $posts.category('post', 'mudanca-de-horario').then(function(data) {
            $rootScope.changes = data;
            return data;
          });
        }]
      }
    })
    .state('error', {
      url: '/404',
      templateUrl: root.views + 'pages/error.html',
      controller: 'ErrorController'
    })
    .state('app.page', {
      url: '/:page',
      templateUrl: function($stateParams) {
        switch($stateParams.page) {
          case 'eventos':
          case 'events':
            return root.views + 'event/event.html';
            break;
          case 'blog':
            return root.views + 'blog/blog.html';
            break;
          case 'sobre':
          case 'about':
            return root.views + 'about/about.html';
            break;
          case 'citacao':
          case 'citation':
            return root.views + 'about/citation.html';
            break;
          case 'gestao':
          case 'management':
            return root.views + 'about/management.html';
            break;
          case 'contato':
          case 'contact':
            return root.views + 'about/contact.html';
            break;
          case 'midia':
          case 'press':
            return root.views + 'about/press.html';
            break;
          default:
            return root.views + 'pages/page.html';
            break;
        }
      },
      resolve: {
        page: ['$rootScope', '$state', '$stateParams', '$posts', 'language', '$translate', function($rootScope, $state, $stateParams, $posts, language, $translate) {
          console.log('Resolving Page...');
          $rootScope.page = null;
          switch($stateParams.page) {
            case 'eventos':
            case 'events':
              $rootScope.page = $rootScope.pages.events;
              break;
            case 'blog':
              $rootScope.page = $rootScope.pages.blog;
              break;
            case 'sobre':
            case 'about':
              $rootScope.page = $rootScope.pages.about;
              break;
            case 'citacao':
            case 'citation':
              $rootScope.page = $rootScope.pages.citation;
              break;
            case 'gestao':
            case 'management':
              $rootScope.page = $rootScope.pages.management;
              break;
            case 'contato':
            case 'contact':
              $rootScope.page = $rootScope.pages.contact;
              break;
            case 'midia':
            case 'press':
              $rootScope.page = $rootScope.pages.press;
              $posts.type('clippings').then(function(data) {
                $rootScope.clippings = data;
              });
              break;
            case 'cell-biology':
            case 'biologia-celular':
              $rootScope.page = $rootScope.pages.biocel;
              $posts.category('services', $rootScope.page.id).then(function(data) {
                $rootScope.services = data;
              });
              break;
            case 'genomica':
            case 'genomics':
              $rootScope.page = $rootScope.pages.genomica;
              $posts.category('services', $rootScope.page.id).then(function(data) {
                $rootScope.services = data;
              });
              break;
            case 'proteomics':
            case 'proteomica':
              $rootScope.page = $rootScope.pages.proteomica;
              $posts.category('services', $rootScope.page.id).then(function(data) {
                $rootScope.services = data;
              });
              break;
            case 'bioinformatics':
            case 'bioinformatica':
              $rootScope.page = $rootScope.pages.bioinformatica;
              $posts.category('services', $rootScope.page.id).then(function(data) {
                $rootScope.services = data;
              });
              break;
          }
          return $rootScope.page;
        }]
      },
      controller: 'PageController'
    })
    .state('app.page.single', {
      url: '/:single/:item',
      templateUrl: function($stateParams) {
        switch($stateParams.single) {
          case 'services':
          case 'servicos':
            return root.views + 'pages/sidelist.html';
          case 'equipments':
          case 'equipamentos':
            return root.views + 'pages/sidelist.html';
            break;
          case 'team':
          case 'equipe':
            return root.views + 'pages/members.html';
            break;
          case 'faq':
            return root.views + 'pages/faq.html';
            break;
          default:
            if($stateParams.page == 'eventos' || $stateParams.page == 'events') {
              return root.views + 'event/event.post.html';
            } else if($stateParams.page == 'blog') {
              return root.views + 'blog/blog.post.html';
            }
            break;
        }
      },
      resolve: {
        single: ['$rootScope', '$state', '$stateParams', '$posts', 'language', '$translate', 'page', '$filter', '$sce',function($rootScope, $state, $stateParams, $posts, language, $translate, page, $filter, $sce) {
          if(page.slug == 'eventos' || page.slug == 'events') {
            if(language == 'en') {
              $posts.type('events').then(function(data) {
                $rootScope.event = null;
                $rootScope.noEventEng = true;
                for(var i = 0; i < data.length; i++) {
                  if(data[i].english.english_slug == $stateParams.single) {
                    $rootScope.noEventEng = false;
                    $rootScope.event = data[i];
                    $rootScope.registrationOpen = moment().isBefore($rootScope.event.event.register_close_date);
                    $rootScope.page.single = $rootScope.event.slug;
                    $rootScope.page.english_single = $rootScope.event.english.english_slug;
                    $rootScope.activeItem = {};
                    if($stateParams.item) {
                      $rootScope.hasItem = true;
                      switch($stateParams.item) {
                        case 'goals':
                          $rootScope.activeItem.content = data[i].english.english_goals;
                          $rootScope.activeItem.title = "Goals";
                          $rootScope.page.item = 'objetivo';
                          $rootScope.page.english_item = 'goals';
                          break;
                        case 'schedule':
                          $rootScope.activeItem.content = data[i].english.english_schedule;
                          $rootScope.activeItem.title = "Schedule";
                          $rootScope.page.item = 'programacao';
                          $rootScope.page.english_item = 'schedule';
                          break;
                        case 'speakers':
                          $rootScope.activeItem.content = data[i].english.english_speakers;
                          $rootScope.activeItem.title = "Speakers";
                          $rootScope.page.item = 'palestrantes';
                          $rootScope.page.english_item = 'speakers';
                          break;
                        case 'registered':
                          $rootScope.activeItem.content = data[i].english.english_registered_users;
                          $rootScope.activeItem.title = "Registered";
                          $rootScope.page.item = 'inscritos';
                          $rootScope.page.english_item = 'registered';
                          break;
                        case 'selected':
                          $rootScope.activeItem.content = data[i].english.english_selected_users;
                          $rootScope.activeItem.title = "Selected";
                          $rootScope.page.item = 'selecionados';
                          $rootScope.page.english_item = 'selected';
                          break;
                      }
                    } else {
                      $rootScope.hasItem = false;
                      $rootScope.activeItem.content = $rootScope.event.english.english_goals;
                      $rootScope.activeItem.title = "Goals";
                      $rootScope.page.item = 'objetivo';
                      $rootScope.page.english_item = 'goals';
                    }
                  }
                }
                if($rootScope.noEventEng == true) {
                  $posts.typeName('events', $stateParams.single).then(function(data) {
                    $rootScope.event = data[0];
                    $rootScope.registrationOpen = moment().isBefore($rootScope.event.event.register_close_date);
                    $rootScope.page.single = $rootScope.event.slug;
                    $rootScope.page.english_single = $rootScope.event.slug;
                    $rootScope.activeItem = {};
                    if($stateParams.item) {
                      $rootScope.hasItem = true;
                      switch($stateParams.item) {
                        case 'goals':
                          if($rootScope.event.english.english_goals) {
                            $rootScope.activeItem.content = $rootScope.event.english.english_goals;
                          } else {
                            $rootScope.activeItem.content = '<p>Sorry. This information is only avaiable in Portuguese.</p>';
                          }
                          $rootScope.activeItem.title = "Goals";
                          $rootScope.page.item = 'objetivo';
                          $rootScope.page.english_item = 'goals';
                          break;
                        case 'schedule':
                          if($rootScope.event.english.english_schedule) {
                            $rootScope.activeItem.content = $rootScope.event.english.english_schedule;
                          } else {
                            $rootScope.activeItem.content = '<p>Sorry. This information is only avaiable in Portuguese.</p>';
                          }
                          $rootScope.activeItem.title = "Schedule";
                          $rootScope.page.item = 'programacao';
                          $rootScope.page.english_item = 'schedule';
                          break;
                        case 'speakers':
                          if($rootScope.event.english.english_speakers) {
                            $rootScope.activeItem.content = $rootScope.event.english.english_speakers;
                          } else {
                            $rootScope.activeItem.content = '<p>Sorry. This information is only avaiable in Portuguese.</p>';
                          }
                          $rootScope.activeItem.title = "Speakers";
                          $rootScope.page.item = 'palestrantes';
                          $rootScope.page.english_item = 'speakers';
                          break;
                        case 'registered':
                          if($rootScope.event.english.english_registered_users) {
                            $rootScope.activeItem.content = $rootScope.event.english.english_registered_users;
                          } else {
                            $rootScope.activeItem.content = '<p>Sorry. This information is only avaiable in Portuguese.</p>';
                          }
                          $rootScope.activeItem.title = "Registered";
                          $rootScope.page.item = 'inscritos';
                          $rootScope.page.english_item = 'registered';
                          break;
                        case 'selected':
                          if($rootScope.event.english.english_selected_users) {
                            $rootScope.activeItem.content = $rootScope.event.english.english_selected_users;
                          } else {
                            $rootScope.activeItem.content = '<p>Sorry. This information is only avaiable in Portuguese.</p>';
                          }
                          $rootScope.activeItem.title = "Selected";
                          $rootScope.page.item = 'selecionados';
                          $rootScope.page.english_item = 'selected';
                          break;
                      }
                    } else {
                      $rootScope.hasItem = false;
                      $rootScope.activeItem.content = '<p>Sorry. This information is only avaiable in Portuguese.</p>';
                      $rootScope.activeItem.title = "Goals";
                      $rootScope.page.item = 'objetivo';
                      $rootScope.page.english_item = 'goals';
                    }
                  });
                }
              });
            } else {
              $posts.typeName('events', $stateParams.single).then(function(data) {
                $rootScope.event = data[0];
                $rootScope.registrationOpen = moment().isBefore($rootScope.event.event.register_close_date);
                $rootScope.page.single = $rootScope.event.slug;
                if($rootScope.event.english.english_slug) {
                  $rootScope.page.english_single = $rootScope.event.english.english_slug;
                } else {
                  $rootScope.page.english_single = $rootScope.event.slug;
                }
                $rootScope.activeItem = {};
                if($stateParams.item) {
                  $rootScope.hasItem = true;
                  switch($stateParams.item) {
                    case 'objetivo':
                      $rootScope.activeItem.content = data[0].event.goals;
                      $rootScope.activeItem.title = "Objetivo";
                      $rootScope.page.item = 'objetivo';
                      $rootScope.page.english_item = 'goals';
                      break;
                    case 'programacao':
                      $rootScope.activeItem.content = data[0].event.schedule;
                      $rootScope.activeItem.title = "Programação";
                      $rootScope.page.item = 'programacao';
                      $rootScope.page.english_item = 'schedule';
                      break;
                    case 'palestrantes':
                      $rootScope.activeItem.content = data[0].event.speakers;
                      $rootScope.activeItem.title = "Palestrantes";
                      $rootScope.page.item = 'palestrantes';
                      $rootScope.page.english_item = 'speakers';
                      break;
                    case 'inscritos':
                      $rootScope.activeItem.content = data[0].event.registered_users;
                      $rootScope.activeItem.title = "Inscritos";
                      $rootScope.page.item = 'inscritos';
                      $rootScope.page.english_item = 'registered';
                      break;
                    case 'selecionados':
                      $rootScope.activeItem.content = data[0].event.selected_users;
                      $rootScope.activeItem.title = "Selecionados";
                      $rootScope.page.item = 'selecionados';
                      $rootScope.page.english_item = 'selected';
                      break;
                  }
                } else {
                  $rootScope.hasItem = false;
                  $rootScope.activeItem.content = $rootScope.event.event.goals;
                  $rootScope.activeItem.title = "Objetivo";
                  $rootScope.page.item = 'objetivo';
                  $rootScope.page.english_item = 'goals';
                }
              });
            }
          } else if(page.slug == 'blog') {
            if(language == 'en') {
              $rootScope.noEng = true;
              $posts.all().then(function(data) {
                $rootScope.post = null;
                for(var i = 0; i < data.length; i++) {
                  if(data[i].english.english_slug == $stateParams.single) {
                    $rootScope.noEng = false;
                    $rootScope.post = data[i];
                    $rootScope.page.single = $rootScope.post.slug;
                    $rootScope.page.english_single = $rootScope.page.single;
                  }
                }
                if($rootScope.noEng == true) {
                  $posts.name($stateParams.single).then(function(data) {
                    $rootScope.post = data[0];
                    $rootScope.page.single = $rootScope.post.slug;
                    $rootScope.page.english_single = $rootScope.post.slug;
                  });
                }
              });
            } else {
              $posts.name($stateParams.single).then(function(data) {
                $rootScope.post = data[0];
                $rootScope.page.single = $rootScope.post.slug;
                $rootScope.page.english_single = $rootScope.post.english.english_slug;
                if($rootScope.post.english.english_slug) {
                  $rootScope.noEng = false;
                  $rootScope.page.english_single = $rootScope.post.english.english_slug;
                } else {
                  $rootScope.noEng = true;
                  $rootScope.page.english_single = $rootScope.post.slug;
                }
              });
            }
          } else {
            $rootScope.page.single = $stateParams.single;
            switch($stateParams.single) {
              case 'services':
              case 'servicos':
                var single = 'services';
                break;
              case 'equipments':
              case 'equipamentos':
                var single = 'equipments';
                break;
              case 'team':
              case 'equipe':
                var single = 'teams';
                break;
              case 'faq':
                var single = 'faqs';
                break;
            }

            $posts.category(single, page.id).then(function(data) {
              $rootScope.items = data;
              if($stateParams.item) {
                $rootScope.hasItem = true;
                if(language == 'en') {
                  var found = $filter('filter')($rootScope.items, { english: { english_slug: $stateParams.item }}, true);
                } else {
                  var found = $filter('filter')($rootScope.items, {slug: $stateParams.item}, true);
                }
                if(found) {
                  $rootScope.activeItem = found[0];
                  $rootScope.page.item = found[0].slug;
                  $rootScope.page.english_item = found[0].english.english_slug;
                } else {
                  $rootScope.activeItem = data[0];
                  $rootScope.page.item = data[0].slug;
                  $rootScope.page.english_item = data[0].english.english_slug;
                }
              } else {
                $rootScope.hasItem = false;
                $rootScope.activeItem = data[0];
              }
            });
          }
        }],
        language: ['language', function(language) {
          return language;
        }]
      },
      controller: 'DetailController'
    });
})

.filter('htmlToPlaintext', function() {
  return function(text) {
    return String(text).replace(/<[^>]+>/gm, '');
  }
})

.filter('array', function() {
  return function(arrayLength) {
    if (arrayLength) {
      arrayLength = Math.ceil(arrayLength);
      var arr = new Array(arrayLength), i = 0;
      for (; i < arrayLength; i++) {
        arr[i] = i;
      }
      return arr;
    }
  };
})

.filter('startFrom', function() {
  return function(input, start) {
    if (!input || !input.length) { return; }
    return input.slice(start);
  }
});