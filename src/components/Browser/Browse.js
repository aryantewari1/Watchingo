import { Outlet } from "react-router-dom";
import BrowseHeader from "./BrowseHeader";
import useBrowseData from "../../hooks/useBrowseData";
import usePopularMovies from "../../hooks/usePopularMovies";
import useTopRatedMovies from "../../hooks/useTopRatedMovies";
import useUpcomingMovies from "../../hooks/useUpcomingMovies";
const Browse = () => {
  useBrowseData();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <div className="">
      <BrowseHeader />
      <Outlet />
    </div>
  );
};

export default Browse;
