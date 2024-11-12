import GptSearchBar from "./GptSearchBar";
import GptSuggestions from "./GptSuggestions";

const GptSearch = () => {
  return (
    <div className="flex flex-col justify-center justify-items-center w-full min-h-screen bg-black">
      <div className="mb-8">
        <GptSearchBar />
      </div>
      <div className="w-full">
        <GptSuggestions />
      </div>
    </div>
  );
};

export default GptSearch;
