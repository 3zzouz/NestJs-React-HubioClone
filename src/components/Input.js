import React from "react";
import { useState } from "react";

function Input(props) {
  const [showPassInvalid, setShowPassInvalid] = useState(false);
  const [showConfirmPassInvalid, setShowConfirmPassInvalid] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showRequired, setShowRequired] = useState(false);
  const [input, SetInput] = useState(props.info);
  const [isClicked, setIsClicked] = useState(false);
  const isRequired = props.type == "date" ? false : true;
  const isInputEmail = props.type == "email" ? true : false;
  const [showMailInvalid, setShowMailInvalid] = useState(false);
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const name = props.name;
  const handleChange = (e) => {
    props.func(e);
    SetInput(props.info);
    //i can't access props.info.name only from e.target.value
    //it works nevermind just i made a syntax mistake
    //console.log(props.name+" : "+input[name]);
    setShowRequired(isRequired && e.target.value == "");
    setShowMailInvalid(
      isInputEmail && e.target.value != "" && !isValidEmail(e.target.value)
    );
    setShowPassInvalid(
      !props.isConfirmPass &&
        props.type == "password" &&
        e.target.value.length < 6 &&
        e.target.value.length > 0
    );
    setShowConfirmPassInvalid(
      props.isConfirmPass &&
        props.type == "password" &&
        e.target.value != input.password &&
        e.target.value.length > 0
    );
  };
  return (
    <div className="w-[100%]">
      <h3 className="text-[1rem] sm:text-[3vw] md:text-[min(2vw,1.3rem)] xl:text-[min(1.5vw,1.4rem)]">
        {props.title}
      </h3>
      <input
        value={props.info.type}
        name={name}
        type={props.type}
        style={{
          backgroundColor: isClicked
            ? "rgba(237,20,90,.05)"
            : isHovered
            ? "rgb(252, 237, 251)"
            : "white",
          borderColor:
            isClicked || showRequired || showMailInvalid || showPassInvalid
              ? "#dc3545"
              : "grey",
        }}
        className={
          (showRequired || showMailInvalid || showPassInvalid
            ? "bg-[url('svgs/warning.svg')]"
            : "") +
          (isRequired==true ? " border " : "") +
          " h-[9vw] w-[70vw] rounded-lg border-transparent bg-[length:8%] bg-right bg-no-repeat bg-origin-content pl-6 pr-3 text-center outline-none sm:h-[7vw] sm:w-[60vw] md:h-[6vw] md:w-[100%] md:rounded-2xl lg:h-[5vw] lg:w-[90%] xl:h-[3vw] xl:w-[100%] xl:rounded-full"
        }
        onClick={() => {
          setIsClicked(true);
        }}
        onBlur={(e) => {
          setIsClicked(false);
          setShowRequired(isRequired && e.target.value == "");
        }}
        onInput={handleChange}
        onMouseOver={() => {
          setIsHovered(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
      />
      {showRequired && (
        <p className="mt-1 text-base text-red-500">
          {props.title} is Required
        </p>
      )}
      {showMailInvalid && (
        <p className="mt-1 text-base text-red-500">Email is invalid</p>
      )}
      {showPassInvalid && (
        <p className="mt-1 text-base text-red-500">
          Password must be at least 6 characters
        </p>
      )}
      {showConfirmPassInvalid && (
        <p className="mt-1 text-base text-red-500">Password must match</p>
      )}
    </div>
  );
}

export default Input;
