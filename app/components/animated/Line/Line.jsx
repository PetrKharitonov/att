"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: 0,
    width: 0,
  },
  visible: {
    opacity: 1,
    y: 0,
    width: "100%",
    transition: {
      duration: 2,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const Line = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: false });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView]);

  return (
    <motion.div
      style={{ height: "1px", backgroundColor: "#C3D7EC" }}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={defaultAnimations}
    ></motion.div>
  );
};
export default Line;
