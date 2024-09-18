import { useEffect } from "react";
import { API_OPTIONS, upcoming_movies_api } from "../constants/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../store/Slices/movieSlice";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const getMovies = async () => {
    const data = await fetch(upcoming_movies_api, API_OPTIONS);
    const json = await data.json();
    dispatch(addUpcomingMovies(json));
  };

  useEffect(() => {
    getMovies();
  }, []);
};

export default useUpcomingMovies;
