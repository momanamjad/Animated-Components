/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { addFilter } from '@wordpress/hooks';


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';


/**
 * Internal dependencies
 */
import './edit';
import { allowedBlocks, defaultAttributes } from './helpers';


/**
 * Add custom animation attributes to blocks.
 *
 * @param {Object} settings The block settings for the registered block type.
 * @param {String} name 		Block's name.
 * @return {Object}         The modified block settings.
 */
function addAnimationAttributes( settings, name ) {

	// If the block is not allowed, return the settings as-is
	if ( allowedBlocks.indexOf( name ) === -1 ) {
		return settings;
	}

	settings.attributes = {
		...settings.attributes,
		...defaultAttributes
	};

	return settings;
}
addFilter(
	'blocks.registerBlockType',
	'dmwpb-animate-blocks/add-animation-attributes',
	addAnimationAttributes
);