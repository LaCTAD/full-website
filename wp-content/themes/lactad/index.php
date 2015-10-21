<!DOCTYPE html>
<html <?php language_attributes(); ?> ng-app="app">
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
	<title translate="{{'GLOBAL.TITLE'}}"></title>
	<base href="/">
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
  <script src='https://www.google.com/recaptcha/api.js'></script>
</head>
<body>
  <div class="warning" ng-if="changes.length > 0">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <a ui-sref="app.page.single({ page: 'blog', single: changes[0].slug })">ATENÇÃO: {{changes[0].title}}</a>
        </div>
      </div>
    </div>
  </div>
  <div class="pre-header">
    <div class="container">
      <div class="row">
        <div class="col-xs-12">
          <span class="hidden-xs" style="margin-right: 15px;">
            <i class="fa fa-phone"></i> +55  19  3521-5234
          </span>
            <i class="fa fa-clock-o"></i> <span class="hidden-xs">Horário de Funcionamento:</span> Seg à Sex - 8h30 às 17h30
          <div class="pull-right">
            <a href="" ng-click="setLanguage('br')">BR</a> |
            <a href="" ng-click="setLanguage('en')">EN</a>
          </div>
        </div>
      </div>
    </div>
  </div>
	<header>
		<div class="container">
      <div class="row">
        <div class="pull-left">
          <a class="logo" ui-sref='app.home({lang: language})' rel="home">
            <img class="img-horizontal" src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/img/lactad_horizontal.png" height="15">
            <img class="img-vertical" src="<?php echo esc_url( get_template_directory_uri() ); ?>/assets/img/lactad_vertical.png" height="78">
          </a>
        </div>
        <div class="pull-right">
          <ul class="menu hidden-xs">
            <li>
              <a ui-sref="app.page({ page: pages.about.slug, single: null })" ng-class="{'active' : isAbout()}" translate="{{ pages.about.name }}"></a>
              <ul class="submenu">
                <li><a ui-sref="app.page({ page: pages.management.slug, single: null })" translate="{{ pages.management.name }}"></a></li>
                <li><a ui-sref="app.page({ page: pages.press.slug, single: null })" translate="{{ pages.press.name }}"></a></li>
                <li><a ui-sref="app.page({ page: 'blog', single: null })" translate="{{ pages.blog.name }}"></a></li>
                <li><a ui-sref="app.page({ page: pages.events.slug, single: null })" translate="{{ pages.events.name }}"></a></li>
                <li><a ui-sref="app.page({ page: pages.contact.slug, single: null })" translate="{{ pages.contact.name }}"></a></li>
              </ul>
            </li>
            <li>
              <a ui-sref="app.page({ page: pages.biocel.slug })" ui-sref-active="active" translate="{{pages.biocel.name}}"></a>
              <ul class="submenu">
                <li>
                  <a ui-sref="app.page.single({ page: pages.biocel.slug, single: pages.services.slug, item: null })" translate="{{pages.services.name}}"></a>
                </li>
                <li><a ui-sref="app.page.single({ page: pages.biocel.slug, single: pages.equipments.slug, item: null })" translate="{{pages.equipments.name}}"></a></li>
                <!-- <li><a ui-sref="app.page.single({ page: pages.biocel.slug, single: pages.teams.slug, item: null })">{{'PAGES.TEAM.NAME' | translate}}</a></li> -->
                <li><a ui-sref="app.page.single({ page: pages.biocel.slug, single: 'faq', item: null })">FAQ</a></li>
              </ul>
            </li>
            <li>
              <a ui-sref="app.page({ page: pages.genomica.slug })" ui-sref-active="active" translate="{{pages.genomica.name}}"></a>
              <ul class="submenu">
                <li><a ui-sref="app.page.single({ page: pages.genomica.slug, single: pages.services.slug, item: null })" translate="{{pages.services.name}}"></a></li>
                <li><a ui-sref="app.page.single({ page: pages.genomica.slug, single: pages.equipments.slug, item: null })" translate="{{pages.equipments.name}}"></a></li>
                <!-- <li><a ui-sref="app.page.single({ page: pages.genomica.slug, single: pages.teams.slug})">{{'PAGES.TEAM.NAME' | translate}}</a></li> -->
                <li><a ui-sref="app.page.single({ page: pages.genomica.slug, single: 'faq'})">FAQ</a></li>
              </ul>
            </li>
            <li>
              <a ui-sref="app.page({ page: pages.proteomica.slug })" ui-sref-active="active" translate="{{pages.proteomica.name}}"></a>
              <ul class="submenu">
                <li>
                  <a ui-sref="app.page.single({ page: pages.proteomica.slug, single: pages.services.slug, item: null })" translate="{{pages.services.name}}"></a>
                </li>
                <li><a ui-sref="app.page.single({ page: pages.proteomica.slug, single: pages.equipments.slug, item: null })" translate="{{pages.equipments.name}}"></a></li>
                <!-- <li><a ui-sref="app.page.single({ page: pages.proteomica.slug, single: pages.teams.slug, item: null })">{{'PAGES.TEAM.NAME' | translate}}</a></li> -->
                <li><a ui-sref="app.page.single({ page: pages.proteomica.slug, single: 'faq', item: null})">FAQ</a></li>
              </ul>
            </li>
            <li>
              <a ui-sref="app.page({ page: pages.bioinformatica.slug })" ui-sref-active="active" translate="{{pages.bioinformatica.name}}"></a>
              <ul class="submenu">
                <li>
                  <a ui-sref="app.page.single({ page: pages.bioinformatica.slug, single: pages.services.slug, item: null })" translate="{{pages.services.name}}"></a>
                </li>
                <li><a ui-sref="app.page.single({ page: pages.bioinformatica.slug, single: pages.equipments.slug, item: null })" translate="{{pages.equipments.name}}"></a></li>
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
        <a href="" translate="{{pages.about.name}}"></a>
        <ul class="submenu-mobile">
          <li><a ui-sref="app.page({ page: pages.about.slug, single: null })" translate="{{ pages.about.name }}"></a></li>
          <li><a ui-sref="app.page({ page: pages.management.slug, single: null })" translate="{{ pages.management.name }}"></a></li>
          <li><a ui-sref="app.page({ page: pages.press.slug, single: null })" translate="{{ pages.press.name }}"></a></li>
          <li><a ui-sref="app.page({ page: 'blog', single: null })" translate="{{ pages.blog.name }}"></a></li>
          <li><a ui-sref="app.page({ page: pages.events.slug, single: null })" translate="{{ pages.events.name }}"></a></li>
          <li><a ui-sref="app.page({ page: pages.contact.slug, single: null })" translate="{{ pages.contact.name }}"></a></li>
        </ul>
      </li>
      <li>
        <a href="" translate="{{pages.biocel.name}}"></a>
        <ul class="submenu-mobile">
          <li><a ui-sref="app.page({ page: pages.biocel.slug })" ui-sref-active="active" translate="{{pages.biocel.name}}"></a></li>
          <li><a ui-sref="app.page.single({ page: pages.biocel.slug, single: pages.services.slug, item: null })" translate="{{pages.services.name}}"></a></li>
          <li><a ui-sref="app.page.single({ page: pages.biocel.slug, single: pages.equipments.slug, item: null })" translate="{{pages.equipments.name}}"></a></li>
          <li><a ui-sref="app.page.single({ page: pages.biocel.slug, single: 'faq', item: null })">FAQ</a></li>
        </ul>
      </li>
      <li>
        <a href="" translate="{{pages.genomica.name}}"></a>
        <ul class="submenu-mobile">
          <li><a ui-sref="app.page({ page: pages.genomica.slug })" ui-sref-active="active" translate="{{pages.genomica.name}}"></a></li>
          <li><a ui-sref="app.page.single({ page: pages.genomica.slug, single: pages.services.slug, item: null })" translate="{{pages.services.name}}"></a></li>
          <li><a ui-sref="app.page.single({ page: pages.genomica.slug, single: pages.equipments.slug, item: null })" translate="{{pages.equipments.name}}"></a></li>
          <li><a ui-sref="app.page.single({ page: pages.genomica.slug, single: 'faq'})">FAQ</a></li>
        </ul>
      </li>
      <li>
        <a href="" translate="{{pages.proteomica.name}}"></a>
        <ul class="submenu-mobile">
          <li><a ui-sref="app.page({ page: pages.proteomica.slug })" ui-sref-active="active" translate="{{pages.proteomica.name}}"></a></li>
          <li><a ui-sref="app.page.single({ page: pages.proteomica.slug, single: pages.services.slug, item: null })" translate="{{pages.services.name}}"></a></li>
          <li><a ui-sref="app.page.single({ page: pages.proteomica.slug, single: pages.equipments.slug, item: null })" translate="{{pages.equipments.name}}"></a></li>
          <li><a ui-sref="app.page.single({ page: pages.proteomica.slug, single: 'faq', item: null})">FAQ</a></li>
        </ul>
      </li>
      <li>
        <a href="" translate="{{pages.bioinformatica.name}}"></a>
        <ul class="submenu-mobile">
          <li><a ui-sref="app.page({ page: pages.bioinformatica.slug })" ui-sref-active="active" translate="{{pages.bioinformatica.name}}"></a></li>
          <li><a ui-sref="app.page.single({ page: pages.bioinformatica.slug, single: pages.services.slug, item: null })" translate="{{pages.services.name}}"></a></li>
          <li><a ui-sref="app.page.single({ page: pages.bioinformatica.slug, single: pages.equipments.slug, item: null })" translate="{{pages.equipments.name}}"></a></li>
          <li><a ui-sref="app.page.single({ page: pages.bioinformatica.slug, single: 'faq', item: null })">FAQ</a></li>
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
          <div class="col-xs-12" translate="{{'GLOBAL.COPYRIGHT'}}"></div>
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
<script type="text/javascript">
  jQuery(function() {
    // Controls menu-mobile trigger icon
    jQuery('.menu-trigger').on('click', function(){
      jQuery(this).toggleClass('close-nav');
      jQuery('.submenu-mobile').each(function() {
        jQuery(this).slideUp();
      });
      jQuery('.menu-mobile').stop().slideToggle();
    });

    // Controls the mobile menu accordion
    jQuery('.menu-mobile > li > a').on('click', function(event) {
      event.preventDefault();
      jQuery('.submenu-mobile').not(jQuery(this).next('.submenu-mobile')).each(function() {
        jQuery(this).slideUp();
      });
      jQuery(this).next('.submenu-mobile').stop().slideToggle();
    });

    jQuery('.submenu-mobile > li > a').on('click', function(event) {
      jQuery('.menu-trigger').click();
    });
  });
</script>

</body>
</html>
