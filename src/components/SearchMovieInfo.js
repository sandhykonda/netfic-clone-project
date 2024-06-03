import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IMG_CDN_URL, LOGO } from "../utils/constant";
import { useNavigate } from "react-router-dom";
import { addWatchMovieDetails, toggleSearchView } from "../utils/SearchSlice";
import { addToFavorites } from "../utils/FavoritesSlice";

function SearchMovieInfo() {
  const user = useSelector((store) => store.user);
  const showSearch = useSelector((store) => store.search.showSearch);
  const movieDetails = useSelector((store) => store.search?.movieDetails);
   console.log(movieDetails)
  const favorites = useSelector((store) => store.favMovies?.favorites);
  console.log(favorites);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    dispatch(addWatchMovieDetails(movieDetails));
    navigate("/watchVideo");
  };
  const handleAddToFavorites = () => {
    dispatch(addToFavorites(movieDetails));
    navigate("/favorites");
  };

  const handleSearchClick = () => {
  
    dispatch(toggleSearchView());
  };
  navigate("/browse");

  return (
    <div className="flex items-start  space-x-4 text-white h-screen bg-black from-black opacity-500">
      <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between ">
        <img className="w-48 ml-20" src={LOGO} alt="logo" />
        {user && (
          <div className=" flex p-4 m-2">
            <button
              className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
              onClick={handleSearchClick}
            >
              {showSearch ? "Home page" : " Search"}
            </button>
          </div>
        )}
      </div>
      <div className="p-8 mt-20 bg-black hidden md:inline-block ">
        <img
          src={IMG_CDN_URL + movieDetails?.poster_path}
          alt="poster"
          className="h-80 w-80 m-4"
        />
      </div>
      <div className="p-14 mt-20 ">
        <h2 className="text-2xl">
          {"Title  :  " + movieDetails?.original_title}
        </h2>
        <p className="text-lg">
          {"Language  :  " + movieDetails?.original_language}
        </p>
        <p className="text-lg">
          {"Release Date  :  " + movieDetails?.release_date}
        </p>
        <p className="text-lg">
          {"Vote Average  :  " + movieDetails?.vote_average}
        </p>
        <p className="text-lg">
          {"Vote Count  :  " + movieDetails?.vote_count}
        </p>

        <p className="mr-10 text-lg ">{movieDetails?.overview}</p>
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

export default SearchMovieInfo;

