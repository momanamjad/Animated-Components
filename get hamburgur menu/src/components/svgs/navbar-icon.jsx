import { motion } from "framer-motion";
import React from "react";
const IconTransition = {
  duration: 0.5,
};

const NavbarIcon = ({ isNavbarOpen, toggleNavbar }) => {
  return (
    <svg viewBox="15 15 70 70" className="size-full" onClick={toggleNavbar}>
      <motion.path
        initial={{ strokeDasharray: "40 172", fill: "none", strokeLinecap: "round", strokeWidth: 3.5 }}
        animate={{ strokeDasharray: "40 172", strokeDashoffset: isNavbarOpen ? "-132px" : "0px" }}
        transition={IconTransition}
        className="stroke-gray-50"
        d="m 30,33 h 40 c 13.100415,0 14.380204,31.80258 6.899646,33.421777 -24.612039,5.327373 9.016154,-52.337577 -12.75751,-30.563913 l -28.284272,28.284272"
      />
      <motion.path
        initial={{ strokeDasharray: "40 111", fill: "none", strokeLinecap: "round", strokeWidth: 3.5 }}
        animate={{ strokeDasharray: "40 111", strokeDashoffset: isNavbarOpen ? "-71px" : "0px" }}
        transition={IconTransition}
        className="stroke-gray-50"
        d="m 70,50 c 0,0 -32.213436,0 -40,0 -7.786564,0 -6.428571,-4.640244 -6.428571,-8.571429 0,-5.895471 6.073743,-11.783399 12.286435,-5.570707 6.212692,6.212692 28.284272,28.284272 28.284272,28.284272"
      />
      <motion.path
        initial={{ strokeDasharray: "40 172", fill: "none", strokeLinecap: "round", strokeWidth: 3.5 }}
        animate={{ strokeDasharray: "40 172", strokeDashoffset: isNavbarOpen ? "-132px" : "0px" }}
        transition={IconTransition}
        className="stroke-gray-50"
        d="m 69.575405,67.073826 h -40 c -13.100415,0 -14.380204,-31.80258 -6.899646,-33.421777 24.612039,-5.327373 -9.016154,52.337577 12.75751,30.563913 l 28.284272,-28.284272"
      />
    </svg>
  );
};

export default NavbarIcon;
