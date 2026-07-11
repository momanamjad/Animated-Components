/**
 * Allowed blocks for animation.
 */
export const allowedBlocks = [
	'core/paragraph',
	'core/image',
	'core/group',
	'core/columns',
	'core/column',
	'core/heading',
	'core/buttons',
	'core/button'
];


/**
 * Default block settings.
 */
export const defaultAttributes = {
	dmwpb__hasAnimation: {
		type: "boolean",
		default: false
	},
	dmwpb__animationDirection: {
		type: "boolean",
		default: false
	},
	dmwpb__scrollDirection: {
		type: "string",
		default: "default"
	},
	dmwpb__animationType: {
		type: "string",
		default: "fade-in"
	},
	dmwpb__animationDelay: {
		type: "number",
		default: 0
	},
	dmwpb__animationDuration: {
		type: "number",
		default: 500
	},
	dmwpb__animationBlur: {
		type: "number",
		default: 0
	}
}