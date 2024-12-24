import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../features/movies/moviesSlice";

const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { selectedMovie, loading, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchMovieDetails(id));
  }, [id, dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  if (!selectedMovie) return <p>No movie details available.</p>;

  return (
    <div>
      <h2>{selectedMovie.title}</h2>
      <img src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`} alt={selectedMovie.title} />
      <p>{selectedMovie.overview}</p>
      <p>Rating: {selectedMovie.vote_average}</p>
      <p>Release Date: {selectedMovie.release_date}</p>
    </div>
  );
};

export default Details;
