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

const Projects = ({ projects }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1, once: true });

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
      className={`${variables.textMain} ${styles.projects}`}
    >
      {projects.map((project, i) => (
        <div className={styles.cardContainer} key={`${project.name}_${i}`}>
          <motion.div
            className={styles.card}
            variants={defaultAnimations}
          >
            <div className={styles.imgContainer}>
                <Image src={project.img} alt={`${project.name}_image`} fill/>
            </div>
            <h3>{project.cost}</h3>
            <p>{project.name}</p>
          </motion.div>
        </div>
      ))}
    </motion.div>
  );
};
export default Projects;
