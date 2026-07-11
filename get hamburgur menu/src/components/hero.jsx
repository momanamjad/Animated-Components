"use client";
import React, { useRef } from "react";
import { useScroll, motion, useTransform, use } from "framer-motion";
import Circle2 from "./svgs/circle2";

const Hero = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const welcomeX = useTransform(scrollYProgress, [0, 0.05], [1, 5]);

  const welcomeScale = useTransform(scrollYProgress, [0, 0.05], [1, 5]);

  const welcome = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  const scale = useTransform(scrollYProgress, [0, 5.05, 0.1], [1, 1.6, 1]);

  const y1m = useTransform(scrollYProgress, [0, 0.42], ["-982px", "0px"]);

  const x1m = useTransform(scrollYProgress, [0, 0.42], ["118px", "0px"]);

  const y2m = useTransform(scrollYProgress, [0, 0.42], ["-300px", "0px"]);

  const x2m = useTransform(scrollYProgress, [0, 0.42], ["100px", "0px"]);

  const y3m = useTransform(scrollYProgress, [0, 0.42], ["-400px", "0px"]);

  const x3m = useTransform(scrollYProgress, [0, 0.42], ["150px", "0px"]);

  const y4m = useTransform(scrollYProgress, [0, 0.42], ["1000px", "0px"]);

  const x4m = useTransform(scrollYProgress, [0, 0.42], ["-1050px", "0px"]);

  const y5m = useTransform(scrollYProgress, [0, 0.58], ["-219px", "0px"]);

  const x5m = useTransform(scrollYProgress, [0, 0.49], ["-753px", "0px"]);

  const y6m = useTransform(scrollYProgress, [0, 0.58], ["-219px", "0px"]);

  const x6m = useTransform(scrollYProgress, [0, 0.49], ["753px", "0px"]);

  const y7m = useTransform(scrollYProgress, [0, 0.42], ["400px", "0px"]);

  const x7m = useTransform(scrollYProgress, [0, 0.42], ["-150px", "0px"]);

  const y8m = useTransform(scrollYProgress, [0, 0.42], ["850px", "0px"]);

  const x8m = useTransform(scrollYProgress, [0, 0.42], ["850px", "0px"]);

  //
  //
  const y1l = useTransform(scrollYProgress, [0, 0.42], ["-982px", "0px"]);

  const x1l = useTransform(scrollYProgress, [0, 0.42], ["-819px", "0px"]);

  const y2l = useTransform(scrollYProgress, [0, 0.42], ["-135px", "0px"]);

  const x2l = useTransform(scrollYProgress, [0, 0.42], ["421px", "0px"]);

  const y3l = useTransform(scrollYProgress, [0, 0.42], ["-982px", "0px"]);

  const x3l = useTransform(scrollYProgress, [0, 0.42], ["118px", "0px"]);

  const y4l = useTransform(scrollYProgress, [0, 0.42], ["-219px", "0px"]);

  const x4l = useTransform(scrollYProgress, [0, 0.42], ["-753px", "0px"]);

  const y5l = useTransform(scrollYProgress, [0, 0.42], ["-467px", "0px"]);

  const x5l = useTransform(scrollYProgress, [0, 0.42], ["629px", "0px"]);

  const y6l = useTransform(scrollYProgress, [0, 0.42], ["-138px", "0px"]);

  const x6l = useTransform(scrollYProgress, [0, 0.42], ["-421px", "0px"]);

  const y7l = useTransform(scrollYProgress, [0, 0.58], ["-219px", "0px"]);

  const x7l = useTransform(scrollYProgress, [0, 0.49], ["-753px", "0px"]);

  const y8l = useTransform(scrollYProgress, [0, 0.58], ["-219px", "0px"]);

  const x8l = useTransform(scrollYProgress, [0, 0.49], ["753px", "0px"]);

  const y9l = useTransform(scrollYProgress, [0, 0.42], ["319px", "0px"]);

  const x9l = useTransform(scrollYProgress, [0, 0.42], ["-753px", "0px"]);

  const opacityLetter = useTransform(scrollYProgress, [0, 0.42], [0, 1]);

  const scaleLetter = useTransform(scrollYProgress, [0, 0.42], [5.6, 1]);
  const background = useTransform(scrollYProgress, [0, 0.1, 0.4, 0.43], ["#fff", "#000", "#000", "#0f03400"]);
  const colorLetter = useTransform(scrollYProgress, [0, 0.4, 0.43], ["#fff", "#fff", "#000"]);

  return (
    <motion.header
      ref={targetRef}
      className=" w-full text-6xl sm:text-8xl xl:text-9xl font-jetBrainsMono font-bold  hero h-[260vh] xl:h-[320vh] overflow-x-hidden relative  items-center flex justify-center bg-center"
      style={{ background }}
    >
      <motion.p
        style={{ opacity: welcome, scale: welcomeScale, scaleX: welcomeX }}
        className="fixed text-6xl xl:text-7xl inset-0 grid place-content-center   xl:top-[0vh] bg-gradient-to-r from-yellow-500 to-pink-500 text-transparent bg-clip-text"
      >
        Welcome
      </motion.p>
      <motion.div
        style={{ scale }}
        className="pb-0 xl:pb-0 flex flex-col relative top-[calc(55vh)]  h-[150vh] xl:h-[250vh] items-center justify-center "
      >
        <div className="flex">
          <motion.h1 style={{ x: x1m, y: y1m, opacity: opacityLetter, scale: scaleLetter, color: colorLetter }}>
            M
          </motion.h1>
          <motion.h1 style={{ x: x2m, y: y2m, opacity: opacityLetter, scale: scaleLetter, color: colorLetter }}>
            o
          </motion.h1>
          <motion.h1 style={{ x: x3m, y: y3m, opacity: opacityLetter, scale: scaleLetter, color: colorLetter }}>
            h
          </motion.h1>
          <motion.h1 style={{ x: x4m, y: y4m, opacity: opacityLetter, scale: scaleLetter, color: colorLetter }}>
            a
          </motion.h1>
          <motion.h1 className="text-[#f7c250]" style={{ x: x5m, y: y5m, opacity: opacityLetter, scale: scaleLetter }}>
            m
          </motion.h1>
          <motion.h1 className="text-[#f7c250]" style={{ x: x6m, y: y6m, opacity: opacityLetter, scale: scaleLetter }}>
            m
          </motion.h1>
          <motion.h1 style={{ x: x7m, y: y7m, opacity: opacityLetter, scale: scaleLetter, color: colorLetter }}>
            a
          </motion.h1>
          <motion.h1 style={{ x: x8m, y: y8m, opacity: opacityLetter, scale: scaleLetter, color: colorLetter }}>
            d
          </motion.h1>
        </div>
        <div className="flex">
          <motion.h1 style={{ x: x1l, y: y1l, opacity: opacityLetter, scale: scaleLetter, color: colorLetter }}>
            K
          </motion.h1>
          <motion.h1 style={{ x: x2l, y: y2l, opacity: opacityLetter, scale: scaleLetter, color: colorLetter }}>
            h
          </motion.h1>
          <motion.h1 style={{ x: x3l, y: y3l, opacity: opacityLetter, scale: scaleLetter, color: colorLetter }}>
            a
          </motion.h1>
          <motion.h1 style={{ x: x4l, y: y4l, opacity: opacityLetter, scale: scaleLetter, color: colorLetter }}>
            k
          </motion.h1>
          <motion.h1 style={{ x: x5l, y: y5l, opacity: opacityLetter, scale: scaleLetter, color: colorLetter }}>
            s
          </motion.h1>
          <motion.h1 style={{ x: x6l, y: y6l, opacity: opacityLetter, scale: scaleLetter, color: colorLetter }}>
            h
          </motion.h1>
          <motion.h1 className="text-[#9c0a53]" style={{ x: x7l, y: y7l, opacity: opacityLetter, scale: scaleLetter }}>
            o
          </motion.h1>
          <motion.h1 className="text-[#9c0a53]" style={{ x: x8l, y: y8l, opacity: opacityLetter, scale: scaleLetter }}>
            o
          </motion.h1>
          <motion.h1 style={{ x: x9l, y: y9l, opacity: opacityLetter, scale: scaleLetter, color: colorLetter }}>
            r
          </motion.h1>
        </div>
        <div className="size-[1200px] xl:size-[1900px] absolute -z-10 top-1/2 -translate-y-1/2">
          <Circle2 progress={scrollYProgress} />
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Hero;
