import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MovieBackground = () => {
  const movies = useSelector((store) => store.movies.movies);
  if (!movies) return; //early return
  console.log(movies);
  const movie = movies?.results[0];
  console.log(movie);
  const { id, original_title, overview } = movie;
  console.log(movie);
  return (
    <div className="relative">
      <VideoTitle title={original_title} description={overview} />
      <VideoBackground id={id} />
    </div>
  );
};

export default MovieBackground;
