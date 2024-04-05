import React, { useEffect, useState } from "react";
import HomeStyles from "../styles/home.module.scss";
import Navbar from "../components/navbar";
import Content from "../components/content";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import Tracking from "../components/tracking";
import PopUp from "../components/popUp";

export default function Home() {
  // const [showPopup, setShowPopup] = useState(false);
  const [activeText, setActiveText] = useState("Home");

  // useEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //     setShowPopup(true);
  //     console.log(1);
  //   }, 5000);

  //   return () => {
  //     clearTimeout(timeoutId);
  //   };
  // }, []);
  // console.log(2);
  return (
    <div className={HomeStyles.container}>
      {/* <div>
        {showPopup && (
          <PopUp isOpen={showPopup} onClose={() => setShowPopup(false)} />
        )}
      </div> */}
      <div className={HomeStyles.shade} />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.2,
          duration: 0.5,
        }}
        className={HomeStyles.line1}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.2,
          duration: 0.5,
        }}
        className={HomeStyles.line2}
      />
      <Navbar setActiveText={setActiveText} />
      <Tracking activeText={activeText} />
      <div className={HomeStyles.outlet}>
        <Outlet />
      </div>
    </div>
  );
}
