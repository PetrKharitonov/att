"use client"

import React from 'react'
import styles from "./style.module.scss";
import variables from "@/app/variables.module.scss"

const Footer = () => {

  return (
    <div className={styles.footer}>
        <h1 className={variables.mainTitle}>Связаться с нами</h1>
    </div>
  )  
}

export default Footer