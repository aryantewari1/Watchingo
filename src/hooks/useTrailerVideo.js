import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../store/Slices/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../constants/constants";

const useTrailerVideo = (id) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  console.log(id);
  const dispatch = useDispatch();
  const getTrailerVideo = async () => {
    const url =
      "https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US";
    const data = await fetch(url, API_OPTIONS);
    const json = await data.json();
    console.log(json);
    const filterData = json.results.filter((movie) => movie.type === "Trailer");
    const trailerVideo =
      filterData.length === 0 ? json.results[0] : filterData[0];
    dispatch(addTrailerVideo(trailerVideo));
  };
  useEffect(() => {
    getTrailerVideo();
  }, []);

  return trailerVideo;
};

export default useTrailerVideo;
