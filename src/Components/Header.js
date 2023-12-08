import React, { useState } from 'react'
import NetflixGPT from "../Assets/Netflix_Logo.png";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from "../Utils/firebase";
import { Link } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";
import { toggleSearchBar } from '../Utils/Slices/searchMovieSlice';
import { BiHide, BiMenuAltRight } from "react-icons/bi";
const Header = () => {

  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  // const dispatch = useDispatch();
  const toggleSearch = useSelector(store => store.searchMovie.toggleSearch);

  const handleSignOut = () => {
    signOut(auth)
      .catch((error) => {
        navigate("/error");
      })
  };

  
  return (
    <div
      className={`absolute z-20 flex w-full items-center justify-between md:px-10 ${
        toggleSearch ? `` : `backdrop-blur-3xl`
      }`}
    >
      <Link to="/browse" style={{ display: "contents" }}>
        <div className="at900:max-w-[230px] max-w-[180px]">
          <img src={NetflixGPT} alt="logo" />
        </div>
      </Link>

      {user && (
        <div className="relative flex flex-col px-2">
          <BiMenuAltRight
            onClick={() => setShowMenu((prev) => !prev)}
            className="self-end text-xl text-white md:hidden"
          />
          <div
            className={`${
              showMenu
                ? `xxs:max-md:absolute -top-6 right-8`
                : `xxs:max-md:hidden`
            } flex flex-col items-center gap-2 md:flex-row md:gap-4 `}
          >
            <Link to={toggleSearch ? `/GPT` : `/browse`}>
              <button className="xxs:max-md:whitespace-nowrap xxs:max-md:w-full flex items-center gap-2 rounded border-[0.5px] border-gray-500 px-4 py-1 font-sans text-xs font-normal text-slate-200 backdrop-blur-3xl md:text-sm">
                {toggleSearch ? `Search With AI` : `Go To Browse`}
                <IoIosSearch className="text-sm font-bold md:text-base" />
              </button>
            </Link>

            <button
              onClick={handleSignOut}
              className="rounded  bg-[#C11119] px-4 py-1 font-sans text-xs font-normal text-white md:text-sm"
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header