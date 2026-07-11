"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { techStack } from "@/constants/static-values";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
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
    },
  },
};

export const TechItems = () => {
  const [techItemRef, techItemInView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <motion.div
      ref={techItemRef}
      variants={containerVariants}
      initial="hidden"
      animate={techItemInView ? "visible" : "hidden"}
      className="flex gap-3 flex-wrap"
    >
      {techStack.map((tech, idx) => (
        <motion.p
          variants={itemVariants}
          className={`px-5 py-1 border-2 text-xl lg:text-2xl transition-all duration-300 border-white rounded-full  ${tech.class}`}
          key={idx}
        >
          {tech.name}
        </motion.p>
      ))}
    </motion.div>
  );
};
