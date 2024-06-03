
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOGO } from "../utils/constant";
import { removeToFavorites } from "../utils/FavoritesSlice";
import { useNavigate } from "react-router-dom";
import "./fav.css"

function FavoriteList() {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const favoriteListDetails = useSelector((store) => store.favorite?.favMovies);
  const handleClick = (movieId) => {
    dispatch(removeToFavorites(movieId));
  };
  const handleHomeClick = () => {
    navigate("/browse");
  };

  console.log(favoriteListDetails);

  return (
    <div className="flex items-start space-x-4 text-white h-screen bg-black opacity-900 flex-nowrap">
      <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between ">
        <img className="w-48" src={LOGO} alt="logo" />
        <h2 className="text-2xl font-semibold mt-10">My Favorite MovieList</h2>
        {user && (
          <div className=" flex p-4 m-2">
            <button
              className="py-2 px-4 mx-4 my-2 bg-blue-800 text-white rounded-lg "
              onClick={handleHomeClick}
            >
              back to home
            </button>
          </div>
        )}
      </div>

      <div className="p-8 flex items-start main ">
        {favoriteListDetails?.map((favMovies) => (
          <div className="bg-black-800 rounded-lg justify-between overflow-hidden shadow-lg w-3/4 md:w-auto ml-16 md:ml-0">
            <img
              src={"https://image.tmdb.org/t/p/w500" + favMovies.poster_path}
              alt="Show"
              className="h-60 w-56 m-4 mt-36"
            />
            <div className="p-4">
              <h3 className="text-xl text-white font-semibold mb-2">
                {favMovies.original_title?.substring(0, 25) || favMovies.name}
              </h3>
              <p className="text-white-400 w-full">
                {favMovies.overview?.substring(0, 90)}...
              </p>
              <button
                className="mt-4 px-4 py-2 bg-yellow-700 rounded hover:bg-opacity-50"
                onClick={() => handleClick(favMovies.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FavoriteList;
