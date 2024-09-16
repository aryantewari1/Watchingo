import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Header from "../Header";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { LOGO_URL } from "../../constants/constants";
import { useSelector } from "react-redux";
const Browse = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user.user);
  const [showDropDown, setShowDropDown] = useState(false);

  function signUserOut() {
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {});
  }
  return (
    <div className="">
      <Header>
        {" "}
        <div className=" flex w-full items-center">
          <div className="flex justify-around flex-[2] text-lg ml-4 text-white font-semibold">
            <Link to="/browse">Home</Link>
            <span>TVShows</span>
            <span>Movies</span>
            <span>New & Popular</span>
            <span>My List</span>
            <span>Browse By Languages</span>
          </div>
          <div className="flex flex-[1] text-center text-lg items-center justify-end pr-16">
            <div
              onMouseEnter={() => {
                setShowDropDown(true);
              }}
            >
              {" "}
              {user && <img alt="" src={LOGO_URL} className="w-9 rounded-sm" />}
            </div>
            <div
              onMouseEnter={() => {
                setShowDropDown(true);
              }}
            >
              <button className="text-xs pl-3">&#x25BC;</button>{" "}
            </div>
            {showDropDown && (
              <div className="absolute flex flex-col top-20 left-[83%] px-6 py-3 bg-black">
                <button
                  onClick={signUserOut}
                  className="text-white text-sm font-[helvetica] hover:underline "
                  onMouseEnter={() => {
                    setShowDropDown(true);
                  }}
                  onMouseLeave={() => {
                    setShowDropDown(false);
                  }}
                >
                  Sign out of Watchingo
                </button>
              </div>
            )}
          </div>
        </div>
      </Header>
      <Outlet />
    </div>
  );
};

export default Browse;
