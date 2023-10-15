import React, { useEffect, useState } from "react";
import axiosapi from "../config/axios";
function Membership({ changeImg }) {
  const [auth, setAuth] = useState({});
  useEffect(() => {
    setAuth(JSON.parse(localStorage.getItem("user")));
  }, []);

  const [inputValues, setInputValues] = useState({
    cin: "",
    newPassword: "",
    confirmNewPassword: "",
    file: null,
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedFileName, setSelectedFileName] = useState("");
  function hasSixDigits(str) {
    return /^\d{6}$/.test(str);
  }
  const updateCin = async (cin) => {
    if (!hasSixDigits(cin)) {
      alert("Your CIN should have exactly 6 digits");
      return;
    }
    axiosapi
      .patch(
        "http://localhost:5000/auth/updateuserby/" + auth?.user?._id,
        {
          cin: cin,
        },
        {
          headers: { Authorization: `Bearer ${auth?.token?.accessToken}` },
        }
      )
      .then((res) => {
        console.log("Response is : ", res.data);
        localStorage.setItem("user", JSON.stringify(res.data));
        setAuth(res.data);
        alert("CIN updated successfully to " + cin);
      })
      .catch((err) => {
        console.log("Error : ", err.response.data.message);
        alert("Error updating CIN " + err.response.data.message);
      });
  };
  const updatePass = async (pass, confirm) => {
    if (pass != confirm) {
      alert("Please enter a matching password and confirm password");
      return;
    }
    if (pass.length < 6) {
      alert("Please enter a valid password");
      return;
    }
    axiosapi
      .patch(
        "http://localhost:5000/auth/modifyPassword/" + auth?.user?._id,
        {
          newPassword: pass,
        },
        {
          headers: { Authorization: `Bearer ${auth?.token?.accessToken}` },
        }
      )
      .then((res) => {
        console.log("Response is : ", res);
        localStorage.setItem("user", JSON.stringify(res.data));
        setAuth(res.data);
        alert("Password updated successfully");
      })
      .catch((err) => {
        console.log("Error : ", err.response.data.message);
        alert("Error updating Password " + err.response.data.message);
      });
  };
  const handleImageInputChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.includes("image")) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setSelectedFileName(file.name);
      setInputValues((prev) => ({ ...prev, file: file }));
    } else {
      alert("Please select a valid image file.");
      setSelectedImage(null);
      setSelectedFileName("");
    }
  };
  const updateImage = async () => {
    if (!inputValues.file) return;
    const formData = new FormData();
    formData.append("file", inputValues.file);
    axiosapi
      .patch(
        "http://localhost:5000/auth/updateuserby/" + auth?.user?._id,
        formData,
        {
          headers: { Authorization: `Bearer ${auth?.token?.accessToken}` },
        }
      )
      .then((res) => {
        console.log("response : ", res);
        localStorage.setItem("user", JSON.stringify(res.data));
        setAuth(res.data);
        changeImg();
        alert("Profile Image updated successfully");
      })
      .catch((err) => {
        console.log("error : ", err.response.data.message);
        alert("Error updating Profile Image " + err.response.data.message);
      });
  };
  return (
    <div className="flex flex-col space-y-7">
      <div className="flex w-full justify-between border-b-[1px] border-black border-opacity-50 py-2 pr-3">
        <div className="flex items-center space-x-2">
          <h1 className="text-[2vw] font-bold">Are You a Member ?</h1>
          <p className="w-[16.7vw] text-xs text-gray-500">
            in the case you are, enter your CIN and we will enhance your study
            experience
          </p>
          <input
            placeholder="CIN"
            type="text"
            minLength={6}
            className="h-9 w-[30vw] rounded-lg border pl-1 pr-3 text-sm outline-none hover:bg-[rgba(213,83,124,0.01)] sm:w-[25vw] sm:text-sm lg:w-[18vw]"
            onChange={(e) =>
              setInputValues((prev) => ({ ...prev, cin: e.target.value }))
            }
          />
        </div>
        <button
          onClick={() => updateCin(inputValues.cin)}
          className="mb-5 mt-5 rounded-2xl bg-[#ff254c] px-6 py-2 text-white drop-shadow-2xl hover:bg-[rgba(237,20,90,.8)] xl:mt-0"
        >
          Confirm
        </button>
      </div>
      <div className="flex w-full items-center justify-between border-b-[1px] border-black border-opacity-50 pb-5 pr-3">
        <div className="flex w-[75%] items-center space-x-20">
          <h1 className="w-1/5 text-[1.8vw] font-bold">Your Photo</h1>
          <div className="mx-auto flex min-w-[20%] max-w-[25%] items-center overflow-hidden rounded-full border">
            <img
              src={
                selectedImage
                  ? selectedImage
                  : "https://hubio-dev.web.app/member.02d8a8ef.png"
              }
              alt="member"
              className="mt-0 aspect-square h-full w-full"
            />
          </div>
          <button
            className="max-w-[13%]"
            onClick={() => document.getElementById("imageInput").click()}
          >
            Choose Image
          </button>
          {selectedFileName && (
            <div className="flex w-[25%] flex-col">
              <p>Selected File:</p>
              <p className="block max-w-[90%] overflow-scroll">
                {selectedFileName}
              </p>
            </div>
          )}
          <input
            type="file"
            id="imageInput"
            accept="image/*"
            onChange={(e) => handleImageInputChange(e)}
            style={{ display: "none" }}
            className="max-w-[20%]"
          />
        </div>
        <button
          onClick={updateImage}
          className="my-5 w-[18%] rounded-2xl bg-[#ff254c] py-2 text-sm text-white drop-shadow-2xl hover:bg-[rgba(237,20,90,.8)] xl:mt-0"
        >
          Change your Photo
        </button>
      </div>
      <div className="flex w-full items-center justify-between border-b-[1px] border-black border-opacity-50 py-2 pr-3">
        <h1 className="text-[2vw] font-bold">update Password</h1>
        <div className="flex w-[60%] items-center justify-between">
          <input
            placeholder="New Password"
            type="password"
            onChange={(e) =>
              setInputValues((prev) => ({
                ...prev,
                newPassword: e.target.value,
              }))
            }
            className="h-9 w-[15vw] rounded-lg border pl-1 pr-3 text-sm outline-none hover:bg-[rgba(213,83,124,0.01)] sm:text-sm"
          />
          <input
            placeholder="Confirm Password"
            type="password"
            onChange={(e) =>
              setInputValues((prev) => ({
                ...prev,
                confirmNewPassword: e.target.value,
              }))
            }
            className="h-9 w-[15vw] rounded-lg border pl-1 pr-3 text-sm outline-none hover:bg-[rgba(213,83,124,0.01)] sm:text-sm"
          />
          <button
            onClick={(e) =>
              updatePass(
                inputValues.newPassword,
                inputValues.confirmNewPassword
              )
            }
            className="mb-5 mt-5 rounded-2xl bg-[#ff254c] px-6 py-2 text-white drop-shadow-2xl hover:bg-[rgba(237,20,90,.8)] xl:mt-0"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default Membership;
