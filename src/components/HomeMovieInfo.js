import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IMG_CDN_URL, LOGO } from "../utils/constant";
import { useNavigate } from "react-router-dom";
import { addToFavorites } from "../utils/FavoritesSlice";
import { addWatchMovieDetails } from "../utils/SearchSlice";

function HomeMovieInfo() {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const homeDetails = useSelector((store) => store.movies?.homeDetails);
  const handleAddToFavorites = () => {
    dispatch(addToFavorites(homeDetails));
    navigate("/favorites");
  };
  const handleClick = () => {
    dispatch(addWatchMovieDetails(homeDetails));
    navigate("/watchVideo");
  };

  console.log(homeDetails);
  const handleHomeClick = () => {
    navigate("/browse");
  };

  return (
    <div className="flex items-start  space-x-4 text-white h-screen bg-black from-black opacity-500 ">
      <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between  ">
        <img className="w-48" src={LOGO} alt="logo" />
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
      <div className="p-4 mt-20 bg-b md:w-1/3 ml-10 hidden md:inline-block">
        <img
          src={IMG_CDN_URL + homeDetails?.poster_path}
          alt="poster"
          className="h-80 w-80 m-4"
        />
      </div>
      <div className="p-14 mt-20 ">
        <h2 className="text-2xl ">
          {"Title  :  " + homeDetails?.original_title}
        </h2>
        <p className="text-lg ">
          {" "}
          {"Language  :  " + homeDetails?.original_language}
        </p>
        <p className="text-lg ">
          {"Release Date  :  " + homeDetails?.release_date}{" "}
        </p>
        <p className="text-lg ">
          {"Vote Average  :  " + homeDetails?.vote_average}
        </p>
        <p className="text-lg ">
          {"Vote Count  :  " + homeDetails?.vote_count}
        </p>
        <p className="text-lg ">{homeDetails?.overview + "......"}</p>
        <div>
          <button
            className="mt-8 p-2 bg-white text-xl py-2 text-black font-bold  rounded-lg hover:bg-opacity-50"
            onClick={handleClick}
          >
            Watch Video
          </button>
          <button
            className="mt-8 p-2 bg-white text-xl py-2 text-black font-bold ml-2  rounded-lg hover:bg-opacity-50 mx-2"
            onClick={handleAddToFavorites}
          >
            Add to Favorites
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeMovieInfo;
