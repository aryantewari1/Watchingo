import { useSelector } from "react-redux";
import useTrailerVideo from "../../../../hooks/useTrailerVideo";

const VideoBackground = ({ id }) => {
  //we will require video since our

  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useTrailerVideo(id);
  return (
    <div className="w-full">
      <div className="absolute mt-3 w-full h-16"></div>
      <iframe
        className="w-full aspect-video"
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=0&modestbranding=1&disablekb=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
