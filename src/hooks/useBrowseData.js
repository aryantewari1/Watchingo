import { useEffect } from "react";
import { API_OPTIONS, API_URL } from "../constants/constants";
import { useDispatch } from "react-redux";
import { addMovies } from "../store/Slices/movieSlice";

const useBrowseData = () => {
  const dispatch = useDispatch();
  const getMovies = async () => {
    const data = await fetch(API_URL, API_OPTIONS);
    const json = await data.json();
    dispatch(addMovies(json));
  };

  useEffect(() => {
    getMovies();
  }, []);
};

export default useBrowseData;
