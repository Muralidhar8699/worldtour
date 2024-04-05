import React from "react";
import CityItems from "./cityItems";
import Message from "./message";

const styles = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
  padding: "1rem",
  gap: "1rem",
};
export default function CityList({ cities, isLoading }) {
  if (isLoading) return <p>Loading...</p>;
  if (!cities.length) {
    return <Message msg={"Add Your First City by clicking on a city on map"} />;
  }

  return (
    <ul style={styles}>
      {cities.map((city) => (
        <CityItems city={city} key={city.id} />
      ))}
    </ul>
  );
}
