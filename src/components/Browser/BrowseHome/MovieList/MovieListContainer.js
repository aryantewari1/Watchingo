import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const MovieListContainer = () => {
  const movies = useSelector((store) => store?.movies?.movies);
  const popularMovies = useSelector((store) => store?.movies?.popularMovies);
  const topRatedMovies = useSelector((store) => store?.movies?.topRatedMovies);
  const upcomingMovies = useSelector((store) => store?.movies?.upcomingMovies);
  return (
    <div className="w-full  bg-black">
      <div className="-mt-52 relative z-50 pl-20">
        <MovieList
          title={`Watch recommended movies based on ${movies?.results[3]?.original_title}`}
          movies={movies}
        />
        <MovieList title={`Popular Movies`} movies={popularMovies} />
        <MovieList title={`Top Rated Movies`} movies={topRatedMovies} />
        <MovieList title={"Upcoming Movies"} movies={upcomingMovies} />
      </div>
    </div>
  );
};

export default MovieListContainer;
