import React from "react";
import { Link } from "react-router-dom";

const Countrycard = (props) => {
  return (
    <Link className="link" to={props.maps} target="_blank">
      <div className="m-4 p-4 w-10">
        <img
          className="w-5"
          height={100}
          width={100}
          src={props.flagurl}
          alt="flagimg"
        />
        <h1> {props?.countryname?.common}</h1>
        <div>
          <p>Population:{props.population}</p>
          <p>Area:{props.area}</p>
          {props.currencies ? (
            Object.entries(props.currencies).map(([key, value]) => (
              <div key={key}>
                <p>Currency: {key}</p>
                <p>Name: {value.name}</p>
                <p>Symbol: {value.symbol}</p>
              </div>
            ))
          ) : (
            <p>no currency</p>
          )}
        </div>
      </div>
    </Link>
  );
};
export default Countrycard;
