import React from "react";

const MovieDetails = ({ singalMoive }) => {
  return (
    <div
      className="relative w-full h-[100vh] bg-cover bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${singalMoive.backdrop_path})`,
      }}
    >
      <div className="w-full h-full absolute top-0 bg-[#0000005e] text-white">
        <div className="w-full h-full flex flex-col justify-center items-start ml-[200px] md:ml-[20px]">
          <h2 className="text-4xl mb-5 md:text-xl font-bold">
            {singalMoive.title}
          </h2>
          <p className="text-xl">{singalMoive.tagline}</p>
          <p className="w-[800px] md:w-[300px] mb-2">{singalMoive.overview}</p>
          <p>DURATION: {singalMoive.runtime} MIN</p>
          <p>RELEASE DATE: {singalMoive.release_date}</p>
          <span className="text-green-500 font-bold">{singalMoive.status}</span>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
