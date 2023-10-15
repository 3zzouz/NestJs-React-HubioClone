import React from "react";

function Popup() {
  return (
    <div className="absolute left-1/2 top-2 mx-auto flex w-[30%]  min-w-[300px] -translate-x-1/2 animate-pulse items-center rounded-lg border bg-white px-2 py-2 transition-all sm:md:justify-between">
      <svg
        className="w-[6%]"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path
          d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 15V17H13V15H11ZM11 7V13H13V7H11Z"
          fill="rgba(70,146,221,1)"
        ></path>
      </svg>
      <p>Please accept the terms and conditions first</p>
    </div>
  );
}

export default Popup;
