import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

export default function City() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { Id } = useParams();
  let lat = searchParams.get("lat");
  let lng = searchParams.get("lon");
  return (
    <>
      <h1>City</h1>
      <p>
        Position: {lat}****{lng}
      </p>
    </>
  );
}
