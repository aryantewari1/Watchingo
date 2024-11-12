import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../constants/constants";
import { model } from "../utils/geminiAI";
import { setGptMovies } from "../store/Slices/GptSlice";

const useGptMovies = (searchBar) => {
  const dispatch = useDispatch();
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

    const gptMoviesResult = result?.response?.text().split(",");
    const gptMoviesArray = gptMoviesResult.map((movie) =>
      searchTmdbMoives(movie.trim())
    );

    const gptMovies = await Promise.all(gptMoviesArray);

    dispatch(setGptMovies(gptMovies));
  };
  return handleGptSearch;
};
export default useGptMovies;
