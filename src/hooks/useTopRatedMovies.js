import { useEffect } from "react";
import { API_OPTIONS, Top_Rated_API } from "../constants/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../store/Slices/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const getMovies = async () => {
    const data = await fetch(Top_Rated_API, API_OPTIONS);
    const json = await data.json();
    dispatch(addTopRatedMovies(json));
  };

  useEffect(() => {
    getMovies();
  }, []);
};

export default useTopRatedMovies;
