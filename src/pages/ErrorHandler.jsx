import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";

const ErrorHandler = () => {
  const error = useRouteError();
  const navigate = useNavigate();
  return (
    <div className="w-full h-[100vh] flex flex-col justify-center items-center text-2xl">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="my-5">
        <i>{error.statusText || error.message}</i>
      </p>
      <button
        className="bg-black p-4 rounded-md text-white mt-5 hover:bg-[#000000da] transition-colors duration-300"
        onClick={() => navigate("/", { replace: true })}
      >
        GO TO HOME
      </button>
    </div>
  );
};

export default ErrorHandler;
