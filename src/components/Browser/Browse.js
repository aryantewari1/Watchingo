import { Outlet } from "react-router-dom";
import BrowseHeader from "./BrowseHeader";
import useBrowseData from "../../hooks/useBrowseData";
import usePopularMovies from "../../hooks/usePopularMovies";
const Browse = () => {
  useBrowseData();
  usePopularMovies();
  return (
    <div className="">
      <BrowseHeader />
      <Outlet />
    </div>
  );
};

export default Browse;
