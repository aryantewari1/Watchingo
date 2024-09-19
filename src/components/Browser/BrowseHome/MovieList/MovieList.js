import MovieCard from "./MovieCard";

const MovieList = ({ movies, title }) => {
  return (
    <div className="font-[Helvetica]">
      <div className="text-white font-bold text-2xl pb-4">{title}</div>
      <div className="flex overflow-x-scroll scrollbar-none">
        {movies?.results.map((movie) => (
          <MovieCard key={movie?.title} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
