import { useEffect } from "react";
import { POPULAR_MOVIES_API, POPULAR_OPTIONS } from "../constants/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../store/Slices/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getMovies = async () => {
    const data = await fetch(POPULAR_MOVIES_API, POPULAR_OPTIONS);
    const json = await data.json();
    dispatch(addPopularMovies(json));
  };

  useEffect(() => {
    getMovies();
  }, []);
};

export default usePopularMovies;
