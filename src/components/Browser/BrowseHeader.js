import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../Header";
import { LOGO_URL } from "../../constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { setShowGptSearch } from "../../store/Slices/GptSlice";

const BrowseHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const showGptSearch = useSelector((store) => store?.GPT?.showGptSearch);
  const user = useSelector((store) => store.user.user);
  const [showDropDown, setShowDropDown] = useState(false);
  const handleGptSearch = () => {
    dispatch(setShowGptSearch(!showGptSearch));
  };
  function signUserOut() {
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {});
  }
  return (
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
          <div>
            <button
              className="bg-red-600 text-white text-base  px-3 py-2 rounded-md mx-4 font-semibold font-[Helvetica] opacity-90 hover:opacity-100"
              onClick={handleGptSearch}
            >
              GptSearch
            </button>
          </div>
          <div
            onMouseEnter={() => {
              setShowDropDown(true);
            }}
          >
            {" "}
            {user && <img alt="" src={LOGO_URL} className="w-9 rounded-sm " />}
          </div>
          <div
            onMouseEnter={() => {
              setShowDropDown(true);
            }}
          >
            <button className="text-xs text-gray-200 pl-3">&#x25BC;</button>{" "}
          </div>
          {showDropDown && (
            <div className="absolute flex flex-col top-20 left-[83%] px-6 py-3 bg-black opacity-80">
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
  );
};

export default BrowseHeader;
