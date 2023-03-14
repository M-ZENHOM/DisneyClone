import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ title, release_date, id, poster_path }) => {
  const navigate = useNavigate();
  const ClickHandler = (id) => {
    window.scroll(0, 0);
    navigate(`/movie/${id}`);
  };
  return (
    <div
      onClick={() => ClickHandler(id)}
      key={id}
      className="relative cursor-pointer text-white text-center hover:scale-110 transition-all duration-700"
    >
      <div className="absolute w-full h-full top-0 flex flex-col justify-end py-4 font-bold ">
        <h2>{title}</h2>
        <p>{release_date}</p>
      </div>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w300${poster_path}`
            : `https://www.movienewz.com/img/films/poster-holder.jpg`
        }
        alt="Moive Poster"
      />
    </div>
  );
};

export default Card;
