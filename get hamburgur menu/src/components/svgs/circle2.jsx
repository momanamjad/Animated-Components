"use client";
import { motion, useSpring, useTransform } from "framer-motion";
import React from "react";

const Circle2 = ({ progress, ...props }) => {
  const rotateX = useTransform(progress, [0.1, 0.6], ["0deg", "180deg"]);
  const rotateY = useTransform(progress, [0.1, 0.6], ["0deg", "180deg"]);

  const opacity = useTransform(progress, [0, 0.4, 0.5], [1, 1, 0.1]);
  const stroke = useTransform(progress, [0, 0.45, 0.56], ["#ffff00", "#ff007f", "#000"]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="size-full">
      <motion.g style={{ rotateX, rotateY, opacity, stroke }} {...props} fill="none">
        <circle cx="100" cy="100" r="95" />
        <circle cx="100" cy="100" r="90" />
        <circle cx="100" cy="100" r="85" />
        <circle cx="100" cy="100" r="80" />
        <circle cx="100" cy="100" r="75" />
        <circle cx="100" cy="100" r="70" />
        <circle cx="100" cy="100" r="65" />
        <circle cx="100" cy="100" r="60" />
        <circle cx="100" cy="100" r="55" />
        <circle cx="100" cy="100" r="50" />
        <circle cx="100" cy="100" r="45" />
        <circle cx="100" cy="100" r="40" />
        <circle cx="100" cy="100" r="35" />
        <circle cx="100" cy="100" r="30" />
        <circle cx="100" cy="100" r="25" />
        <circle cx="100" cy="100" r="20" />
        <circle cx="100" cy="100" r="15" />
        <circle cx="100" cy="100" r="10" />
        <circle cx="100" cy="100" r="5" />
      </motion.g>
    </svg>
  );
};

export default Circle2;
