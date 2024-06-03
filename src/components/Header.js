import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constant";
import { toggleSearchView } from "../utils/SearchSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showSearch = useSelector((store) => store.search.showSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, dispalayName } = user.uid;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            dispalayName: dispalayName,
          })
        );

        navigate("/browse");
      } else {
        dispatch(removeUser());

        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);
  const handleSearchClick = () => {
    dispatch(toggleSearchView());
  };

  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img className="w-44 mx-auto md:mx-0" src={LOGO} alt="logo" />
      {user && (
        <div className=" flex p-4 m-2">
          <button
            className="py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg"
            onClick={handleSearchClick}
          >
            {showSearch ? "Home page" : " Search"}
          </button>

          <button
            onClick={handleSignOut}
            className=" font-bold text-white  bg-red-800  rounded-lg py-2 px-4 mx-4 my-2"
          >
            sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
