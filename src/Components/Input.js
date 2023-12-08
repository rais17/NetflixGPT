import React from 'react'

const Input = ({name, type, placeholder, value, onChange , className = ""}) => {
  return (
    <input
      className={`w-full bg-[#313131] p-3 font-sans text-base font-normal text-slate-300 focus:outline-none ${className}`}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required
    />
  );
}

export default Input