import { Outlet } from "react-router-dom";
import BrowseHeader from "./BrowseHeader";
import useBrowseData from "../../hooks/useBrowseData";
const Browse = () => {
  useBrowseData();
  return (
    <div className="">
      <BrowseHeader />
      <Outlet />
    </div>
  );
};

export default Browse;
