import { useSelector } from "react-redux";
import MovieList from "../MovieList/MovieList";

const GptSuggestions = () => {
  const gptMovies = useSelector((store) => store?.GPT?.gptMovies);
  console.log(gptMovies);
  if (gptMovies === null) return;
  return gptMovies ? (
    <div className="">
      {gptMovies.map((movie, index) => (
        <MovieList key={index} title={movie?.[0]?.title} movies={movie} />
      ))}
    </div>
  ) : (
    <div className="text-white text-lg">Loading</div>
  );
};

export default GptSuggestions;
