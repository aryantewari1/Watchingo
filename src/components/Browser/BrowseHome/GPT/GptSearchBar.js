import { useRef } from "react";
import useGptMovies from "../../../../hooks/useGptMovies";

const GptSearchBar = () => {
  const searchBar = useRef(null);
  const handleGptSearch = useGptMovies(searchBar);
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
