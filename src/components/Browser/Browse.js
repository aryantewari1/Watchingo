import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Header";
import { Outlet } from "react-router-dom";
import { useState } from "react";
const Browse = () => {
  const navigate = useNavigate();
  const [showDropDown, setShowDropDown] = useState(false);

  function signUserOut() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/login");
      })
      .catch((error) => {
        // An error happened.
      });
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
              <img
                alt=""
                src="https://avatars.githubusercontent.com/u/143114103?v=4"
                className="w-12 rounded-full"
              />
            </div>
            <div
              onMouseEnter={() => {
                setShowDropDown(true);
              }}
            >
              <button className="text-xs pl-3">&#x25BC;</button>{" "}
            </div>
            {showDropDown && (
              <div className="absolute flex flex-col top-20 left-[83%] bg-black">
                <button
                  onClick={signUserOut}
                  className="text-white font-[helvetica] p-2 hover:underline "
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
