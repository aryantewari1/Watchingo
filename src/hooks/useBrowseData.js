import { useEffect } from "react";
import { API_OPTIONS, API_URL } from "../constants/constants";

const useBrowseData = () => {
  const getMovies = async () => {
    const data = await fetch(API_URL, API_OPTIONS);
    const json = await data.json();
    console.log(json);
  };

  useEffect(() => {
    getMovies();
  }, []);
};

export default useBrowseData;
