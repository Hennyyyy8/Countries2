import React from "react";
import { useLocation } from "react-router-dom";

function Details() {
    const { state } = useLocation();
    if (!state || !state.data) {
      return <div>No country data available.</div>;
    }
    const country = state.data;
    

  return (
    <div className="country-details">
      <h2>{country.name.common}</h2>
      <p><strong>Capital:</strong> {country.capital}</p>
    </div>
  );
}

export default Details;


