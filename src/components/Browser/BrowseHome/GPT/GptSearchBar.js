const GptSearchBar = () => {
  return (
    <div className="flex w-1/2 mx-auto">
      <div className="flex-[4] mr-2">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="search"
            placeholder="What would you like to watch today?"
            className="w-full pl-6 py-4 text-lg font-[helvetica]"
          />
        </form>
      </div>
      <div className="flex-[1] bg-red-600 text-center cursor-pointer">
        <button className="pt-4 text-white font-bold font-[helvetica]">
          Search
        </button>
      </div>
    </div>
  );
};

export default GptSearchBar;
