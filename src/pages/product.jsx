import React from "react";
import logo from "/img-1.jpg";
import productStyle from "../styles/product.module.scss";
import { motion } from "framer-motion";
const ContainerVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};
export default function Product() {
  return (
    <div className={productStyle.container}>
      <motion.div
        variants={ContainerVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.3, duration: 0.5 }}
        className={productStyle.textdiv}
      >
        <motion.h1>About WorldWide</motion.h1>
        <p>
          Embarking on a world tour is a dream that beckons to the adventurous
          soul, promising a journey filled with wonder, discovery, and
          unforgettable experiences. From the vibrant streets of bustling
          metropolises to the serene landscapes of remote corners of the earth,
          each destination offers a unique tapestry of culture, history, and
          natural beauty waiting to be explored.
        </p>
      </motion.div>
      <motion.div
        initial={{ scale: 1.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={productStyle.imgdiv}
      >
        <motion.img className={productStyle.img} src={logo} alt="" />
      </motion.div>
    </div>
  );
}
