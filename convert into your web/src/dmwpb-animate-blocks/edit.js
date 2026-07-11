import { __ } from '@wordpress/i18n';
import { addFilter } from '@wordpress/hooks';
import { createHigherOrderComponent } from '@wordpress/compose';
import { __experimentalNumberControl as NumberControl } from '@wordpress/components';
import { 
	InspectorControls, 
	BlockControls
} from "@wordpress/block-editor";
import { 
	ToggleControl, 
	PanelBody, 
	PanelRow, 
	SelectControl, 
	ToolbarGroup, 
	ToolbarButton,
	Tooltip,
	Popover
} from "@wordpress/components";
import { ReactComponent as PluginIcon } from './assets/icon.svg';
import { Icon, help } from '@wordpress/icons';


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';


/**
 * Internal dependencies.
 */
import { allowedBlocks, defaultAttributes } from './helpers';


/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
let multiplier = 1;
const addAnimationInspectorControls = createHigherOrderComponent( ( BlockEdit ) => {	
	return ( props ) => {

		// If the block is not allowed or has a parent, return the block as-is
		if ( allowedBlocks.indexOf( props.name ) === -1 ) {
			return <BlockEdit { ...props } />;
		}

		const setAnimationMultiplier = ( value)  => {
			multiplier = value;
		}

		const setHasAnimation = ( value ) => {
			props.setAttributes({
				dmwpb__hasAnimation: Boolean( value )
			});

			// Reset multiplier
			setAnimationMultiplier(1);

			// Reset all settings
			if( !value ) {
				resetValues();
			}
		};
	
		const setAnimationType = ( value ) => {
			props.setAttributes({
				dmwpb__animationType: String( value )
			});

			// Reset multiplier
			setAnimationMultiplier(1);
		};

		const setAnimationDirection = ( value ) => {
			props.setAttributes({
				dmwpb__animationDirection: Boolean( value )
			});

			setAnimationMultiplier( multiplier + 1 );
		};
	
		const setAnimationDelay = ( value ) => {
			props.setAttributes({
				dmwpb__animationDelay: Number( value )
			});

			setAnimationMultiplier( multiplier + 1 );
		};
	
		const setAnimationDuration = ( value ) => {
			props.setAttributes({
				dmwpb__animationDuration: Number( value )
			});

			setAnimationMultiplier( multiplier + 1 );
		};

		const setAnimationBlur = ( value ) => {
			props.setAttributes({
				dmwpb__animationBlur: Number( value )
			});

			setAnimationMultiplier( multiplier + 1 );
		};

		const setScrollDirection = ( value ) => {
			props.setAttributes({
				dmwpb__scrollDirection: String( value )
			});
		};

		const resetValues = () => {
			props.setAttributes({
				dmwpb__animationType: defaultAttributes.dmwpb__animationType.default,
				dmwpb__animationDirection: defaultAttributes.dmwpb__animationDirection.default,
				dmwpb__animationDelay: defaultAttributes.dmwpb__animationDelay.default,
				dmwpb__animationDuration: defaultAttributes.dmwpb__animationDuration.default,
				dmwpb__animationBlur: defaultAttributes.dmwpb__animationBlur.default,
				dmwpb__scrollDirection: defaultAttributes.dmwpb__scrollDirection.default,
			});
		}

		const setFieldHelp = ( text ) => {
			return(
				<Tooltip
					placement="top"
					text={ text }
					className="dmwpb__tooltip"
				>
					<Icon icon={ help } size={ 18 } />
				</Tooltip>
			)
		}

		return (
			<>
				<BlockEdit { ...props } />

				{/* { Settings for the sidebar } */}
				<InspectorControls>
					<PanelBody 
						title="Animation Settings"
						icon={ PluginIcon } 
						initialOpen={ props.attributes.dmwpb__hasAnimation ? true : false }
						className="dmwpb__panel"
					>
						<PanelRow className="animations__row--set">
							<ToggleControl
								__nextHasNoMarginBottom
								label="Enable animation on this block?"
								help="Set to true to select the animation properties."
								checked={ props.attributes.dmwpb__hasAnimation }
								onChange={ setHasAnimation }
							/>
						</PanelRow>

						{props.attributes.dmwpb__hasAnimation && (
							<PanelRow className="animations__row--set margin--large">
								<ToggleControl
									__nextHasNoMarginBottom
									label="Reverse animation?"
									help="Set to true to play the animation in reverse."
									checked={ props.attributes.dmwpb__animationDirection }
									onChange={ setAnimationDirection }
								/>
							</PanelRow>
						)}

						{props.attributes.dmwpb__hasAnimation && (
							<PanelRow className="animations__row margin--large">
								<SelectControl
									__nextHasNoMarginBottom
									__next40pxDefaultSize
									label="Animation type"
									labelPosition="left"
									value={ props.attributes.dmwpb__animationType }
									options={[
										{ label: "Default (Fade-in)", value: "fade-in" },
										{ label: "Fade in top", value: "fade-in-top" },
										{ label: "Fade in right", value: "fade-in-right" },
										{ label: "Fade in bottom", value: "fade-in-bottom" },
										{ label: "Fade in left", value: "fade-in-left" },
										{ label: "Slide in top", value: "slide-in-top" },
										{ label: "Slide in right", value: "slide-in-right" },
										{ label: "Slide in bottom", value: "slide-in-bottom" },
										{ label: "Slide in left", value: "slide-in-left" },
										{ label: "Scale up", value: "scale-up" },
										{ label: "Scale down", value: "scale-down" },
									]}
									onChange={ setAnimationType }
								/>	
							</PanelRow>
						)}

						{props.attributes.dmwpb__hasAnimation && (
							<PanelRow className="animations__row">
								<SelectControl
									__nextHasNoMarginBottom
									__next40pxDefaultSize
									label={<>Scroll direction {setFieldHelp(<div>If set to <strong>Default</strong>, the animation will occur when the block is inside the viewport while scrolling down.<br />If set to <strong>Both ways</strong>, the animation will play forwards when the block gets inside the block while scrolling down and backwards when the block is inside the viewport while scrolling up.</div>)}</>}
									labelPosition="left"
									value={ props.attributes.dmwpb__scrollDirection }
									options={[
										{ label: "Default", value: "default" },
										{ label: "Both ways", value: "both" },
									]}
									onChange={ setScrollDirection }
								/>	
							</PanelRow>
						)}

						{props.attributes.dmwpb__hasAnimation && (
							<PanelRow className="animations__row">
								<NumberControl
									__next40pxDefaultSize
									label="Delay"
									labelPosition="side"
									step="100"
									min="0"
									max="5000"
									value={ props.attributes.dmwpb__animationDelay }
									onChange={ setAnimationDelay }
								/>

								<Tooltip
									placement="top"
									text={<div>Value expressed in <strong>miliseconds</strong></div>}
									className="dmwpb__tooltip"
								>
									<span className='row__unit'>ms</span>
								</Tooltip>
							</PanelRow>
						)}

						{props.attributes.dmwpb__hasAnimation && (
							<PanelRow className="animations__row">
								<NumberControl
									__next40pxDefaultSize
									label="Duration"
									labelPosition="side"
									step="100"
									min="0"
									max="5000"
									value={ props.attributes.dmwpb__animationDuration }
									onChange={ setAnimationDuration }
								/>
								
								<Tooltip
									placement="top"
									text={<div>Value expressed in <strong>miliseconds</strong></div>}
									className="dmwpb__tooltip"
								>
									<span className='row__unit'>ms</span>
								</Tooltip>
							</PanelRow>
						)}

						{props.attributes.dmwpb__hasAnimation && (
							<PanelRow className="animations__row">
								<NumberControl
									__next40pxDefaultSize
									label="Blur"
									labelPosition="side"
									step="5"
									min="0"
									max="50"
									value={ props.attributes.dmwpb__animationBlur }
									onChange={ setAnimationBlur }
								/>

								<Tooltip
									placement="top"
									text={<div>Value expressed in <strong>pixels</strong></div>}
									className="dmwpb__tooltip"
								>
									<span className='row__unit'>px</span>
								</Tooltip>
							</PanelRow>
						)}
					</PanelBody>
				</InspectorControls>
				
				{/* { Settings for the toolbar } */}
				<BlockControls>
					<ToolbarGroup>
						{props.attributes.dmwpb__hasAnimation && (
							<ToolbarButton
								icon={ PluginIcon }
								label="This element has an animation"
								className="dmwpb__toolbar-icon dmwpb__animation-icon"
								disabled
							/>
						)}
					</ToolbarGroup>
				</BlockControls>
			</>
		)
	}
});
addFilter(
	'editor.BlockEdit',
	'dmwpb-animate-blocks/add-animation-inspector-controls',
	addAnimationInspectorControls
);


