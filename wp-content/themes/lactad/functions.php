<?php
/* Enqueueing scripts */
function my_scripts() {
  wp_enqueue_script(
    'angularjs',
    get_stylesheet_directory_uri() . '/app/components/angular/angular.min.js',
    array(),
    '1.3.15',
    true
  );

  wp_enqueue_script(
    'angularjs-route',
    get_stylesheet_directory_uri() . '/app/components/angular-ui-router/release/angular-ui-router.min.js',
    array('angularjs'),
    '0.2.13',
    true
  );

  wp_enqueue_script(
    'angularjs-sanitize',
    get_stylesheet_directory_uri() . '/app/components/angular-sanitize/angular-sanitize.min.js',
    array('angularjs'),
    '1.3.15',
    true
  );

  wp_enqueue_script(
    'angularjs-animate',
    get_stylesheet_directory_uri() . '/app/components/angular-animate/angular-animate.min.js',
    array('angularjs'),
    '1.3.15',
    true
  );

  wp_enqueue_script(
    'angularjs-translate',
    get_stylesheet_directory_uri() . '/app/components/angular-translate/angular-translate.min.js',
    array('angularjs'),
    '2.6.1',
    true
  );

  wp_enqueue_script(
    'angularjs-modals',
    get_stylesheet_directory_uri() . '/app/components/angular-modal-service/dst/angular-modal-service.min.js',
    array('angularjs'),
    '0.6.6',
    true
  );

  wp_enqueue_script(
    'jquery',
    get_stylesheet_directory_uri() . '/app/components/jquery/dist/jquery.min.js',
    null,
    '2.1.3',
    true
  );

  wp_enqueue_script(
    'jquery-animateNumber',
    get_stylesheet_directory_uri() . '/app/components/jquery-animatenumber/jquery.animateNumber.min.js',
    array('jquery'),
    '0.0.10',
    true
  );

  wp_enqueue_script(
    'owlcarousel',
    get_stylesheet_directory_uri() . '/app/components/owlcarousel/owl-carousel/owl.carousel.min.js',
    array('jquery'),
    '1.3.2',
    true
  );

  wp_enqueue_script(
    'moment',
    get_stylesheet_directory_uri() . '/app/components/moment/min/moment.min.js',
    array('jquery'),
    '2.10.3',
    true
  );

  wp_enqueue_script(
    'bootstrap',
    get_stylesheet_directory_uri() . '/app/components/bootstrap/js/modal.js',
    array('jquery'),
    '3.3.4',
    true
  );

  /* Loading app config and filters */
  wp_enqueue_script(
    'app',
    get_stylesheet_directory_uri() . '/app/app.js',
    array('angularjs', 'angularjs-route', 'angularjs-sanitize', 'angularjs-animate', 'angularjs-translate', 'angularjs-modals', 'jquery'),
    null,
    true
  );

  /* Loading controllers */
  wp_enqueue_script(
    'error',
    get_stylesheet_directory_uri() . '/app/controllers/error.js',
    array('app'),
    null,
    true
  );

  wp_enqueue_script(
    'main',
    get_stylesheet_directory_uri() . '/app/controllers/main.js',
    array('app'),
    null,
    true
  );

  wp_enqueue_script(
    'home',
    get_stylesheet_directory_uri() . '/app/controllers/home.js',
    array('app'),
    null,
    true
  );

  wp_enqueue_script(
    'page',
    get_stylesheet_directory_uri() . '/app/controllers/page.js',
    array('app'),
    null,
    true
  );

  wp_enqueue_script(
    'blog',
    get_stylesheet_directory_uri() . '/app/controllers/blog.js',
    array('app'),
    null,
    true
  );

  wp_enqueue_script(
    'event',
    get_stylesheet_directory_uri() . '/app/controllers/event.js',
    array('app'),
    null,
    true
  );

  wp_enqueue_script(
    'faq',
    get_stylesheet_directory_uri() . '/app/controllers/faq.js',
    array('app'),
    null,
    true
  );

  wp_enqueue_script(
    'equip',
    get_stylesheet_directory_uri() . '/app/controllers/equip.js',
    array('app'),
    null,
    true
  );

  wp_enqueue_script(
    'detail',
    get_stylesheet_directory_uri() . '/app/controllers/detail.js',
    array('app'),
    null,
    true
  );

  wp_enqueue_script(
    'members',
    get_stylesheet_directory_uri() . '/app/controllers/members.js',
    array('app'),
    null,
    true
  );

  wp_enqueue_script(
    'modals',
    get_stylesheet_directory_uri() . '/app/controllers/modal.js',
    array('app'),
    null,
    true
  );

  /* Loading services */
  wp_enqueue_script(
    'services.posts',
    get_stylesheet_directory_uri() . '/app/services/posts.js',
    array('app'),
    null,
    true
  );

  wp_localize_script(
    'app',
    'root',
    array(
      'views' => trailingslashit( get_template_directory_uri() ) . 'app/views/',
      'root' => trailingslashit( get_template_directory_uri() )
    )
  );

}
add_action('wp_enqueue_scripts', 'my_scripts');

