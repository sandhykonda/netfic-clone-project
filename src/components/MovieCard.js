import { useNavigate } from "react-router-dom";
import { IMG_CDN_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addHomeDetails } from "../utils/moviesSlice";

const MovieCard = ({ posterPath, movies }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(addHomeDetails(movies));
    navigate("/homedetails");
  };
  if (!posterPath) return null;

  return (
    <div className="w-36 md:w-48 pr-4">
      <img
        alt="Movie Card"
        src={IMG_CDN_URL + posterPath}
        onClick={handleClick}
      />
    </div>
  );
};

export default MovieCard;
