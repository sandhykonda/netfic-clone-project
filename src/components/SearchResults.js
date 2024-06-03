import React from "react";
import SearchResultsMovieCard from "./SearchResultsMovieCard";
import { useSelector } from "react-redux";

function SearchResults() {
  const searchResults = useSelector((store) => store.search.searchResults);
  return (
    <div className="p-4 ">
      <div className="flex  overflow-x">
        <div className="flex">
      
          {searchResults?.map((movie) => (
            <SearchResultsMovieCard
              key={movie.id}
              posterPath={movie?.poster_path}
              movie={movie}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
