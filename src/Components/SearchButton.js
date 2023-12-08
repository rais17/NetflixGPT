import React from 'react'

const SearchButton = ({text, onClick, className = ""}) => {
  return (
    <button
      onClick={onClick}
      className={`bg-[#E50914] p-3 font-sans text-base font-normal text-white ${className}`}
    >
      {text}
    </button>
  );
}

export default SearchButton