import React from "react";
import Sidebar from "../components/sidebar";
import Map from "../components/map";
import appStyle from "../styles/application.module.scss"

export default function Application() {
  return (
    <div className={appStyle.container}>
      <Sidebar />
      <Map />
    </div>
  );
}
