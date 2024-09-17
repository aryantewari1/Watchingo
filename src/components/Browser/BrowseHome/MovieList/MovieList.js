import MovieCard from "./MovieCard";

const MovieList = ({ movies, title }) => {
  console.log(movies);
  return (
    <div className="font-[Helvetica]">
      <div className="text-white font-bold text-xl pb-4">{title}</div>
      <div className="flex overflow-x-scroll scrollbar-none">
        {movies?.results.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
