"use client";
import style from "@/components/Main.module.css";
import Card from "./Card";
import { useScroll, useTransform, motion } from "framer-motion";
import { Images } from "@/data/ImageData";
import { useRef } from "react";
const Horizontal = () => {
  const refContainer = useRef();
  const { scrollYProgress } = useScroll({
    target: refContainer,
    offset: ["start center", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["150%", "-45%"]);
  return (
    <main ref={refContainer} className={style.container}>
      <div className={style.h_scroll}>
        <motion.div style={{ x }} className="flex items-center gap-[10vw]">
          {Images.map((data, i) => {
            return <Card data={data} key={i} />;
          })}
        </motion.div>
      </div>
    </main>
  );
};

export default Horizontal;
