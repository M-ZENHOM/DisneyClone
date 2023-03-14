import React from "react";
import MainImg from "../assets/Main-img.png";
import CtaImg from "../assets/cta-logo-one.svg";
import userAuth from "../utils/userAuth";

const Index = () => {
  const { AuthHandler } = userAuth();
  return (
    <div
      className="fixed top-0 w-full h-[100vh] bg-cover  z-[-1]"
      style={{ backgroundImage: `url('${MainImg}')` }}
    >
      <div className="fixed top-[0] left-[50%] translate-x-[-50%] text-center bg-[#00000073] w-full h-[100vh] flex flex-col justify-center items-center text-white ">
        <img
          className="w-[700px] md:w-[300px] h-[10vh] mt-4"
          src={CtaImg}
          alt="mainImg"
        />
        <button
          onClick={AuthHandler}
          className="w-[700px] bg-[#0063e5] p-3 font-bold rounded-md text-2xl uppercase md:w-[300px] my-5"
        >
          sign up now!
        </button>
        <p className=" w-[700px] text-md md:w-[300px]">
          Get Premier Access to Raya and the Last Dragon for an additional fee
          with a Disney+ subscription. As of 03/26/21, the price of Disney+ and
          The Disney Bundle will increase by $1.
        </p>
      </div>
    </div>
  );
};

export default Index;
