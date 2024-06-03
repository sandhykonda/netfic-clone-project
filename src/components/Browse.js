
import Header from "./Header";
import MainContainer from "./MainContainer"; 
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import usePopularMovies from "../Hooks/usePopularMovies";
import Search from "./Search";
import { useSelector } from "react-redux";
import useTrendingMovies from "../Hooks/useTrendingMovies";
import useUpComingMovies from "../Hooks/useUpcomingMovies";

const Browse = () => {
  const showSearch = useSelector((store) => store.search.showSearch);
  
  useNowPlayingMovies();
  usePopularMovies();
   useTrendingMovies();
   useUpComingMovies();
  return (
    <div>
      <Header />
      {showSearch ? (
        <Search />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
