import React from 'react'

const Button = ({Icon, title}) => {
  return (
    <button role="button" className=" button-55">
      <Icon className="text-xl text-black at1054:text-2xl" />
      <h1 className="font-sans text-xl font-normal text-gray-700 at1054:text-2xl">
        {title}
      </h1>
    </button>
  );
}

export default Button