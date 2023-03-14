import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../RTK/slices/moviesSlice";
import Slider from "../components/Slider";
import SponserCard from "../components/SponserCard";
import disenyImg from "../assets/SponserImgs/disney.png";
import MarvelImg from "../assets/SponserImgs/marvel.png";
import PixarImg from "../assets/SponserImgs/pixar.png";
import StarWarImg from "../assets/SponserImgs/starwars.png";
import NationalImg from "../assets/SponserImgs/national.png";
import disenyVideo from "../assets/videos/disney.mp4";
import MarvelVideo from "../assets/videos/marvel.mp4";
import PixarVideo from "../assets/videos/pixar.mp4";
import StarWarVideo from "../assets/videos/star-wars.mp4";
import NationalVideo from "../assets/videos/national.mp4";
import Card from "../components/Card";
import Footer from "../components/Footer";

const Home = () => {
  const { moives } = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const pageNum = 1;

  useEffect(() => {
    dispatch(fetchMovies(pageNum));
  }, [dispatch, pageNum]);

  return (
    <section className="bg-[#1f2230] h-fit z-1 pb-5">
      <Slider />
      <div className="flex justify-between w-5/6 items-center mx-auto flex-wrap gap-4 py-20">
        <SponserCard img={disenyImg} video={disenyVideo} />
        <SponserCard img={MarvelImg} video={MarvelVideo} />
        <SponserCard img={PixarImg} video={PixarVideo} />
        <SponserCard img={StarWarImg} video={StarWarVideo} />
        <SponserCard img={NationalImg} video={NationalVideo} />
      </div>
      <div className="w-5/6 mx-auto grid gap-16 grid-cols-fluid my-[100px]">
        {moives?.map((movie) => (
          <Card key={movie.id} {...movie} />
        ))}
      </div>
      <Footer />
    </section>
  );
};

export default Home;
