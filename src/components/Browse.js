import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcoming";
import GPTSearch from "./GPTSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showgptSearch)      //toggling feature
useNowPlayingMovies();
usePopularMovies();
useUpcomingMovies();

  return (
    <div>
      <Header />
      {showGptSearch ? (<GPTSearch/>) : (<>   <MainContainer/>
        <SecondaryContainer/> </>)}
     
    </div>
  );
};

export default Browse;
