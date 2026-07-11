"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";
import Timeline from "./timeline";
import { experienceTimeLine } from "@/constants/static-values";

const WorkExperience = () => {
  const elementRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: elementRef,
    offset: ["start 1.1", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.6, 1], [1, 5, 500]);
  const color = useTransform(scrollYProgress, [0, 0.5, 0.7], ["#fff", "#fff", "#fefae0"]);
  const posY = useTransform(scrollYProgress, [0, 0.2, 0.6, 0.7], ["400%", "400%", "-250%", "-200%"]);
  return (
    <div id="work-experience">
      <div ref={elementRef} className="">
        <div className="relative h-[300vh] bg-gray-950">
          <div className="sticky top-0 origin-center  bg-gray-950 overflow-hidden">
            <motion.div className="inset-0 flex items-center justify-center h-screen origin-center ">
              <motion.div
                style={{ scale, translateX: posY, color }}
                className="relative text-white text-5xl lg:text-7xl text-nowrap "
              >
                Work Experience
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className=" relative overflow-hidden -translate-y-[50vh] mb-[-50vh]  bg-gradient-to-b from-[#fefae0] to-[#e9edc9] p-8 pb-32">
        <div className="max-w-4xl mx-auto space-y-12">
          {experienceTimeLine.map(({ id, ...experience }, index, arr) => (
            <Timeline key={id} {...experience} lastItem={index === arr.length - 1} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
