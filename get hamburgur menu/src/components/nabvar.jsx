"use client";
import React, { useReducer } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavbarIcon from "./svgs/navbar-icon";
import { cn } from "@/helpers/cn";
import ArrowRight from "./svgs/arrow-right";
import Circle from "./svgs/circle";
import Link from "next/link";
import Logo from "./svgs/logo";
const links = [
  { name: "Home", href: "#home", external: false },
  { name: "About", href: "#about", external: false },
  { name: "Work Experience", href: "#work-experience", external: false },
  { name: "tech stack", href: "#tech-stack", external: false },
  { name: "Twitter", href: "https://x.com/mkh_dev", external: true },
  { name: "Linkedin", href: "https://www.linkedin.com/in/mohammadkhakshoor/", external: true },
  { name: "Github", href: "https://github.com/mohammadkhakshoor", external: true },
  { name: "Instagram", href: "https://www.instagram.com/m.khakshoor/", external: true },
];
const variants = {
  closed: {
    position: "fixed",
    right: "50%",
    x: "50%",
    borderRadius: "2rem",
    scale: 1.1,
    top: "8px",
    transition: {
      type: "spring",
      ease: "easeIn",
      borderRadius: {
        type: "tween",
        ease: "easeOut",
      },
    },
  },
  open: {
    scale: 1.24,
    top: "3rem",
    borderRadius: "1.5rem",
    transition: {
      type: "spring",
      ease: "easeIn",
      borderRadius: {
        type: "tween",
        ease: "easeOut",
      },
    },
  },
};
const navVariants = {
  open: {
    borderRadius: "1.30rem",
    paddingBottom: "0.75rem",
    gap: "1rem",
  },
  closed: {
    borderRadius: "1.5rem",
    gap: "0",
  },
};
const ulVariants = {
  open: {
    height: "auto",
    scale: 1.01,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
      staggerDirection: 1, // 1 forwards, -1 backwards
      when: "beforeChildren",
    },
  },
  closed: {
    height: 0,
    scale: 1,
  },
};
const liVariants = {
  open: {
    y: 0,
    rotateY: 0,
    rotateX: 0,
    rotateZ: 0,
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      ease: "easeIn",
    },
  },
  closed: {
    y: -2,
    rotateY: 30,
    rotateX: 30,
    rotateZ: -20,
    // x: -20,
    y: -45,
    opacity: 0,
    transition: {
      duration: 0.1,
    },
  },
};

const Navbar = () => {
  const [isNavbarOpen, toggleNavbar] = useReducer((state) => !state, false);
  return (
    <motion.nav
      variants={variants}
      initial="closed"
      animate={isNavbarOpen ? "open" : "closed"}
      className=" flex-col z-[888888888]
        p-1 top-2 bg-gray-950 flex justify-center items-center bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20"
    >
      <motion.div className={cn("p-1.5 relative bg-gray-950 flex overflow-hidden flex-col")} variants={navVariants}>
        <div
          className={cn(
            "absolute transition-all duration-1000 delay-150 inset-0 translate-y-10 translate-x-32 pointer-events-none",
            isNavbarOpen ? "opacity-100  " : "opacity-0 roate"
          )}
        >
          <Circle className={cn("stroke-gray-800 scale-125")} />
        </div>
        <div className="flex gap-7 sm:gap-16 w-full  items-center justify-between">
          {/* <p className="leading-none bg-gray-700  p-0.5 size-9 grid place-content-center rounded-full text-gray-50">
            MK
          </p> */}
          <div className="size-9 bg-gray-700  grid place-content-center rounded-full text-gray-50">
            <Logo className="size-full" />
          </div>
          <p className="leading-none bg-gradient-to-r from-yellow-500 to-pink-500 text-transparent bg-clip-text py-2  px-1 sm:p-0.5  whitespace-nowrap font-semibold relative top-1 text-lg sm:text-2xl font-whiteList">
            Front-end Dev
          </p>
          <span className={cn("size-9 bg-gray-700  p-0.5", isNavbarOpen ? "rounded-full" : "rounded-full")}>
            <NavbarIcon isNavbarOpen={isNavbarOpen} toggleNavbar={toggleNavbar} />
          </span>
        </div>
        <AnimatePresence>
          <motion.ul variants={ulVariants} className="self-start">
            {links.map((link, idx) =>
              link.external ? (
                <motion.li variants={liVariants} key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    className="leading-none group flex items-center gap-3 my-2 pl-1 text-base md:text-xl text-gray-50 font-SFProDisplay relative"
                  >
                    <span className="bg-gray-700 border-2  border-dashed border-gray-600 p-0.5 size-7 font-inter grid place-content-center rounded-full group-hover:translate-x-2 transition-all duration-200">
                      <ArrowRight stroke="white" isNavbarOpen={isNavbarOpen} />
                    </span>
                    <span className="transition-all block duration-100 title">{link.name}</span>
                  </a>
                </motion.li>
              ) : (
                <motion.li className="" variants={liVariants} key={link.name}>
                  <Link
                    onClick={toggleNavbar}
                    href={link.href}
                    className="leading-none group flex items-center gap-3 my-2 pl-1 text-base md:text-xl text-gray-50 font-SFProDisplay relative"
                  >
                    <span className="bg-gray-700 border-2  border-dashed border-gray-600 p-0.5 size-7 font-inter grid place-content-center rounded-full group-hover:translate-x-2 transition-all duration-200">
                      <ArrowRight stroke="white" isNavbarOpen={isNavbarOpen} />
                    </span>
                    <span className=" transition-all block duration-100 title">{link.name}</span>
                  </Link>
                </motion.li>
              )
            )}
          </motion.ul>
        </AnimatePresence>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
