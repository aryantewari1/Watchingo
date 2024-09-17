import { Outlet } from "react-router-dom";
import BrowseHeader from "./BrowseHeader";
import { API_OPTIONS } from "../../constants/constants";
import { useEffect } from "react";
const Browse = () => {
  const getMovies = async () => {
    const url =
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";
    const data = await fetch(url, API_OPTIONS);
    const json = await data.json();
    console.log(json);
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className="">
      <BrowseHeader />
      <Outlet />
    </div>
  );
};

export default Browse;
