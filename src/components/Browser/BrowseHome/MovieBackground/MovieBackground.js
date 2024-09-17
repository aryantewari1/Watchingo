import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MovieBackground = () => {
  const movies = useSelector((store) => store.movies.movies);
  if (!movies) return; //early return
  console.log(movies);
  const movie = movies?.results[0];
  const { id } = movie;
  return (
    <div className="relative">
      <VideoTitle />
      <VideoBackground id={id} />
    </div>
  );
};

export default MovieBackground;
