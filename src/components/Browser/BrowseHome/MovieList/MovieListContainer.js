import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const MovieListContainer = () => {
  const movies = useSelector((store) => store?.movies?.movies);
  return (
    <div className="w-full bg-black">
      <div>
        <MovieList
          title={`Watch recommended movies based on "Border Lands"`}
          movies={movies}
        />
      </div>
    </div>
  );
};

export default MovieListContainer;
