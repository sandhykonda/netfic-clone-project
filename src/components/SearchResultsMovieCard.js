import React from "react";
import { useDispatch } from "react-redux";
import { addMovieDetails } from "../utils/SearchSlice";
import { useNavigate } from "react-router-dom";
export default function SearchResultsMovieCard({ movie }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    dispatch(addMovieDetails(movie));
    navigate("/details");
  };
  if (!movie.poster_path) {
    return null;
  }
  return (
    <div className="bg-gray-900 shadow-md py-8 pl-4">
      <div className="w-36 pr-4 z-10 ">
        <img
          src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
          alt="movie card"
          onClick={handleClick}
        />
        <h1 className="text-white text-bold">{movie.original_title}</h1>
      </div>
    </div>
  );
}
