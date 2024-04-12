import React, { useEffect, useState } from "react";
import Countrycard from "./Countrycard";
import useGetcountries from "../utils/useGetcountry";
const Body = () => {
  const [filtercountries, setfiltercountries] = useState([]);

  const [setchText, setsearchText] = useState("");
  const countries = useGetcountries();

  useEffect(() => {
    setfiltercountries(countries);
  }, [countries]);

  return (
    <div className="body">
      <div>
        <h1>List of countries </h1>
        <input
          type="text"
          value={setchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            debugger;
            const filteredlist = countries.filter((res) =>
              res.name.common.toLowerCase().includes(setchText.toLowerCase())
            );
            setfiltercountries(filteredlist);
          }}
        >
          search
        </button>
      </div>
      <div className="d-flex flex-row  flex-wrap">
        {filtercountries.map((country, index) => (
          <div className="w-20">
            <Countrycard
              key={index}
              countryname={country?.name}
              currencies={country.currencies}
              flagurl={country.flags.svg}
              maps={country.maps.googleMaps}
              population={country.population}
              area={country.area}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Body;
