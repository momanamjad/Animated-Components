/**
 * Use this file for JavaScript code that you want to run in the front-end
 * on posts/pages that contain this block.
 *
 * When this file is defined as the value of the `viewScript` property
 * in `block.json` it will be enqueued on the front end of the site.
 *
 * Example:
 *
 * ```js
 * {
 *   "viewScript": "file:./view.js"
 * }
 * ```
 *
 * If you're not making any changes to this file because your project doesn't need any
 * JavaScript running in the front-end, then you should delete this file and remove
 * the `viewScript` property from `block.json`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-metadata/#view-script
 */

const observerCallback = (entries, observer) => {
  entries.forEach(entry => {
    let el = entry.target;
    let ob = observer;
    let blockAnimation = el.style.animationName;
    let blockScrollDirection = el.getAttribute( 'data-scroll-direction' );
    let blockAnimationDirection = el.getAttribute( 'data-animation-direction' );
    
    if (entry.isIntersecting) {
      el.classList.add( 'dmwpb__do--animation' );
      
      if( blockScrollDirection == 'both') {

        if(dmwpb_direction === 'dowm') {
          entry.target.classList.remove(`do--${blockAnimationDirection}`);
        }

        if(dmwpb_direction === 'up' && entry.intersectionRatio >= .7) {
          if(!entry.target.classList.contains(`do--${blockAnimationDirection}`)) {
            blockAnimationReflow(el, blockAnimation);
            entry.target.classList.add(`do--${blockAnimationDirection}`);
          }
          
        }
      }
      
    } else {
      if( blockScrollDirection == 'both' ) {
        if(dmwpb_direction === 'up') {
          entry.target.classList.remove(`do--${blockAnimationDirection}`);
          entry.target.classList.remove( 'dmwpb__do--animation' );
  
          blockAnimationReflow(el, blockAnimation);
        }
      }
      
    }
  });
};

/**
 * Force element reflow after updating animation properties to reset the animation. 
 * 
 * @param {element} el 
 * @param {animationName} name 
 */
const blockAnimationReflow = (el, name) => {
  el.style.animationName = "none";
  el.offsetHeight;
  el.style.animationName = name;
}

const observer = new IntersectionObserver(observerCallback , {
  root: null, // Root element, null means the browser viewport
  rootMargin: '0px',
  trackVisibility: true,
  delay: 100,
  threshold: [.3, .7] // Trigger the callback when 100% of the target is visible
});

const elementsToReveal = document.querySelectorAll( '[class*="dmwpb__block--animation"]' );
elementsToReveal.forEach( ( element ) => observer.observe( element ) );


/**
 * Detect the direction in where the window scrolling is happening and update a global variable
 */
let dmwpb_scrollPos = 0;
let dmwpb_direction;
window.addEventListener('scroll', function(){
  // detects new state and compares it with the new one
  if ((document.body.getBoundingClientRect()).top > dmwpb_scrollPos)
    dmwpb_direction = 'up';
  else
    dmwpb_direction = 'down';

  // saves the new position for iteration.
  dmwpb_scrollPos = (document.body.getBoundingClientRect()).top;
});


