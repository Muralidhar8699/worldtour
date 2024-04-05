import React from "react";
import Button from "../components/button";
import introStyle from "../styles/intro.module.scss";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Intro() {
  return (
    <div className={introStyle.container}>
      <motion.h1
        initial={{ y: "10vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5, stiffness: 200 }}
      >
        You travel the world. WorldWise keeps track of your adventures.
      </motion.h1>
      <motion.p
        initial={{ y: "10vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.5,
          duration: 0.6,
        }}
      >
        A world map that tracks your footsteps into every city you can think of.
        Never forget your wonderful experiences, and show your friends how you
        have wandered the world.
      </motion.p>
      <motion.div
        initial={{ y: "10vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 0.7,
          duration: 0.6,
        }}
      >
        <Link to={"app"}>
          <Button>START TRACKING NOW</Button>
        </Link>
      </motion.div>
    </div>
  );
}
