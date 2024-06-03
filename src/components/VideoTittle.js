import { useNavigate } from "react-router-dom";
const VideoTittle = ({ title, overview }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/favorites");
  };
  return (
    <div className="w-screen aspect-video pt-[10%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-5xl font-bold">{title}</h1>

      <p className="hidden md:inline-block py-4 text-2xl w-1/4">{overview}</p>
      <div className="my-4 md:m-0">
        <button className=" bg-white text-black py-1 md:py-4 px-3 md:px-12 text-xl  rounded-lg hover:bg-opacity-80">
          Play
        </button>
        <button
          className="hidden md:inline-block mx-2  bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg"
          onClick={handleClick}
        >
          MyFavoriteList
        </button>
      </div>
    </div>
  );
};

export default VideoTittle;
