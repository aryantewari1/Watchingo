import { Outlet } from "react-router-dom";
import BrowseHeader from "./BrowseHeader";
const Browse = () => {
  return (
    <div className="">
      <BrowseHeader />
      <Outlet />
    </div>
  );
};

export default Browse;