/* Adjusting admin bar style */
function hide_admin_bar_from_front_end(){
  if (is_blog_admin()) {
    return true;
  }
  remove_action( 'wp_head', '_admin_bar_bump_cb' );
  return false;
}
add_filter( 'show_admin_bar', 'hide_admin_bar_from_front_end' );

/* Pre populating the category mudanca de horario */
function insert_category() {
  wp_insert_term(
    'Mudança de Horário',
    'category',
    array(
      'description' => 'Categoria usada para indicar que o post deve receber destaque por conter informações sobre mudança de horário de funcionamento.',
      'slug'    => 'mudanca-de-horario'
    )
  );
}
add_action( 'after_setup_theme', 'insert_category' );

/* Enabling post thumbnails */
add_theme_support( 'post-thumbnails' );

/* Creating Custom Post Types */
function create_custom_post_types() {

  /* Creating Clipping as a Custom Post Type */
  register_post_type( 'clippings',
    array(
      'labels' => array(
        'name' => __( 'Clippings' ),
        'singular_name' => __( 'Clipping' ),
        'add_new_item' => __('Add New Clipping'),
        'edit_item' => __('Edit Clipping'),
        'new_item' => __('New Clipping'),
        'view_item' => __('View Clipping'),
        'search_items' => __('Search Clippings'),
        'not_found' => __('No Clippings found.'),
        'not_found_in_trash' => __('No Clippings found in Trash.'),
      ),
      'taxonomies' => array('category'),
      'supports' => array( 'title', 'editor', 'thumbnail' ),
      'public' => true,
      'has_archive' => true,
      'rewrite' => array('slug' => 'clippings'),
    )
  );

  /* Creating Artiles as a Custom Post Type */
  register_post_type( 'articles',
    array(
      'labels' => array(
        'name' => __( 'Articles' ),
        'singular_name' => __( 'Article' ),
        'add_new_item' => __('Add New Article'),
        'edit_item' => __('Edit Article'),
        'new_item' => __('New Article'),
        'view_item' => __('View Article'),
        'search_items' => __('Search Articles'),
        'not_found' => __('No Articles found.'),
        'not_found_in_trash' => __('No Articles found in Trash.'),
      ),
      'taxonomies' => array('category'),
      'supports' => array( 'title', 'editor', 'thumbnail' ),
      'public' => true,
      'has_archive' => true,
      'rewrite' => array('slug' => 'articles'),
    )
  );

  /* Creating Event as a Custom Post Type */
  register_post_type( 'events',
    array(
      'labels' => array(
        'name' => __( 'Events' ),
        'singular_name' => __( 'Event' ),
        'add_new_item' => __('Add New Event'),
        'edit_item' => __('Edit Event'),
        'new_item' => __('New Event'),
        'view_item' => __('View Event'),
        'search_items' => __('Search Events'),
        'not_found' => __('No Events found.'),
        'not_found_in_trash' => __('No Events found in Trash.'),
      ),
      'taxonomies' => array('category'),
      'supports' => array( 'title' ),
      'public' => true,
      'has_archive' => true,
      'rewrite' => array('slug' => 'events'),
    )
  );

  /* Creating Service as a Custom Post Type */
  register_post_type( 'services',
    array(
      'labels' => array(
        'name' => __( 'Services' ),
        'singular_name' => __( 'Service' ),
        'add_new_item' => __('Add New Service'),
        'edit_item' => __('Edit Service'),
        'new_item' => __('New Service'),
        'view_item' => __('View Service'),
        'search_items' => __('Search Services'),
        'not_found' => __('No Services found.'),
        'not_found_in_trash' => __('No Services found in Trash.'),
      ),
      'taxonomies' => array('category'),
      'supports' => array( 'title', 'editor', 'thumbnail', 'custom-fields', ),
      'public' => true,
      'has_archive' => true,
      'rewrite' => array('slug' => 'services'),
    )
  );

  /* Creating Equipment as a Custom Post Type */
  register_post_type( 'equipments',
    array(
      'labels' => array(
        'name' => __( 'Equipments' ),
        'singular_name' => __( 'Equipment' ),
        'add_new_item' => __('Add New Equipment'),
        'edit_item' => __('Edit Equipment'),
        'new_item' => __('New Equipment'),
        'view_item' => __('View Equipment'),
        'search_items' => __('Search Equipments'),
        'not_found' => __('No Equipments found.'),
        'not_found_in_trash' => __('No Equipments found in Trash.'),
      ),
      'taxonomies' => array('category'),
      'supports' => array( 'title', 'editor', 'thumbnail', 'custom-fields', ),
      'public' => true,
      'has_archive' => true,
      'rewrite' => array('slug' => 'equipments'),
    )
  );

  /* Creating Member as a Custom Post Type */
  register_post_type( 'members',
    array(
      'labels' => array(
        'name' => __( 'Members' ),
        'singular_name' => __( 'Member' ),
        'add_new_item' => __('Add New Member'),
        'edit_item' => __('Edit Member'),
        'new_item' => __('New Member'),
        'view_item' => __('View Member'),
        'search_items' => __('Search Members'),
        'not_found' => __('No Members found.'),
        'not_found_in_trash' => __('No Members found in Trash.'),
      ),
      'taxonomies' => array('category'),
      'supports' => array( 'title', 'editor', 'thumbnail' ),
      'public' => true,
      'has_archive' => true,
      'rewrite' => array('slug' => 'members'),
    )
  );

  /* Creating FAQ as a Custom Post Type */
  register_post_type( 'faqs',
    array(
      'labels' => array(
        'name' => __( 'FAQs' ),
        'singular_name' => __( 'FAQ' ),
        'add_new_item' => __('Add New FAQ'),
        'edit_item' => __('Edit FAQ'),
        'new_item' => __('New FAQ'),
        'view_item' => __('View FAQ'),
        'search_items' => __('Search FAQs'),
        'not_found' => __('No FAQs found.'),
        'not_found_in_trash' => __('No FAQs found in Trash.'),
      ),
      'taxonomies' => array('category'),
      'supports' => array( 'title', 'editor', 'thumbnail' ),
      'public' => true,
      'has_archive' => true,
      'rewrite' => array('slug' => 'faqs'),
    )
  );

}
add_action('init', 'create_custom_post_types');

