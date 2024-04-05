import React from "react";
import Message from "./message";
import CountryItem from "./countryItem";
import styles from "../styles/countryList.module.scss";

export default function CountryList({ cities, isLoading }) {
  if (isLoading) return <p>Loading...</p>;
  if (!cities.length) {
    return <Message msg={"Add Your First City by clicking on a city on map"} />;
  }
  const countries = cities.reduce((arr, cur) => {
    if (!arr.map((el) => el.country).includes(cur.country)) {
      return [...arr, { country: cur.country, emoji: cur.emoji }];
    } else {
      return arr;
    }
  }, []);

  return (
    <ul className={styles.card}>
      {countries.map((country) => (
        <CountryItem country={country} />
      ))}
    </ul>
  );
}
