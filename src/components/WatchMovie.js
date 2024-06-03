import React from "react";
import { useSelector } from "react-redux";
import { LOGO } from "../utils/constant";
import { useNavigate } from "react-router-dom";

function WatchMovie() {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

  const handleHomeClick = () => {
    navigate("/browse");
  };
  return (
    <div className="flex items-start space-x-4 text-white h-screen bg-black opacity-900 flex-nowrap">
      <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between ">
        <img className="w-48" src={LOGO} alt="logo" />
        {user && (
          <div className=" flex p-4 m-2">
            <button
              className="py-2 px-4 mx-4 my-2 bg-blue-800 text-white rounded-lg "
              onClick={handleHomeClick}
            >
              back to home
            </button>
          </div>
        )}
      </div>
      <div>
        <h1 className="pl-8 justify-content-center">Trailer</h1>
        <div class="text-white  flex justify-center items-center h-screen w-full aspect-video">
          <p class="text-center mt-8 text-3xl">
            To watch this movie, please visit
            <a
              href="https://www.netflix.com/in/"
              target="_blank"
              rel="noopener noreferrer"
              class="underline "
            >
              {" "}
              -Netflix Official Website
            </a>
          </p>
        </div>
        <a
          className="w-screen aspect-video"
          href="https://www.netflix.com/in/"
          target="_blank"
          rel="noopener noreferrer"
          class="underline"
        >
          {" "}
          -Netflix Official Website
        </a>
      </div>
    </div>
  );
}

export default WatchMovie;
