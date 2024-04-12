import { useEffect, useState } from "react";
import { API_URL } from "./constant";
const useGetcountries = () => {
  const [countries, setCountries] = useState([]);

  const getCountries = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setCountries(data);
  };
  useEffect(() => {
    getCountries();
  }, []);
  return countries;
};

export default useGetcountries;
