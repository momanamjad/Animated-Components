"use client";
import { useScroll, motion, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

export default function InitialImageWrapper() {
  const containerRef = useRef(null);
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 15]);
  const display = useTransform(scrollYProgress, (pos) => {
    return pos === 1 ? "none" : "block";
  });

  return (
    <div ref={containerRef} className="wrapper fixed w-full z-[9999999999] pointer-events-none">
      {/* in the next line . **it must be vh not dvh** , because otherwise the image does not totally overlap the screen */}
      <div ref={targetRef} className="w-full h-screen  top-0 left-0 right-0 z-20 overflow-hidden ">
        <motion.img style={{ scale, display }} src="/home.webp" alt="image" className="w-full h-full object-cover " />
      </div>
    </div>
  );
}
