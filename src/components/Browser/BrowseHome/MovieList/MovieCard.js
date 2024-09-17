import { TMDB_IMG_URL } from "../../../../constants/constants";

const MovieCard = ({ movie }) => {
  const { poster_path } = movie;
  return (
    <div className="flex-shrink-0 mb-5 px-1">
      <img
        alt=""
        src={TMDB_IMG_URL + poster_path}
        className="w-60 h-36 object-cover rounded-sm"
      />
    </div>
  );
};

export default MovieCard;
