import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const MovieListContainer = () => {
  const movies = useSelector((store) => store?.movies?.movies);
  return (
    <div className="w-full  bg-black">
      <div className="-mt-52 relative z-50 pl-20">
        <MovieList
          title={`Watch recommended movies based on "Beetlejuice Beetlejuice"`}
          movies={movies}
        />
        <MovieList
          title={`Watch recommended movies based on "Beetlejuice Beetlejuice"`}
          movies={movies}
        />
        <MovieList
          title={`Watch recommended movies based on "Beetlejuice Beetlejuice"`}
          movies={movies}
        />
        <MovieList
          title={`Watch recommended movies based on "Beetlejuice Beetlejuice"`}
          movies={movies}
        />
        <MovieList
          title={`Watch recommended movies based on "Beetlejuice Beetlejuice"`}
          movies={movies}
        />
        <MovieList
          title={`Watch recommended movies based on "Beetlejuice Beetlejuice"`}
          movies={movies}
        />
      </div>
    </div>
  );
};

export default MovieListContainer;
