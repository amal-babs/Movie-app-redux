import React from 'react';
import { useSelector } from 'react-redux';
import MovieList from '../features/Movielist';

const Favorites = () => {
  const favorites = useSelector((state) => state.movies.favorites);

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.length > 0 ? (
        <MovieList movies={favorites} />
      ) : (
        <p>No favorite movies yet.</p>
      )}
    </div>
  );
};

export default Favorites;
