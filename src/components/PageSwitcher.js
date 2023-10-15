import React from "react";
import { Link } from "react-router-dom";

function PageSwitcher() {
  return (
    <div className="h-[100vh] flex justify-center items-center">
      <div className='z-100 mx-auto my-16 flex h-14 w-72 cursor-pointer justify-between rounded-2xl bg-[#fe3052] font-["Lato"] text-xl font-medium'>
        <button className="my-auto ml-1 h-[90%] w-[50%] rounded-xl bg-white px-2 text-[#f23c4c]">
          <Link to="/joinStudent">I am a Student</Link>
        </button>
        <button className="mx-auto text-white">
          <Link to="/joinTrainer">I am a Trainer</Link>
        </button>
      </div>
    </div>
  );
}

export default PageSwitcher;
