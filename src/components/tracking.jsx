import React, { useEffect, useState } from "react";
import trackStyle from "../styles/tracing.module.scss";
import { AnimatePresence, motion } from "framer-motion";

export default function Tracking({ activeText }) {
    
  return (
    <AnimatePresence>
      <motion.h1
        initial={{ x: 20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={trackStyle.name}
      >
        {activeText}
      </motion.h1>
    </AnimatePresence>
  );
}