/**
 * Add data attribute on the admin side to show an indicator if the block is hidden.
 */
const addDataAttribute = createHigherOrderComponent( ( BlockListBlock ) => {
	return ( props ) => {
		
		// If the block does not have an animation enabled, return the block as-is
		if ( !props.attributes.dmwpb__hasAnimation ) {
			return <BlockListBlock { ...props } />;
		}

		var stringRepeat = function(string, val) {
			var newString = [];
				for(var i = 0; i < val; i++) {
					newString.push(string);
			}
			return newString.join(', ');
		}

		let animationMultiplier = stringRepeat(`${props.attributes.dmwpb__animationType}`, multiplier);
		let wrapperProps = {};
		
		if(props.isSelected === true) {
			wrapperProps = {
				...props.wrapperProps,
				'className': 'dmwpb__run-animation',
				'style': {
					'animation-name': `${props.attributes.dmwpb__animationType}, ${animationMultiplier}`,
					'animation-delay': `${props.attributes.dmwpb__animationDelay}ms`,
					'animation-duration': `${props.attributes.dmwpb__animationDuration}ms`,
					...props.attributes.dmwpb__animationBlur !== 0 ? { '--blur': `${props.attributes.dmwpb__animationBlur}px` } : {},
					...props.attributes.dmwpb__animationDirection ? {'animation-direction': 'reverse'} : {},
					...props.attributes.dmwpb__animationDirection ? {'animation-fill-mode': 'backwards'} : {},
				}
			};
		}

		return <BlockListBlock { ...props } wrapperProps={ wrapperProps } />;
	};
}, 'addDataAttribute' );
addFilter( 
	'editor.BlockListBlock', 
	'dmwpb-animate-blocks/add-data-attribute', 
	addDataAttribute 
);