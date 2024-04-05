import React from "react";
import cityItemsStyle from "../styles/cityItems.module.scss";
import { Link } from "react-router-dom";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

export default function CityItems({ city }) {
  const {
    emoji,
    date,
    cityName,
    id,
    position: { lat, lng },
  } = city;
  return (
    <li className={cityItemsStyle.li}>
      <Link className={cityItemsStyle.card} to={`${id}?lat=${lat}&lon=${lng}`}>
        <span className={cityItemsStyle.emoji}>{emoji}</span>
        <span className={cityItemsStyle.name}>{cityName}</span>
        <time className={cityItemsStyle.date}>{formatDate(date)}</time>
        <button className={cityItemsStyle.deleteBtn}>&times;</button>
      </Link>
    </li>
  );
}
