import HorizontalTimeline from "./components/horizontal-timeline/HorizontalTimeline";
import LoremIpsumText from "./components/lorem-ipsum";

function App() {
  return (
    <>
      <h1 className="text-center mt-4">Vite + React.js</h1>
      <h1 className="text-center mb-4">
        Horizontal Timeline Example with GSAP and ScrollTrigger
      </h1>
      <hr />
      <h4 className="mb-4 mt-4 p-4">
        GSAP allows you to effortlessly animate anything JS can touch.
        Delivering silky-smooth performance and unmatched support so you can
        focus on the fun stuff
        <br /><br />
        <p>ScrollTrigger enables anyone to create jaw-dropping scroll-based animations with minimal code. Infinitely flexible. Scrub, pin, snap, or just trigger anything scroll-related, even if it has nothing to do with animation. ScrollTriggers can perform an actions on an animation (play, pause, resume, restart, reverse, complete, reset) when entering/leaving the defined area or link it directly to the scrollbar so that it acts like a scrubber</p>
      </h4>
      <h4 className="mb-4 mt-4 p-4">
        <LoremIpsumText />
      </h4>
      <HorizontalTimeline />
      <h4 className="mb-4 mt-4 p-4">
        <LoremIpsumText />
      </h4>
      <h4 className="mb-4 mt-4 p-4">
        <LoremIpsumText />
      </h4>
      <h4 className="mb-4 mt-4 p-4">
        <LoremIpsumText />
      </h4>
      <h3 className="text-center mb-4 mt-4">
        ©{new Date().getFullYear()}{" "}
        <a href="https://aliyev.dev" target="_blank" rel="noopener noreferrer">
          Nijat Aliyev
        </a>
        . Boostrap v5.0 | Vite | React.js | GSAP | SASS{" "}
      </h3>
    </>
  );
}

export default App;
