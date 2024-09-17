import MovieCard from "./MovieCard";

const MovieList = ({ movies, title }) => {
  console.log(movies);
  return (
    <div className="">
      <div className="text-white">{title}</div>
      <div className="flex">
        <div className="flex">
          {movies?.results.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
