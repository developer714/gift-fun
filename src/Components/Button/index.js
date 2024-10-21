import React from "react";

export default function Button({ backgroundColor, className, children, style }) {
  const button = 
    <button className={`text-[14px] sm:text-[18px] py-[14px] px-[40px] text-white bg-[rgb(22,22,22)] hover:bg-black rounded-[28px] transition ${className}`} style={style}>
      {children}
    </button>;
  return button;
}
