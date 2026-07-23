import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
import "./styles.scss";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

const HorizontalTimeline = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    // Horizontal scroll animation
    let scrollTween = gsap.to(scrollContainer, {
      x: () => -(scrollContainer.scrollWidth - window.innerWidth),
      ease: "none",
      scrollTrigger: {
        trigger: scrollContainer,
        invalidateOnRefresh: true,
        pin: true,
        scrub: 1,
        end: () => "+=" + scrollContainer.scrollWidth,
      },
    });

    // Parallax effect for elements with the class "parallax"
    gsap.utils.toArray(".parallax").forEach((parallaxElement) => {
      gsap
        .timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            containerAnimation: scrollTween,
            trigger: parallaxElement,
            start: "left right",
            end: "left left",
            scrub: true,
          },
        })
        .fromTo(parallaxElement, { x: 250 }, { x: -250 });
    });

    // Cleanup on component unmount
    return () => {
      scrollTween.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="history-wrapper-content">
      <section className="scrollContainer" ref={scrollContainerRef}>
        <section className="section start-content">
          <div className="item start-chapter">
            <div className="caption">
              <h2>Our History</h2>
              <p>
                {`Greetings! I'm Nijat Aliyev, a seasoned Full Stack Developer hailing from Baku. With a wealth of experience under my belt, I specialize in website design, development, and customization, alongside mobile and desktop app development.`}
              </p>
            </div>
            <figure className="start-image">
              <img
                className="parallax"
                src="/src/assets/eagle.jpg"
                alt="Our History"
              />
            </figure>
          </div>
        </section>

        <section className="section">
          <div className="chapters c02">
            <div className="caption fadeUp">
              <h2>GSAP</h2>
              <p>
                GSAP – A wildly robust JavaScript animation library built for
                professionals
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="chapters c02">
            <div className="caption fadeUp">
              <h2>Vite</h2>
              <p>
                The Build Tool for the Web.Vite is a blazing fast frontend build
                tool powering the next generation of web applications.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="chapters c02">
            <div className="caption fadeUp">
              <h2>Boostrap</h2>
              <p>
                Powerful, extensible, and feature-packed frontend toolkit. Build
                and customize with Sass, utilize prebuilt grid system and
                components, and bring projects to life with powerful JavaScript
                plugins.
              </p>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="chapters c02">
            <div className="caption fadeUp">
              <h2>SASS</h2>
              <p>
                Sass is a preprocessor scripting language that is interpreted or
                compiled into Cascading Style Sheets. SassScript is the
                scripting language itself.
              </p>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default HorizontalTimeline;
