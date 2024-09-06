"use client";

import Image from "next/image";
import styles from "./page.module.scss";
import variables from "./variables.module.scss";
import { Inter_Tight } from "next/font/google";

import { useEffect, useRef } from "react";
import { useMotionValue, animate, useInView, motion } from "framer-motion";
import { useMotion } from "./MotionContext";
import Line from "./components/animated/Line/Line";
import Lead from "./components/animated/Lead/Lead";

import heroImage from "@/public/heroImage.png";
import keyImage from "@/public/keyImage.png";
import LeadSmall from "./components/animated/LeadSmall/LeadSmall";
import Principles from "./components/animated/Principles/Principles";

const interTight = Inter_Tight({ subsets: ["latin"] });

export default function Home() {
  /*   const backgroundColor = useMotionValue("#0D5FB3");
  const textColor = useMotionValue("#ffffff"); */

  const { backgroundColor, textColor } = useMotion();

  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1, once: false });

  useEffect(() => {
    if (isInView) {
      animate(backgroundColor, "#ffffff", { ease: "easeInOut", duration: 0.2 });
      animate(textColor, "#0D5FB3", { ease: "easeInOut", duration: 0.2 });
    } else {
      animate(backgroundColor, "#0D5FB3", { ease: "easeInOut", duration: 0.2 });
      animate(textColor, "#ffffff", { ease: "easeInOut", duration: 0.2 });
    }
  }, [isInView]);

  return (
    <motion.main
      className={styles.main}
      style={{ backgroundColor: backgroundColor }}
    >
      <section className={styles.hero}>
        <div className={styles.content}>
          <motion.h1
            style={{ color: textColor }}
            className={`${interTight.className} ${styles.mainTitle} ${variables.mainTitle}`}
          >
            Ваш проводник <br />в мире торгов
          </motion.h1>
          <motion.p style={{ color: textColor }} className={variables.textMain}>
            Организуем и проводим коммерческие торги <br /> и торги в рамках
            процедуры банкротства. <br />
            <span>
              А также реализуем непрофильные активы кредитных организаций
            </span>
          </motion.p>
        </div>
        <div className={styles.imageContainer}>
          <Image src={heroImage} fill />
        </div>
      </section>

      <motion.div ref={ref} style={{ color: textColor }}>
        <section className={styles.stat}>
          <h2 className={variables.mainSubtitle}>
            Более <span>8 лет </span> на рынке
          </h2>
          <div className={styles.numbers}>
            <div className={styles.numbersElement}>
              <h1 className={variables.mainTitle}>250+</h1>
              <p className={variables.textMain}>торгов организовано</p>
            </div>
            <div className={styles.numbersElement}>
              <h1 className={variables.mainTitle}>
                2+<p className={variables.textMain}>млрд. руб.</p>
              </h1>
              <p className={variables.textMain}>
                стоимость реализованного имущества
              </p>
            </div>
          </div>
        </section>
        <Line />

        <section className={styles.howInfo}>
          <div className={styles.imageContainer}>
            <Image src={keyImage} fill />
          </div>
          <div className={styles.content}>
            <Lead
              text={[
                "Мы осуществляем свою деятельность по",
                "принципу полного цикла: от разработки",
                "документов по торгам до заключения сделки",
                "с покупателем ",
              ]}
            />
            <div style={{ height: "2rem" }} />
            <LeadSmall
              text={[
                "Предоставляем профессиональный сервис ",
                "по реализации и приобретению различных ",
                "групп товаров",
              ]}
            />
          </div>
        </section>

        <section className={styles.principles}>
          <Lead text={["Принципы нашей", "деятельности"]} />

          <Principles
            principles={[
              {
                title: "Прозрачность",
                subtitle: "всех торговых процедур для «продавца»;",
              },
              {
                title: "Доступность",
                subtitle: "торговых процедур для покупателя;",
              },
              {
                title: "Максимально широкая экспозиция товара",
                subtitle: "для целевых групп покупателей",
              },
              {
                title: "Индивидуальный подход ",
                subtitle:
                  "к условиям сотрудничества в зависимости от свойств товара и задач «продавца»;",
              },
              {
                title: "Прозрачность",
                subtitle: "всех торговых процедур для «продавца»;",
              },
              {
                title: "Доступность",
                subtitle: "торговых процедур для покупателя;",
              },
              {
                title: "Максимально широкая экспозиция товара",
                subtitle: "для целевых групп покупателей",
              },
              {
                title: "Индивидуальный подход ",
                subtitle:
                  "к условиям сотрудничества в зависимости от свойств товара и задач «продавца»;",
              },
            ]}
          />
        </section>

        <div style={{ height: "40rem" }}></div>
      </motion.div>
    </motion.main>
  );
}
