import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { addSearchResults } from "../utils/SearchSlice";
function SearchBar() {
  const userSearchInput = useRef(null);
  const dispatch = useDispatch();
  const getUserInputMovies = async (searchResult) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${searchResult}&api_key=9b116ed96e77bf2269bdc9f767f5d434`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      dispatch(addSearchResults(data.results));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const handleInputChange = (event) => {
    const searchResult = event.target.value;
    getUserInputMovies(searchResult);
  };
  return (
    <div className="pt-[30%] md:pt-[10%] flex justify-center">
      <form
        className="w-full mx-1/2 md:mx-0 md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()} 
      >
        <input
          ref={userSearchInput}
          type="text"
          className="p-4 m-4 col-span-9 outline-none"
          placeholder="Search movies...."
          onChange={handleInputChange}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          type="button" 
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
