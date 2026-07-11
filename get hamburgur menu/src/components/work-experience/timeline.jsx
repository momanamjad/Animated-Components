import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const varients = {
  invisiable: {
    opacity: 0,
    scale: 1,
  },
  visible: {
    opacity: 1,
    scale: 1,
  },
};
const textContainerVarient = {
  invisiable: {},
  visible: {
    transition: { staggerChildren: 0.05 },
  },
};
const titleItemVariants = {
  invisiable: {
    opacity: 0,
    scale: 1,
    translateX: 10,
  },
  visible: {
    opacity: 1,
    translateX: 0,
    scale: 1,
  },
};
const companyItemVariants = {
  invisiable: {
    opacity: 0,
    scale: 1,
    translateY: 10,
  },
  visible: {
    opacity: 1,
    translateY: 0,
    scale: 1,
  },
};
const yearItemVariants = {
  invisiable: {
    opacity: 0,
    scale: 1,
    translateY: 50,
  },
  visible: {
    opacity: 1,
    translateY: 0,
    scale: 1,
  },
};
function Timeline({ year, title, company, description, lastItem }) {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  return (
    <motion.div
      ref={ref}
      variants={varients}
      initial="invisiable"
      animate={inView ? "visible" : "invisiable"}
      transition={{ duration: 0.5 }}
      className="relative flex"
    >
      {/* Year and Dot */}
      <div className="flex-none w-14 relative -mb-12">
        <motion.div variants={textContainerVarient}>
          {year.split("").map((item, idx) => {
            return (
              <motion.span
                key={idx}
                variants={yearItemVariants}
                transition={{ duration: 0.5 }}
                className="text-base font-medium inline-block text-gray-500"
              >
                {item}
              </motion.span>
            );
          })}
        </motion.div>
        <div className="absolute left-10 top-0 h-full">
          <svg width="24" height="100%" className="absolute left-0 top-0">
            <motion.circle transition={{ delay: 0.5, duration: 1 }} cx="12" cy="12" r="7" className="fill-[#bec99b]" />
            <motion.line
              animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              x1="12"
              y1="24"
              x2="12"
              y2={lastItem ? "82%" : "100%"}
              className="stroke-[#9ba185]"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 ml-4 ">
        {/* for desktop */}
        <div className="hidden md:block">
          <motion.h3 variants={textContainerVarient} className="text-4xl md:text-6xl font-semibold  text-gray-900">
            {title
              .split("")
              .join(" ")
              .split("")
              .map((item, idx) => {
                if (item === "\n") {
                  return <span key={idx}> </span>;
                }
                return (
                  <motion.span
                    key={idx}
                    variants={titleItemVariants}
                    transition={{ duration: 0.5 }}
                    className="relative inline-block"
                  >
                    {item}
                  </motion.span>
                );
              })}
          </motion.h3>
        </div>
        {/* for mobile */}
        <div className="md:hidden">
          <motion.h3 variants={textContainerVarient} className="text-4xl md:text-6xl font-semibold  text-gray-900">
            {title
              .split("")
              .join(" ")
              .split("")
              .map((item, idx) => {
                if (item === "\n") {
                  return <br key={idx} />;
                }
                return (
                  <motion.span
                    key={idx}
                    variants={titleItemVariants}
                    transition={{ duration: 0.5 }}
                    className="relative inline-block"
                  >
                    {item}
                  </motion.span>
                );
              })}
          </motion.h3>
        </div>

        <motion.h3 variants={textContainerVarient} className="mb-4 text-lg md:text-xl  tracking-wide text-gray-600">
          {company.split("").map((item, idx) => {
            return (
              <motion.span
                key={idx}
                variants={companyItemVariants}
                transition={{ duration: 0.5 }}
                className="relative inline-block"
              >
                {item}
              </motion.span>
            );
          })}
        </motion.h3>

        <motion.p
          animate={inView ? { scale: 1, opacity: 1, x: 0 } : { scale: 1, opacity: 0, x: 60 }}
          transition={{ duration: 0.8 }}
          className="text-lg text-gray-700 "
        >
          {description}
        </motion.p>
      </div>
    </motion.div>
  );
}
export default Timeline;
