import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axiosapi from "../config/axios";

function Login() {
  const [isClicked1, setIsClicked1] = useState(false);
  const [isClicked2, setIsClicked2] = useState(false);
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  console.log('/',login,'/')
  useEffect(() => {
    document.title = "Log In";
    window.scrollTo(0, 0);
  }, []);

  const signin = () => {
    axiosapi
      .post("http://localhost:5000/auth/signin", {
        userName: login,
        password: password,
      })
      .then((res) => {
        console.log(res.data, "res ******");
        localStorage.setItem("user", JSON.stringify(res.data));
        alert(res.data.user.userName + " is successfully logged in");
        navigate("/User");
      })
      .catch((error) => {
        console.log("error ", error);
        alert("Error logging in " + error.response?.data.message);
      });
  };
  return (
    <div className="flex flex-row pb-10 xl:max-h-[100vh]  xl:overflow-hidden">
      <img
        src="https://hubio-dev.web.app/Ellipse%201%20copie.7a4f3b9a.webp"
        alt=""
        className="absolute -top-[40%] z-[-1] h-[140vh] w-[100vw] opacity-20 xl:-top-[20%] xl:right-[40%] xl:h-[100%] "
      />
      <div className="mx-auto mt-10 flex min-h-[95vh] w-[70%] flex-col items-center space-y-16 xl:min-w-[45vw] xl:space-y-14">
        <div className="mx-auto flex w-[90%] items-center ">
          <h1 className="text-[1.5rem] font-bold uppercase text-[#e2386c] sm:text-[2rem]">
            <a href="/">Hubio</a>
          </h1>
        </div>
        <button className="flex items-center justify-between rounded-full border bg-white px-[3vw] py-[2.5vw] text-sm drop-shadow-2xl sm:px-6 sm:py-4 sm:text-base">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt=""
            className="mr-2 w-[3vw] min-w-[15px] max-w-[25px]"
          />
          Sign In With Google
        </button>
        <div className="flex w-[110%] items-center lg:w-[70%]">
          <div className="mr-auto h-[0.1vh] w-[35%] bg-black lg:w-[33%]"></div>
          <h1 className="mx-0 w-[39%] text-center text-xs sm:text-base">
            or Sign In with Email
          </h1>
          <div className="ml-auto h-[0.1vh] w-[35%] bg-black lg:w-[33%]"></div>
        </div>
        <div className="flex w-[70%] flex-col items-center space-y-6">
          <form className="flex w-[90%] flex-col items-center space-y-5">
            <input
              placeholder="Your login Or email"
              className={
                (isClicked1 ? "border-red-700" : " border-gray-400") +
                " h-[9vw] w-[70vw] rounded-lg border pl-6 pr-3 text-sm outline-none hover:bg-[rgba(213,83,124,0.01)] sm:h-[7vw] sm:w-[60vw] sm:text-base md:h-[6vw] md:w-[100%] md:rounded-2xl lg:h-[5vw] lg:w-[90%] xl:h-[3vw] xl:w-[100%] xl:rounded-full"
              }
              onClick={() => setIsClicked1(true)}
              onBlur={() => setIsClicked1(false)}
              onChange={(e) => setLogin(e.target.value)}
            />
            <input
              placeholder="Password"
              type="password"
              className={
                (isClicked2 ? "border-red-700" : " border-gray-400") +
                " h-[9vw] w-[70vw] rounded-lg border pl-6 pr-3 text-sm outline-none hover:bg-[rgba(213,83,124,0.01)] sm:h-[7vw] sm:w-[60vw] sm:text-base md:h-[6vw] md:w-[100%] md:rounded-2xl lg:h-[5vw] lg:w-[90%] xl:h-[3vw] xl:w-[100%] xl:rounded-full"
              }
              onClick={() => setIsClicked2(true)}
              onBlur={() => setIsClicked2(false)}
              onChange={(e) => setPassword(e.target.value)}
            />
          </form>
          <div className="flex w-[140%] justify-between sm:w-[120%] md:w-[90%] lg:w-[80%] xl:w-[90%]">
            <Link
              to="/join"
              className="text-[min(4vw,1.1rem)] text-gray-500 hover:text-black sm:text-base"
            >
              Register
            </Link>
            <Link
              to="/ForgetPassword"
              className="text-[min(4vw,1.1rem)] text-gray-500 hover:text-black sm:text-base"
            >
              Forgot Password ?
            </Link>
          </div>
          <button
            type="submit"
            onClick={signin}
            className="mb-5 mt-5 rounded-2xl bg-[rgba(237,20,90,.7)] px-[20vw] py-[2vw] text-white drop-shadow-2xl hover:bg-[rgba(237,20,90,.8)] sm:px-28 sm:py-2 sm:text-xl md:py-3 lg:rounded-3xl lg:py-4 xl:mt-0 xl:rounded-full"
          >
            Login
          </button>
        </div>
        <div className="flex w-[110px] justify-between">
          <h3>With Love</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-[24px]"
          >
            <path
              d="M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3Z"
              fill="rgba(255,20,34,1)"
            ></path>
          </svg>
        </div>
      </div>
      <div className="hidden bg-[url('https://hubio-dev.web.app/motivation.837490ba.webp')] bg-cover bg-top bg-no-repeat xl:mr-auto xl:inline-block xl:h-[100vh] xl:min-w-[60vw]"></div>
    </div>
  );
}

export default Login;
