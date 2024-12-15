"use client";

import { useState } from "react";
import { useMotion } from "@/app/MotionContext";
import LogoIcon from "./LogoIcon/logo";
import BurgerIcon from "./BurgerIcon/burger";
import styles from "./style.module.scss";
import variables from "@/app/variables.module.scss";

import { motion } from "framer-motion";
import CrossIcon from "./CrossIcon/cross";

const Header = () => {
  const { backgroundColor, textColor } = useMotion();

  const [isOpened, setIsOpened] = useState(false);

  return (
    <motion.header
      className={styles.header}
      style={{ backgroundColor: isOpened ? backgroundColor : "none" }}
    >
      <div className={styles.headerCont}>
        <div className={styles.logo}>
          <LogoIcon fill={textColor} />
        </div>
        <nav>
          <div className={styles.linkList}>
            <motion.ul
              style={{ color: textColor }}
              className={variables.textMain}
            >
              <li>продавцу</li>
              <li>покупателю</li>
              <li>о нас</li>
              <li>портфолио</li>
            </motion.ul>
          </div>
        </nav>
        <motion.button
          className={variables.textMain}
          style={{ color: backgroundColor, backgroundColor: textColor }}
        >
          заполнить анкету
        </motion.button>

        <div className={styles.burger} onClick={() => setIsOpened(!isOpened)}>
          {isOpened ? (
            <CrossIcon fill={textColor} />
          ) : (
            <BurgerIcon fill={textColor} />
          )}
        </div>
      </div>

      <motion.div
        className={styles.mobileMenu}
        animate={{ height: isOpened ? "100vh" : "0" }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
      >
        <nav>
          <div className={styles.mobileList}>
            <motion.ul style={{ color: textColor }}>
              <li>продавцу</li>
              <li>покупателю</li>
              <li>о нас</li>
              <li>портфолио</li>
            </motion.ul>
          </div>
        </nav>
      </motion.div>
    </motion.header>
  );
};
export default Header;
