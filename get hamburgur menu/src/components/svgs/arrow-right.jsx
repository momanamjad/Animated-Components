import { motion } from "framer-motion";
import React from "react";

const ArrowRight = ({ isNavbarOpen, ...props }) => {
  return (
    <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 50" className="size-full block">
      <motion.path
        initial={{ strokeDasharray: "90" }}
        animate={{ strokeDashoffset: isNavbarOpen ? "0px" : "-90px" }}
        transition={{ delay: 1 }}
        {...props}
        d="M10 25 H70 M70 25 L55 10 M70 25 L55 40"
        fill="none"
        strokeWidth="5" 
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </motion.svg>
  );
};

export default ArrowRight;
