import React from "react";
import styles from "../styles/countryItem.module.scss"

export default function CountryItem({ country }) {
  return (
    <li className={styles.card}>
      <span className={styles.emoji}>{country.emoji}</span>
      <span className={styles.country}>{country.country}</span>
    </li>
  );
}
