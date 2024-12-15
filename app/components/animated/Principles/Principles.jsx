"use client";

import styles from "./style.module.scss";
import variables from "@/app/variables.module.scss";
import { motion, useAnimation, useInView } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: 100,
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

const Principles = ({ principles }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3, once: false });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView]);



  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      transition={{ staggerChildren: 0.1 }}
      className={`${variables.textMain} ${styles.principles}`}
    >
      {principles.map((card, i) => (
        <div className={styles.cardContainer} key={`${card.title}_${i}`}>
          <motion.div
            className={styles.card}
            variants={defaultAnimations}
          >
            <p>{i + 1}</p>
            <div className={styles.content}>
              <div className={styles.imgContainer}>
              {card.img && <Image src={card.img} fill alt={`${card.title}_${card.img}`}/>}
              </div>
              <h3>{card.title}</h3>
              <p>{card.subtitle}</p>
            </div>
          </motion.div>
          
        </div>
      ))}
    </motion.div>
  );
};
export default Principles;
