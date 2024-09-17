import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MovieBackground = () => {
  const movies = useSelector((store) => store.movies.movies);
  if (!movies) return; //early return
  const movie = movies?.results[0];
  return (
    <div className="relative">
      <VideoTitle />
      <VideoBackground />
    </div>
  );
};

export default MovieBackground;
