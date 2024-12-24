import React from 'react';

const Filters = ({ genres, selectedGenre, onFilterChange }) => {
  return (
    <div className="filters">
      <select value={selectedGenre} onChange={(e) => onFilterChange(e.target.value)}>
        <option value="">All Genres</option>
        {genres.map(genre => (
          <option key={genre.id} value={genre.id}>{genre.name}</option>
        ))}
      </select>
    </div>
  );
};

export default Filters;
