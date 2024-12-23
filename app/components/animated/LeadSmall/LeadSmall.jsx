"use client";

import styles from "./style.module.scss";
import variables from "@/app/variables.module.scss";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const LeadSmall = ({ text }) => {
  const controls = useAnimation();
  const textArray = Array.isArray(text) ? text : [text];
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView]);

  return (
    <div>
      <span className={styles.sr}>{text}</span>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={controls}
        transition={{ staggerChildren: 0.03 }}
        className={`${variables.textMain}`}
      >
        {textArray.map((line) => (
          <span
            style={{ display: "block", overflow: "hidden" }}
            key={`${line}`}
          >
            {line.split(" ").map((word, i) => (
              <span style={{ display: "inline-block" }} key={`${word}_${i}`}>
                <motion.span
                  style={{ display: "inline-block" }}
                  variants={defaultAnimations}
                >
                  {word}
                </motion.span>
                <span style={{ display: "inline-block" }}>&nbsp;</span>
              </span>
            ))}
          </span>
        ))}
      </motion.span>
    </div>
  );
};
export default LeadSmall;
