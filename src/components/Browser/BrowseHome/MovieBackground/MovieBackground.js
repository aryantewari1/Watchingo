import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MovieBackground = () => {
  const movies = useSelector((store) => store.movies.movies);
  if (!movies) return; //early return
  const movie = movies?.results[3];
  const { id, original_title, overview } = movie;

  return (
    <div className="relative">
      <VideoTitle title={original_title} description={overview} />
      <VideoBackground id={id} />
    </div>
  );
};

export default MovieBackground;
