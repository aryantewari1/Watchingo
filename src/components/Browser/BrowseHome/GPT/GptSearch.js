import GptSearchBar from "./GptSearchBar";
import GptSuggestions from "./GptSuggestions";

const GptSearch = () => {
  return (
    <div className="flex flex-col justify-center justify-items-center w-full h-screen bg-black">
      <div className="">
        <GptSearchBar />
      </div>
      <div className="">
        <GptSuggestions />
      </div>
    </div>
  );
};

export default GptSearch;
