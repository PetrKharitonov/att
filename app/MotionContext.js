"use client";
import React, { createContext, useContext } from "react";
import { useMotionValue } from "framer-motion";

const MotionContext = createContext();

export function MotionProvider({ children }) {
  // Create motion values
  const backgroundColor = useMotionValue("#0D5FB3");
  const textColor = useMotionValue("#ffffff");

  // Provide the motion values to the context
  return (
    <MotionContext.Provider value={{ backgroundColor, textColor }}>
      {children}
    </MotionContext.Provider>
  );
}

export function useMotion() {
  return useContext(MotionContext);
}
