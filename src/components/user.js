import React, { useEffect, useState } from "react";
import Membership from "./membership";
import axiosapi from "../config/axios";
import { useNavigate } from "react-router-dom";
import ChatComponent from "./chat";

function User() {
  const [auth, setAuth] = useState({});
  const navigator = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
    const user = JSON.parse(localStorage.getItem("user"));
    setAuth(user);
    if (Object.keys(user).length == 0) navigator("/login");
    else document.title = user?.user["userName"];
  }, []);

  const Logout = () => {
    axiosapi
      .get("http://localhost:5000/auth/logout", {
        headers: { Authorization: `Bearer ${auth?.token?.accessToken}` },
      })
      .then((res) => {
        navigator("/login");
        const emptyUserObject = {};
        //console.log("Type of auth : ",typeof JSON.stringify(res.data));
        localStorage.setItem("user", JSON.stringify(emptyUserObject));
        alert("Successfully logged out");
        setAuth(emptyUserObject);
        console.log(auth);
      })
      .catch((err) => {
        alert("Error logging out : ", err?.response?.data.message);
      });
  };
  const changeImg = () => setAuth(JSON.parse(localStorage.getItem("user")));
  return (
    <div className="flex flex-row">
      <div className="flex h-[100vh] w-[9vw] flex-col justify-between rounded-r-lg bg-radialgradient md:mx-2 md:mt-[1vh] md:h-[98vh] md:w-[18vw] md:rounded-xl">
        <div className="flex h-[100%] flex-col space-y-14">
          <div className="mx-auto mt-5 flex h-[20%] w-[7vw] cursor-pointer items-center justify-center overflow-hidden rounded-full border-4 border-white bg-white">
            <img
              src={"http://localhost:5000/app/file/users/" + auth?.user?.file}
              alt="member"
              className="w-[7.5vw]"
            />
          </div>
          <ChatComponent className="h-[80%]" />
        </div>
      </div>
      <div className="flex flex-col space-x-20">
        <button
          onClick={() => {
            Logout();
          }}
          className="my-10 ml-auto flex w-[10vw] items-center justify-center space-x-0.5 rounded-xl border bg-white py-3 text-xs drop-shadow-lg md:space-x-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-[20%] min-w-[1rem]"
          >
            <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C15.2713 2 18.1757 3.57078 20.0002 5.99923L17.2909 5.99931C15.8807 4.75499 14.0285 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C14.029 20 15.8816 19.2446 17.2919 17.9998L20.0009 17.9998C18.1765 20.4288 15.2717 22 12 22ZM19 16V13H11V11H19V8L24 12L19 16Z"></path>
          </svg>
          <p>Logout</p>
        </button>
        <Membership changeImg={changeImg} />
      </div>
    </div>
  );
}

export default User;
