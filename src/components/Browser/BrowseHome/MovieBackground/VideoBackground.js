import useTrailerVideo from "../../../../hooks/useTrailerVideo";

const VideoBackground = ({ id }) => {
  //we will require video since our
  const trailerVideo = useTrailerVideo(id);
  return (
    <div>
      <iframe
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?si=6baeA-wDE7YQghxq"
        }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
