<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, and ABSPATH. You can find more information by visiting
 * {@link http://codex.wordpress.org/Editing_wp-config.php Editing wp-config.php}
 * Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'wordpress');

/** MySQL database username */
define('DB_USER', 'wordpress');

/** MySQL database password */
define('DB_PASSWORD', 'wordpress');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         ':aD~:|&(z7xIPO@^|R-1cK_9yD<fyAk@I>8?N4_vB/9(J0{Pp+m[%Y4tuk(/KI&Q');
define('SECURE_AUTH_KEY',  'n+JzALc3pE4y4aN;BKQu2Y|g.@7m$!a-At4/A*s#0g58m&?#k7mc_S+Fd{e(Y}L7');
define('LOGGED_IN_KEY',    'd@m9r=wK3)+gG9c~=|tDCq$x8-O1Flo_F2Hn,@DN+1I(bB$Df-.Qc--k+<t8aul:');
define('NONCE_KEY',        'Z+ou2^w3wWj;7kXy*-GGv[bAkNU}R!DmO^xZs-S6B(lhg9$jBigE!-gcD*p3mEv$');
define('AUTH_SALT',        'mm%SiJBu4f(t+U7Fsd2m/C M{W<`D:Nw&*_K&p1Z^+DliQn7 FCFyU1| Ju_ `Zt');
define('SECURE_AUTH_SALT', '~]+gAMy)5tA;ec/_?;w|PQTv4|6i }~=o56|7cc@_SJ<X}yMu,z..6*GvO|`W :F');
define('LOGGED_IN_SALT',   '-9{rsS2R9(8L*}uzh.2h *.fm-w][kJ@.goSu`=:SM_y6|X):~tH[?in19?D6x{l');
define('NONCE_SALT',       'g&[11_yUIAaKrDa_+]S,B~:n?|Rsyq)+0L>FR=QpMm_b>):Q&Z@-bB8%3FD/H`L&');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
