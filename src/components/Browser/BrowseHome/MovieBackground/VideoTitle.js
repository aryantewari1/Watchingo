const VideoTitle = ({ title, description }) => {
  return (
    <div className="w-full">
      <div className="absolute w-full aspect-video pt-80 px-16 bg-gradient-to-r from-black z-30">
        <div className="text-6xl font-bold text-white font-[Helvetica] pb-2">
          {title}
        </div>
        <div className="text-lg w-1/2 font-medium text-white font-[Helvetica] leading-6 mb-4">
          {description}
        </div>
        <div className="ml-2">
          <img
            src="https://img.icons8.com/?size=30&id=59862&format=png"
            className="absolute z-10 pt-4 mx-3 w-6"
          />
          <button className="px-6 py-3 bg-white opacity-90 text-black rounded-md mr-3 hover:opacity-100">
            <div className="ml-6 text-xl font-bold">Play Now</div>
          </button>
          <button className="pr-6 pl-3 py-3 bg-slate-600 opacity-80 text-white rounded-md hover:opacity-95">
            <div className="ml-3 text-xl font-bold ">
              &#9432; {"  "}More info
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
