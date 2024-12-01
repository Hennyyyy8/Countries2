import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Countries() {
  const [countries, setCountries] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    
    fetch("https://restcountries.com/v3.1/name/kingdom")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);

  const handleSelectCountry = (cca2) => {
   
    const country = countries.find((country) => country.cca2 === cca2);
   
    if (country) {
      navigate(`/countries/${cca2}`, { state: { data: country } });
    }
  };

  return (
    <div>
      <h1>Countries (Kingdoms)</h1>
      <select onChange={(e) => handleSelectCountry(e.target.value)}>
        <option>Select a country</option>
        {countries.map((country) => (
          <option key={country.cca2} value={country.cca2}>
            {country.name.common}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Countries;





