import { motion, useTransform } from "framer-motion";

const Word = ({ children, range, progress }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return children === "Front-end" ? (
    <>
      <span className="relative  top-1.5 leading-10 font-whiteList text-white  pr-2  lg:mt-1 text-3xl md:text-5xl">
        <span className="absolute opacity-20">{children} Developer</span>
        <motion.span
          className=" bg-gradient-to-r from-yellow-500 py-2 to-pink-500 text-transparent bg-clip-text"
          style={{ opacity }}
        >
          {children} Developer
        </motion.span>
      </span>
    </>
  ) : (
    <>
      <span className="relative  text-white mr-2 mt-0.5 lg:mt-1.5 text-3xl md:text-5xl">
        <span className="absolute opacity-20">{children}</span>
        <motion.span style={{ opacity }}>{children}</motion.span>
      </span>
    </>
  );
};
export default Word;