function change_default_title( $title ){
  $screen = get_current_screen();

  if( 'faqs' == $screen->post_type ) {
    $title = 'Enter question here';

  } elseif( 'members' == $screen->post_type ) {
    $title = 'Enter member name';

  } elseif( 'equipments' == $screen->post_type ) {
    $title = 'Enter equipment name';
  } elseif( 'services' == $screen->post_type ) {
    $title = 'Enter service name';
  } elseif( 'events' == $screen->post_type ) {
    $title = 'Enter event name';
  }

  return $title;
}
add_filter( 'enter_title_here', 'change_default_title' );

function json_api_prepare_post( $post_response, $post, $context ) {

  if(get_post_type($post['ID']) == 'events') {
    $post_response['event']['date'] = get_field( "event_date", $post['ID'] );
    $post_response['event']['register_close_date'] = get_field( "event_register_close_date", $post['ID'] );
    $post_response['event']['location'] = get_field( "event_location", $post['ID'] );
    $post_response['event']['description'] = get_field( "event_description", $post['ID'] );
    $post_response['event']['goals'] = get_field( "event_goals", $post['ID'] );
    $post_response['event']['schedule'] = get_field( "event_schedule", $post['ID'] );
    $post_response['event']['speakers'] = get_field( "event_speakers", $post['ID'] );
    $post_response['event']['registered_users'] = get_field( "registered_users", $post['ID'] );
    $post_response['event']['selected_users'] = get_field( "selected_users", $post['ID'] );
    $post_response['event']['register_form'] = get_field( "register_form", $post['ID'] );
    $post_response['english']['english_goals'] = get_field( "english_event_goals", $post['ID'] );
    $post_response['english']['english_schedule'] = get_field( "english_event_schedule", $post['ID'] );
    $post_response['english']['english_speakers'] = get_field( "english_event_speakers", $post['ID'] );
    $post_response['english']['english_registered_users'] = get_field( "english_registered_users", $post['ID'] );
    $post_response['english']['english_selected_users'] = get_field( "english_selected_users", $post['ID'] );
  }

  if(get_post_type($post['ID']) == 'faqs') {
    $post_response['faq']['section'] = get_field( "section", $post['ID'] );
  }

  if(get_post_type($post['ID']) == 'equipments') {
    $post_response['image'] = get_field( "image", $post['ID'] );
  }

  if(get_post_type($post['ID']) == 'clippings' || get_post_type($post['ID']) == 'articles') {
    $post_response['external_link'] = get_field( "external_link", $post['ID'] );
    $post_response['date_published'] = get_field( "date_published", $post['ID'] );
  }

  if(get_post_type($post['ID']) == 'members') {
    $post_response['member']['photo'] = get_field( "photo", $post['ID'] );
    $post_response['member']['job'] = get_field( "job", $post['ID'] );
    $post_response['member']['english_bio'] = get_field( "english_bio", $post['ID'] );
    $post_response['member']['lattes'] = get_field( "lattes", $post['ID'] );
    $post_response['member']['linkedin'] = get_field( "linkedin", $post['ID'] );
  }

  if(get_post_type($post['ID']) == 'services') {
    $post_response['iframe_url'] = get_field( "iframe_url", $post['ID'] );
  }

  $post_response['english']['english_title'] = get_field( "english-title", $post['ID'] );
  $post_response['english']['english_slug'] = sanitizeStringForUrl(get_field("english-title", $post['ID']));
  $post_response['english']['english_content'] = get_field( "english-content", $post['ID'] );

  return $post_response;
}

function sanitizeStringForUrl($string){
  $string = strtolower($string);
  $string = html_entity_decode($string);
  $string = str_replace(array('ä','ü','ö','ß'),array('ae','ue','oe','ss'),$string);
  $string = preg_replace('#[^\w\säüöß]#',null,$string);
  $string = preg_replace('#[\s]{2,}#',' ',$string);
  $string = str_replace(array(' '),array('-'),$string);
  return $string;
}
add_filter( 'json_prepare_post', 'json_api_prepare_post', 10, 3 );

// Inserting the Analytics Tracker
add_action('wp_footer', 'add_google_analytics');
function add_google_analytics() {  ?>
<script>
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function() {
      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
        m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
    })(window,document,'script','//www.google-analytics.com/analytics.js','ga');
  ga('create', 'UA-51070619-1', 'auto');
  ga('send', 'pageview');
  </script>
<?php } ?>
