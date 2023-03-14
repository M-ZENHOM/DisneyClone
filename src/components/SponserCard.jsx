import React from "react";

const SponserCard = (props) => {
  return (
    <div className="group relative border-2 border-[#ffffff2f] rounded-md transition-all duration-500 w-[300px] h-[180px] md:w-full md:h-[250px] overflow-hidden cursor-pointer hover:scale-110 hover:border-white drop-shadow-4xl">
      <img
        className="block inset-0  h-full w-full object-cover absolute top-0 transition-opacity duration-500 ease-in-out z-10"
        src={props.img}
        alt="img"
      />
      <video
        className="w-full h-full absolute top-0 z-0 object-cover opacity-0 group-hover:opacity-100  transition-all duration-500"
        autoPlay={true}
        loop={true}
        playsInline={true}
      >
        <source src={props.video} type="video/mp4" />
      </video>
    </div>
  );
};

export default SponserCard;
