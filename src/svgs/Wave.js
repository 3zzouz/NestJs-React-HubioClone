import React from "react";

function wave(props) {
  return (
    <div className={"border-none -my-1"}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="220 -30 1200 300">
        <path
          fill={props.position==="start"?"#E74A3E":"#F6603B"}
          fillOpacity="1"
          d="M0,32L80,32C160,32,320,32,480,64C640,96,800,160,960,197.3C1120,235,1280,245,1360,250.7L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
}

export default wave;
