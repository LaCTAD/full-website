<!DOCTYPE html>
<html <?php language_attributes(); ?> ng-app="app">
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
  <title>{{'GLOBAL.TITLE' | translate}}</title>
	<base href="/website/wordpress/">
	<!--[if lt IE 9]>
	<script src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/js/html5.js"></script>
	<![endif]-->
  <link href='http://fonts.googleapis.com/css?family=Montserrat:400,700|Open+Sans:300italic,300' rel='stylesheet' type='text/css'>
  <link rel="stylesheet" type="text/css" href="<?php echo esc_url( get_template_directory_uri() ); ?>/app/components/owlcarousel/owl-carousel/owl.carousel.css">
  <link rel="stylesheet" type="text/css" href="<?php echo esc_url( get_template_directory_uri() ); ?>/app/components/owlcarousel/owl-carousel/owl.theme.css">
  <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css">
  <link rel="stylesheet" type="text/css" href="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/css/bootstrap.min.css">
	<link rel="stylesheet" type="text/css" href="<?php echo esc_url( get_template_directory_uri() ); ?>/style.css">
	<?php wp_head(); ?>
  </style>
</head>
<body>
  <div class="pre-header">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <span class="hidden-xs" style="margin-right: 15px;">
            <i class="fa fa-phone"></i> +55  19  3521-5234
          </span>
            <i class="fa fa-clock-o"></i> <span class="hidden-xs">Horário de Funcionamento:</span> Seg à Sex - 8h30 às 17h30
          <div class="pull-right">
            <a href="" ng-click="setLanguage('br')"><span class="flag br"></span> BR</a> |
            <a href="" ng-click="setLanguage('en')"><span class="flag us"></span> EN</a>
          </div>
        </div>
      </div>
    </div>
  </div>
	<header>
		<div class="container">
      <div class="row">
        <div class="col-xs-1">
          <a class="logo" ui-sref='app.home({lang: language})' rel="home"><?php bloginfo( 'name' ); ?></a>
        </div>
        <div class="col-xs-11">
          <ul class="menu hidden-xs">
            <li>
              <a ui-sref="app.page({ page: pages.about.slug, single: null })" ng-class="{'active' : isAbout()}">{{ pages.about.name }}</a>
              <ul class="submenu">
                <li><a ui-sref="app.page({ page: pages.management.slug, single: null })">{{ pages.management.name }}</a></li>
                <li><a ui-sref="app.page({ page: pages.press.slug, single: null })">{{ pages.press.name }}</a></li>
                <li><a ui-sref="app.page({ page: 'blog', single: null })">{{ pages.blog.name }}</a></li>
                <li><a ui-sref="app.page({ page: pages.events.slug, single: null })">{{ pages.events.name }}</a></li>
                <li><a ui-sref="app.page({ page: pages.contact.slug, single: null })">{{ pages.contact.name }}</a></li>
              </ul>
            </li>
            <li>
              <a ui-sref="app.page({ page: pages.biocel.slug })" ui-sref-active="active">{{pages.biocel.name}}</a>
              <ul class="submenu">
                <li>
                  <a ui-sref="app.page.single({ page: pages.biocel.slug, single: pages.services.slug, item: null })">{{'PAGES.SERVICES.NAME' | translate}}</a>
                </li>
                <li><a ui-sref="app.page.single({ page: pages.biocel.slug, single: pages.equipments.slug, item: null })">{{'PAGES.EQUIPS.NAME' | translate}}</a></li>
                <!-- <li><a ui-sref="app.page.single({ page: pages.biocel.slug, single: pages.teams.slug, item: null })">{{'PAGES.TEAM.NAME' | translate}}</a></li> -->
                <li><a ui-sref="app.page.single({ page: pages.biocel.slug, single: 'faq', item: null })">FAQ</a></li>
              </ul>
            </li>
            <li>
              <a ui-sref="app.page({ page: pages.genomica.slug })" ui-sref-active="active">{{pages.genomica.name}}</a>
              <ul class="submenu">
                <li>
                  <a ui-sref="app.page.single({ page: pages.genomica.slug, single: pages.services.slug, item: null })">{{'PAGES.SERVICES.NAME' | translate}}</a>
                </li>
                <li><a ui-sref="app.page.single({ page: pages.genomica.slug, single: pages.equipments.slug, item: null })">{{'PAGES.EQUIPS.NAME' | translate}}</a></li>
                <!-- <li><a ui-sref="app.page.single({ page: pages.genomica.slug, single: pages.teams.slug})">{{'PAGES.TEAM.NAME' | translate}}</a></li> -->
                <li><a ui-sref="app.page.single({ page: pages.genomica.slug, single: 'faq'})">FAQ</a></li>
              </ul>
            </li>
            <li>
              <a ui-sref="app.page({ page: pages.proteomica.slug })" ui-sref-active="active">{{pages.proteomica.name}}</a>
              <ul class="submenu">
                <li>
                  <a ui-sref="app.page.single({ page: pages.proteomica.slug, single: pages.services.slug, item: null })">{{'PAGES.SERVICES.NAME' | translate}}</a>
                </li>
                <li><a ui-sref="app.page.single({ page: pages.proteomica.slug, single: pages.equipments.slug, item: null })">{{'PAGES.EQUIPS.NAME' | translate}}</a></li>
                <!-- <li><a ui-sref="app.page.single({ page: pages.proteomica.slug, single: pages.teams.slug, item: null })">{{'PAGES.TEAM.NAME' | translate}}</a></li> -->
                <li><a ui-sref="app.page.single({ page: pages.proteomica.slug, single: 'faq', item: null})">FAQ</a></li>
              </ul>
            </li>
            <li>
              <a ui-sref="app.page({ page: pages.bioinformatica.slug })" ui-sref-active="active">{{pages.bioinformatica.name}}</a>
              <ul class="submenu">
                <li>
                  <a ui-sref="app.page.single({ page: pages.bioinformatica.slug, single: pages.services.slug, item: null })">{{'PAGES.SERVICES.NAME' | translate}}</a>
                </li>
                <li><a ui-sref="app.page.single({ page: pages.bioinformatica.slug, single: pages.equipments.slug, item: null })">{{'PAGES.EQUIPS.NAME' | translate}}</a></li>
                <!-- <li><a ui-sref="app.page.single({ page: pages.bioinformatica.slug, single: pages.teams.slug, item: null })">{{'PAGES.TEAM.NAME' | translate}}</a></li> -->
                <li><a ui-sref="app.page.single({ page: pages.bioinformatica.slug, single: 'faq', item: null })">FAQ</a></li>
              </ul>
            </li>
          </ul>
        </div>
        <a href="#" class="menu-trigger visible-xs">
          <span class="menu-icon"></span>
        </a>
      </div>
    </div>
    <ul class="menu-mobile">
      <li>
        <a href="">Sobre</a>
        <ul class="submenu-mobile">
          <li><a ui-sref="app.page({ page: 'blog', single: null })">Blog</a></li>
          <li><a href="">Eventos</a></li>
          <li><a href="">LaCTAD na mídia</a></li>
          <li><a href="">Contato</a></li>
        </ul>
      </li>
      <li>
        <a href="">Biologia Celular</a>
        <ul class="submenu-mobile">
              <li><a href="">Serviços</a></li>
              <li><a href="">Equipamentos</a></li>
              <li><a href="">Equipe</a></li>
              <li><a href="">FAQ</a></li>
            </ul>
      </li>
      <li>
        <a href="">Genômica</a>
        <ul class="submenu-mobile">
              <li><a href="">Serviços</a></li>
              <li><a href="">Equipamentos</a></li>
              <li><a href="">Equipe</a></li>
              <li><a href="">FAQ</a></li>
            </ul>
      </li>
      <li>
        <a href="">Proteômica</a>
        <ul class="submenu-mobile">
              <li><a href="">Serviços</a></li>
              <li><a href="">Equipamentos</a></li>
              <li><a href="">Equipe</a></li>
              <li><a href="">FAQ</a></li>
            </ul>
      </li>
      <li>
        <a href="">Bioinformática</a>
        <ul class="submenu-mobile">
              <li><a href="">Serviços</a></li>
              <li><a href="">Equipamentos</a></li>
              <li><a href="">Equipe</a></li>
              <li><a href="">FAQ</a></li>
            </ul>
      </li>
    </ul>
	</header>

	<main ui-view></main>

	<footer>
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <ul>
            <li>LaCTAD</li>
            <li>Universidade Estadual de Campinas – Unicamp</li>
            <li>Dr. André Tosello, 550 – CEP: 13083-886</li>
            <li>Cidade Universitária Zeferino Vaz – Barão Geraldo</li>
            <li>Caixa Postal 6107 – Campinas/SP</li>
            <li>Fone: +55  19  3521-5234</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="subfooter">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            {{'GLOBAL.COPYRIGHT' | translate}}
          </div>
        </div>
      </div>
    </div>
  </footer>

  <div class="bkg">
    <div class="loader">
      <div class="helix">
        <span class="dots"></span>
        <span class="dots"></span>
        <span class="dots"></span>
        <span class="dots"></span>
        <span class="dots"></span>
        <span class="dots"></span>
        <span class="dots"></span>
        <span class="dots"></span>
        <span class="dots"></span>
        <span class="dots"></span>
      </div>
    </div>
  </div>

<?php wp_footer(); ?>

</body>
</html>