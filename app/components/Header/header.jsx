"use client";

import { useMotion } from "@/app/MotionContext";
import LogoIcon from "./LogoIcon/logo";
import styles from "./style.module.scss";
import variables from "@/app/variables.module.scss";

import { motion } from "framer-motion";

const Header = () => {
  const { backgroundColor, textColor } = useMotion();

  return (
    <header className={styles.header}>
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
    </header>
  );
};
export default Header;
