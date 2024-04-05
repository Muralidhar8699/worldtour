import React, { useState } from "react";
import sidebarStyle from "../styles/sidebar.module.scss";
import { Link, Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "/logo.png";

const sidebarroute = [
  {
    name: "Cities",
    route: "cities",
  },
  {
    name: "Countries",
    route: "countries",
  },
];

export default function Sidebar() {
  const [active, setActive] = useState("Cities");
  return (
    <div className={sidebarStyle.container}>
      <div>
        <img src={logo} alt="logo" />
        <h2>WorldTour</h2>
      </div>
      <div className={sidebarStyle.subdiv}>
        {sidebarroute.map((e) => {
          return (
            <>
              <Link to={e.route} key={e.route}>
                <motion.button
                  className={sidebarStyle.btn}
                  onClick={() => setActive(e.name)}
                >
                  {active === e.name && (
                    <motion.div
                      layoutId="clickedbutton"
                      transition={{
                        type: "spring",
                        bounce: 0.5,
                        duration: 0.8,
                      }}
                      className={sidebarStyle.active}
                    />
                  )}
                  <span className={sidebarStyle.text}>{e.name}</span>
                </motion.button>
              </Link>
            </>
          );
        })}
      </div>
      <div className={sidebarStyle.contentDiv}>
        <Outlet />
      </div>
    </div>
  );
}
