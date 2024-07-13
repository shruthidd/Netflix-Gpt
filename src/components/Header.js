import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configueSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showgptSearch = useSelector( store => store.gpt.showgptSearch);

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
    const unsubsrcibe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubsrcibe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handlelanguageChange = (e) => {
    // console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <>
      <div className="absolute px-8 py-2  w-screen bg bg-gradient-to-b    from-black z-10 flex  justify-between">
        <img className="w-44" src={LOGO} alt="logo" />

        {user && (
          <div className="flex py-4 ">
            { showgptSearch &&<select onChange={handlelanguageChange } className="bg-gray-800 text-white m-2 p-1 rounded-sm">
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>}
            <button
              onClick={handleGptSearchClick}
              className="mx-3 my-1 p-1 rounded-lg text-white bg-purple-900 font-semibold"
            >
              {showgptSearch ? "HomePage" : "GPTSearch"}
            </button>
            <img className="w- 10 h-10 " src={user?.photoURL} />
            <button
              onClick={handleSignOut}
              className="font-bold text-white py-2 ml-1 cursor-pointer"
            >
              (Sign Out)
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
