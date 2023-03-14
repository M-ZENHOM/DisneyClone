import { useState } from "react";
import { Link } from "react-router-dom";
import newLogo from "../assets/NewLogo.png";
import userAuth from "../utils/userAuth";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const { name, photo, AuthHandler } = userAuth();

  return (
    <div
      className={`w-full h-[8vh] ${
        name ? "bg-[#1f2230] fixed top-0 z-10" : "bg-[#090b138a]"
      }  z-5 md:h-[11vh] `}
    >
      <div className="w-5/6 h-full mx-auto flex justify-between items-center text-white">
        <Link to="/home">
          <img src={newLogo} width={120} height={120} alt="Disney logo" />
        </Link>
        {!name ? (
          <Link onClick={AuthHandler} to="/">
            Login
          </Link>
        ) : (
          <>
            <img
              className="w-[50px] rounded-full cursor-pointer"
              src={photo}
              alt="userImg"
              onClick={() => setOpen(!open)}
            />

            {open && (
              <div className="absolute right-[105px] top-[75px] md:right-5 bg-[#1f2230] p-4 rounded-md text-center z-10">
                <h2>{name}</h2>
                <button
                  className="outline-none border-none bg-red-700 p-2 rounded-md mt-5 hover:bg-red-900 transition-colors duration-500 "
                  onClick={AuthHandler}
                >
                  Signout
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
