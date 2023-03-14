import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import MovieDetails from "../components/MovieDetails";
import { fetchMoivebyID } from "../RTK/slices/moviesSlice";

const Movie = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { singalMoive } = useSelector((state) => state.movies);
  useEffect(() => {
    dispatch(fetchMoivebyID(id));
  }, [dispatch, id]);

  return <MovieDetails singalMoive={singalMoive} />;
};

export default Movie;
