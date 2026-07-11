<?php

function render_animate_block( $block_content, $block ){
	$attrs 					= $block['attrs'];
	$has_animation 	= $attrs['dmwpb__hasAnimation'] ?? false;

	if($has_animation) {
		$animation_type 			= $attrs['dmwpb__animationType'] ?? 'fade-in';
		$animation_delay 			= $attrs['dmwpb__animationDelay'] ?? 0;
		$animation_duration 	= $attrs['dmwpb__animationDuration'] ?? 500;
		$animation_blur 			= $attrs['dmwpb__animationBlur'] ?? 0;
		$animation_direction 	= isset( $attrs['dmwpb__animationDirection'] ) ? 'reverse' : 'normal';
		$animation_fill 			= isset( $attrs['dmwpb__animationDirection'] ) ? 'backwards' : 'forwards';
		$scroll_direction			= $attrs['dmwpb__scrollDirection'] ?? 'default';

		$tag = new WP_HTML_Tag_Processor( $block_content );
		
		if( $tag->next_tag() ) {
			$current_style = $tag->get_attribute( 'style' );
			$tag->add_class( 'dmwpb__block--animation--' . $animation_type );
			$tag->add_class( 'dmwpb__block--animation' );
			$tag->set_attribute( 'data-scroll-direction', $scroll_direction );
			$tag->set_attribute( 'data-animation-direction', $animation_fill );
			$tag->set_attribute(
				'style', 
				"animation-delay: {$animation_delay}ms; " .
				"animation-duration: {$animation_duration}ms; " . 
				"animation-name: {$animation_type}; " . 
				"animation-direction: {$animation_direction}; " . 
				"animation-fill-mode: {$animation_fill}; " .
				"--blur: {$animation_blur}px;" . 
				$current_style
			);
		}
		
		return $tag->get_updated_html();
	}

	return $block_content;
}
add_filter( 'render_block', __NAMESPACE__ . '\render_animate_block', 10, 2 );