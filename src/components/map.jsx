import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import style  from '../styles/map.module.scss'

export default function Map() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  let lat = searchParams.get("lat");
  let lng = searchParams.get("lon");
  return (
    <div className={style.container} onClick={() => navigate("form")}>
      <h1>Map</h1>
      <h1>
        Position:{lat};{lng}
      </h1>
    </div>
  );
}
