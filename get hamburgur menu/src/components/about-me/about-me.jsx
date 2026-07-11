"use client";
import React, { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import { aboutMeText } from "@/constants/static-values";
import Word from "./word";

const AboutMe = () => {
  const elementRef = useRef(null);
  const { scrollYProgress: scrollYProgressEntrence } = useScroll({
    target: elementRef,
    offset: ["start 1.6", "end 0.7"],
  });
  const scaleEntrence = useTransform(scrollYProgressEntrence, [0, 0.6, 1], [1, 5, 800]);
  const backgroundColorEntrence = useTransform(scrollYProgressEntrence, [0, 0.5, 0.75], ["#fff", "#fff", "#030712"]);
  const colorEntrence = useTransform(scrollYProgressEntrence, [0, 0.5, 0.7], ["#030712", "#030712", "#030712"]);
  const posYEntrence = useTransform(scrollYProgressEntrence, [0, 0.2, 0.6, 0.7], ["-500%", "-500%", "250%", "2500%"]);

  const aboutMeTextRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: aboutMeTextRef,
    offset: ["start 0.5", "start 0.1"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.4], [1.2, 1]);
  const words = aboutMeText.split(" ");
  return (
    <div id="about">
      <div ref={elementRef}>
        <motion.div style={{ backgroundColor: backgroundColorEntrence }} className="relative h-[300vh] ">
          <div className="sticky top-0 origin-center  overflow-hidden">
            <motion.div className="inset-0 flex items-center justify-center h-screen origin-center ">
              <motion.div
                style={{ scale: scaleEntrence, translateX: posYEntrence, color: colorEntrence }}
                className="relative text-white text-5xl lg:text-7xl text-nowrap "
              >
                About Me
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
        <div className="bg-gray-950 overflow-hidden">
          <div ref={aboutMeTextRef} className="container mx-auto py-20 md:py-40 font-SFProDisplay ">
            <motion.p className="flex flex-wrap" style={{ scale, transformOrigin: "left" }}>
              {words.map((word, idx) => {
                const start = idx / words.length;
                const end = start + 1 / words.length;
                return (
                  <Word key={idx} range={[start, end]} progress={scrollYProgress}>
                    {word}
                  </Word>
                );
              })}
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
