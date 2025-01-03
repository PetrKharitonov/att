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
import pr1 from "@/public/pr1.png";
import pr2 from "@/public/pr2.png";
import pr3 from "@/public/pr3.png";
import pr4 from "@/public/pr4.png";
import pr5 from "@/public/pr5.png";
import pr6 from "@/public/pr6.png";

import project1 from "@/public/project1.png"
import project2 from "@/public/project2.png"
import project3 from "@/public/project3.png"

import ploshadka1 from "@/public/ploshadka1.png"
import ploshadka2 from "@/public/ploshadka2.png"
import ploshadka3 from "@/public/ploshadka3.png"
import ploshadka4 from "@/public/ploshadka4.png"

import LeadSmall from "./components/animated/LeadSmall/LeadSmall";
import Principles from "./components/animated/Principles/Principles";
import Projects from "./components/animated/Projects/Projects";
import Ploshadki from "./components/animated/Ploshadki/Ploshadki";
import Footer from "./components/Footer/Footer";

const interTight = Inter_Tight({ subsets: ["latin", "cyrillic"] });

export default function Home() {
  const { backgroundColor, textColor } = useMotion();

  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.07, once: false });

  useEffect(() => {
    if (isInView) {
      animate(backgroundColor, "#ffffff", { ease: "easeInOut", duration: 0.2 });
      animate(textColor, "#0D5FB3", { ease: "easeInOut", duration: 0.2 });
    } else {
      animate(backgroundColor, "#0D5FB3", { ease: "easeInOut", duration: 0.2 });
      animate(textColor, "#ffffff", { ease: "easeInOut", duration: 0.2 });
    }
  }, [isInView]);


  const projects = [
    {
      img: project1,
      name: "Здание автосалона в г. Санкт-Петербург",
      cost: "313 100 000 ₽"
    },
    {
      img: project2,
      name: "Торгово-логистический комплекс «Декомарт» (г. Новосибирск, Толмачевская,15/1)",
      cost: "350 000 000 ₽"
    },
    {
      img: project3,
      name: "База отдыха «Ласточка»",
      cost: "127 000 000 ₽"
    },

  ]


  const ploshadki = [
    {
      img: ploshadka1,
    },
    {
      img: ploshadka2,
    },
    {
      img: ploshadka3,
    },
    {
      img: ploshadka4,
    },
  ]

  return (
    <motion.main
      className={`${interTight.className} ${styles.main} `}
      style={{ backgroundColor: backgroundColor }}
    >
      <section className={styles.hero} id="hero">
        <div className={styles.content}>
          <motion.h1
            style={{ color: textColor }}
            className={`${styles.mainTitle} ${variables.mainTitle}`}
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
          <Image src={heroImage} fill alt="main" />
        </div>
      </section>

      <motion.div ref={ref} style={{ color: textColor }}>
        <section className={styles.stat} id="about">
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
            <Image src={keyImage} fill alt="key" />
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
                img: pr1,
                title: "Прозрачность",
                subtitle: "всех торговых процедур для «продавца»;",
              },
              {
                img: pr2,
                title: "Комфортный сервис",
                subtitle: "участия торговых процедур;",
              },
              {
                img: pr3,
                title: "Максимально широкая экспозиция товара",
                subtitle: "для целевых групп покупателей",
              },
              {
                img: pr4,
                title: "Индивидуальный подход ",
                subtitle:
                  "к условиям сотрудничества в зависимости от свойств товара и задач «продавца»;",
              },
              {
                img: pr5,
                title: "Безопасность и устойчивость ",
                subtitle: "торговых процедур;",
              },
              {
                img: pr6,
                title: "Конфиденциальность",
              },
            ]}
          />
        </section>

        <section className={styles.actives} id="portfolio">
          <Lead text={["Примеры", "реализованных активов"]} />

         <Projects projects={projects}/>
          
        </section>

        <section className={styles.actives}>
          <Lead text={["Мы аккредитованы на следующих", "электронных торговых площадках"]} />

          <Ploshadki ploshadki={ploshadki}/>
          
        </section>
        <section className={styles.footer} id="footer">
          <h1
            className={`${styles.mainTitle} ${variables.mainTitle}`}
          >
            Связаться с нами
          </h1>

          <p className={`${variables.mainSubtitle}`}>+7 962 123 32 32</p>
          </section>


        <div style={{ height: "30rem" }}></div>



      </motion.div>
    </motion.main>
  );
}
