"use client";
import { useScroll, motion, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import React, { useRef } from "react";
import { TechItems } from "./tech-stack-item";

// eslint-disable-next-line react/display-name
const Component = React.forwardRef((props, ref) => {
  return <Image ref={ref} {...props} alt="tech-stack" />;
});

const NextImage = motion(Component);

const titleVariants = {
  hidden: { opacity: 0, scale: 0.6, x: 600 },
  visible: { opacity: 1, scale: 1, x: 0 },
};
//
const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 1, x: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

const TeckStack = () => {
  const elementRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: elementRef,
    offset: ["start end", "end end"],
  });
  const translateY = useTransform(scrollYProgress, [0, 0.65], ["-800px", "0px"]);
  const scale = useTransform(scrollYProgress, [0, 0.95], ["2", "1"]);

  const [mobileHref, mobileHrefInView] = useInView({
    triggerOnce: false,
    threshold: 0.05,
  });
  const [firstH1ref, firstInView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });
  const [secondH1ref, secondInView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });
  return (
    <>
      <div id="tech-stack" ref={elementRef} className="bg-blue-500 min-h-screen py-20 relative overflow-hidden">
        <NextImage
          style={{ y: translateY, scale }}
          src={"/bg-channels.avif"}
          fill
          className="absolute inset-0 z-10 h-full w-full object-cover"
          alt="myimg"
        />

        <motion.div className="absolute inset-0 z-20 h-full w-full bg-gray-800 mix-blend-multiply"></motion.div>
        <div className="flex items-center min-h-screen justify-center">
          <div className="relative gap-14 lg:gap-10 z-30 container mx-auto text-white h-full grid grid-cols-1 lg:grid-cols-2 ">
            <div className="place-self-center font-black leading-[0.85] font-jetBrainsMono text-8xl lg:text-[200px]">
              <motion.h1
                ref={mobileHref}
                animate={mobileHrefInView ? { y: 0, scale: 1, opacity: 1 } : { y: 100, scale: 0.7, opacity: 0 }}
                className="lg:hidden"
              >
                Tech
              </motion.h1>
              <motion.h1
                ref={mobileHref}
                animate={mobileHrefInView ? { y: 0, scale: 1, opacity: 1 } : { y: 100, scale: 0.7, opacity: 0 }}
                className="lg:hidden"
              >
                Stack
              </motion.h1>
              <motion.h1
                className="hidden lg:block"
                ref={firstH1ref}
                initial="hidden"
                animate={firstInView ? "visible" : "hidden"}
                variants={titleVariants}
                transition={{ duration: 0.5, type: "spring" }}
              >
                Tech
              </motion.h1>
              <motion.h1
                className="hidden lg:block"
                ref={secondH1ref}
                initial="hidden"
                animate={secondInView ? "visible" : "hidden"}
                variants={titleVariants}
                transition={{ duration: 0.5, type: "spring", delay: 0.2 }}
              >
                Stack
              </motion.h1>
            </div>
            <div className="place-self-center">
              <TechItems />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeckStack;
