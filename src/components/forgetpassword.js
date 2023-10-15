import React, { useState, useEffect } from "react";
import axiosapi from "../config/axios";
import { useNavigate } from "react-router-dom";

function Forgetpassword() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Reset Password";
  }, []);
  const navigator = useNavigate();
  const [email, setEmail] = useState("");
  const resetPassword = async () => {
    axiosapi
      .post("http://localhost:5000/auth/resetpassword", { email: email })
      .then((res) => {
        console.log("response : ", res);
        alert(
            "Please check the provided email :" +
            email
        );
        navigator("/login");
      })
      .catch((err) => {
        console.log("error : ", err);
        alert("Error resetting your password : " + err.response.data.message);
      });
  };
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className="h-[100vh] w-[100vw] sm:overflow-hidden">
      <div className="mx-auto flex h-full w-[90%] flex-col items-center sm:my-[5vh] sm:h-[90vh] sm:w-[60vw] sm:rounded-2xl sm:border sm:shadow-2xl">
        <img
          src="https://hubio-dev.web.app/Hubio-vertical.afc1a40d.svg"
          alt=""
          className="mx-auto mt-16 w-[83.5%] max-w-sm sm:mt-10 md:mt-9 xl:mt-2"
        />
        <div className="mx-auto mt-8 text-center text-2xl font-extrabold uppercase leading-relaxed text-[#ff5858]">
          <h3>Return to work</h3>
          <h3>Champion !</h3>
        </div>
        <div className="mt-20 text-center">
          <h3 className="mb-5 text-gray-500">Put your email</h3>
          <input
            type="email"
            className={
              (isClicked ? "border-red-700" : " border-gray-400") +
              " h-[8vw] w-[70vw] rounded-lg border pl-6 pr-3 text-sm outline-none hover:bg-[rgba(213,83,124,0.01)] sm:h-[7vw] sm:w-[55vw] sm:text-base md:h-[5vw] md:rounded-2xl lg:h-[4vw] lg:w-[50vw] xl:h-[3vw] xl:w-[40vw] xl:rounded-full"
            }
            onClick={() => setIsClicked(true)}
            onBlur={() => setIsClicked(false)}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button
          onClick={resetPassword}
          className="mb-5 mt-5 rounded-2xl bg-[rgba(237,20,90,.7)] px-[15vw] py-[2vw] text-white drop-shadow-2xl hover:bg-[rgba(237,20,90,.8)] sm:px-16 sm:py-2 sm:text-xl md:px-12 lg:rounded-3xl xl:rounded-full"
        >
          Send
        </button>
        <p className="mt-6 w-[85%] text-center text-xs text-gray-500 sm:mt-7 sm:w-[95%] sm:text-sm md:mt-8 md:text-base lg:mt-10 xl:mt-36">
          Click on send and check your mailbox, our OWL is waiting for you there
        </p>
      </div>
    </div>
  );
}

export default Forgetpassword;
