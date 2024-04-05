import React from 'react';

const Filter = ({ updateGenreFilter, updateYearFilter, selectedGenre, selectedYearRange }) => {
  return (
    <div className="filter-container">
      <div>
        <label htmlFor="genre-select">Choose a genre:</label>
        <select id="genre-select" value={selectedGenre} onChange={(e) => updateGenreFilter(e.target.value)}>
          <option value="">All Genres</option>
          <option value="Action">Action</option>
          <option value="Adventure">Adventure</option>
          <option value="Crime">Crime</option>
          <option value="Drama">Drama</option>
          <option value="Fantasy">Fantasy</option>
          <option value="Romance">Romance</option>
          <option value="Sci-Fi">Sci-Fi</option>
        </select>
      </div>
      <div>
        <label htmlFor="year-select">Choose a year range:</label>
        <select id="year-select" value={selectedYearRange} onChange={(e) => updateYearFilter(e.target.value)}>
          <option value="">All Years</option>
          <option value="1980-1989">1980-1989</option>
          <option value="1990-1999">1990-1999</option>
          <option value="2000-2009">2000-2009</option>
          <option value="2010-2019">2010-2019</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
