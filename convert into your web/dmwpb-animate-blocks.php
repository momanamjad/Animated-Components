<?php
/**
 * Plugin Name:       [DMWPB] Animate Blocks
 * Plugin URL:				https://damianmuti.com
 * Description:       This plugin extends <strong>[group, columns, column, paragraph, image, heading, buttons, button]</strong> Gutenberg core blocks to enable reveal animations.
 * Version:           1.0.2
 * Requires at least: 6.7
 * Requires PHP:      7.4
 * Author:            Damian Muti
 * Author URI:        https://damianmuti.com/
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       dmwpb-animate-blocks
 *
 * @package CreateBlock
 */

namespace dmwpb_animate_blocks;

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( !defined( 'DMWPB_PLUGIN_DIR' ) ) {
	define( 'DMWPB_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
}

require_once( DMWPB_PLUGIN_DIR . 'src/dmwpb-animate-blocks/inc/render.php' );


/**
 * Enqueue block editor files
 */
function enqueue_editor_modifications() {
	$assets_file = include( plugin_dir_path( __FILE__ ) . 'build/dmwpb-animate-blocks/index.asset.php');

	if( is_admin() ) {
		wp_enqueue_script( 
			'dmwpb-animate-blocks-editor-script', 
			plugin_dir_url( __FILE__ ) . 'build/dmwpb-animate-blocks/index.js', 
			$assets_file['dependencies'], 
			$assets_file['version'], 
			true 
		);
	
		wp_enqueue_style( 
			'dmwpb-animate-blocks-editor-styles', 
			plugin_dir_url( __FILE__ ) . 'build/dmwpb-animate-blocks/index.css', 
			[], 
			null
		);
	} else {
		wp_enqueue_script( 
			'dmwpb-animate-blocks-view-script', 
			plugin_dir_url( __FILE__ ) . 'build/dmwpb-animate-blocks/view.js', 
			array(),
			$assets_file['version'], 
			true 
		);

		wp_enqueue_style( 
			'dmwpb-animate-blocks-view-styles', 
			plugin_dir_url( __FILE__ ) . 'build/dmwpb-animate-blocks/style-index.css', 
			[], 
			null
		);
	}
}
add_action( 'enqueue_block_assets', __NAMESPACE__ . '\enqueue_editor_modifications' );