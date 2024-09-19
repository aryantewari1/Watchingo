import { useRef } from "react";
import { model } from "../../../../utils/geminiAI";
import { API_OPTIONS } from "../../../../constants/constants";

const GptSearchBar = () => {
  const searchBar = useRef();
  const searchTmdbMoives = async (movie) => {
    const url =
      "https://api.themoviedb.org/3/search/movie?query=" +
      movie +
      "&include_adult=true&language=en-US&page=1";
    const data = await fetch(url, API_OPTIONS);
    const json = await data.json();
    return json?.results;
  };
  const handleGptSearch = async () => {
    const prompt =
      "Act like a movie recommender system for the following query:" +
      searchBar?.current?.value +
      "just give me 5 movies separated by commas";
    const result = await model.generateContent(prompt);
    console.log(result?.response?.text().split(","));
    const gptMoviesResult = result?.response?.text().split(",");
    const gptMoviesArray = gptMoviesResult.map((movie) =>
      searchTmdbMoives(movie.trim())
    );
    console.log(gptMoviesArray);
    const gptMovies = await Promise.all(gptMoviesArray);
    console.log(gptMovies);
  };
  return (
    <div className="flex w-1/2 mx-auto">
      <div className="flex-[4] mr-2">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            ref={searchBar}
            type="search"
            placeholder="What would you like to watch today?"
            className="w-full pl-5 pr-3 py-4 text-lg font-[helvetica] rounded-sm"
          />
        </form>
      </div>
      <div className="flex-[1] bg-red-600 text-center cursor-pointer rounded-sm">
        <button
          className="pt-4 text-white font-bold font-[helvetica]"
          onClick={handleGptSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default GptSearchBar;
