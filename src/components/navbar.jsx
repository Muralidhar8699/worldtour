import React, { useEffect, useState } from "react";
import Button from "./button";
import NavStyle from "../styles/navbar.module.scss";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../../public/logo.png";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Our Mission",
    path: "mission",
  },
  {
    title: "Pricing",
    path: "pricing",
  },
  {
    title: "Product",
    path: "product",
  },
];
const ContainerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  transition: {
    delay: 0.2,
    duration: 0.3,
  },
};
export default function Navbar({ setActiveText }) {
  const [Tab, setTab] = useState("Home");

  return (
    <motion.div
      variants={ContainerVariants}
      initial="hidden"
      animate="visible"
      className={NavStyle.container}
    >
      <div className={NavStyle.logoDiv}>
        <img width={"70"} src={logo} alt="logo" />
        WORLDTour
      </div>
      <div className={NavStyle.subdiv}>
        {navLinks.map((ele) => {
          return (
            <>
              <Link className="link" to={`${ele.path}`} key={ele.path}>
                <motion.button
                  className={NavStyle.btn}
                  onClick={() => {
                    setTab(ele.title);
                    setActiveText(ele.title);
                  }}
                  whileHover={{ opacity: 0.7 }}
                >
                  {Tab === ele.title && (
                    <motion.div
                      layoutId="clickedbutton"
                      transition={{
                        type: "spring",
                        bounce: 0.3,
                        duration: 0.5,
                      }}
                      className={NavStyle.active}
                    />
                  )}
                  <span>{ele.title}</span>
                </motion.button>
              </Link>
            </>
          );
        })}
        <Link className="link" to={"/login"}>
          <Button>Login</Button>
        </Link>
      </div>
    </motion.div>
  );
}
