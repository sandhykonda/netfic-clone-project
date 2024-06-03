import { BG_URL } from "../utils/constant";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
const Search = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img  className=" " src={BG_URL} alt="logo" />
      </div>
      <div className="">
        <SearchBar />
        <SearchResults />
      </div>
    </>
  );
};

export default Search;
