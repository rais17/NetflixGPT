import React, { useEffect, useState } from 'react'
import OverlayBlack from '../Components/OverlayBlack'
import Input from '../Components/Input';
import SearchButton from '../Components/SearchButton';
import SearchMovies from '../Components/SearchMovies';
import useOpenAI from '../CustomHooks/useOpenAI';
import {
  toggleSearchBar,
  removeSearchMovie,
} from "../Utils/Slices/searchMovieSlice";
import { useDispatch } from 'react-redux';


const GPT = () => {
  const [searchText, setSearchText] = useState('');
  const [searchString, setSearchString] = useState('');
  const [load, setLoad] = useState(false);
  const dispatch = useDispatch();

  useOpenAI(searchString);
  

  useEffect(() => {
    dispatch(toggleSearchBar(false));
    return () => dispatch(toggleSearchBar(true));
  }, []);

  return (
    <div className="relative w-full h-screen overflow-y-scroll bg-center bg-no-repeat bg-cover bg-AuthBG">
      <OverlayBlack isFixed={true} />
      <div className="relative z-10 w-full h-full space-y-10 top-48">
        <div className="flex items-center w-full mx-auto sm:w-2/3 xl:w-1/2 xxs:max-sm:px-4">
          <Input
            name="search"
            type="text"
            placeholder="Let AI help you pick a movie..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="border border-[#E50914] border-opacity-50 bg-black bg-opacity-90"
          />
          <SearchButton
            text="Let's Go"
            onClick={() => {
              setLoad(true);
              dispatch(removeSearchMovie());
              setSearchString(searchText);
            }}
            className="w-1/3"
          />
        </div>
        <SearchMovies load={load} setLoad={setLoad} /> 
      </div>
    </div>
  );
}

export default GPT