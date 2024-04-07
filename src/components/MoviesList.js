import React, { useState } from 'react';
import moviesData from '../data/movies.json';
import Filter from './Filter';
import Sort from './Sort';
import Favorites from './Favorites';

const MoviesList = () => {
  const [movies, setMovies] = useState(moviesData); // 直接使用moviesData作为初始状态
  const [genre, setGenre] = useState('');
  const [yearRange, setYearRange] = useState('');
  const [sortOrder, setSortOrder] = useState(''); // 初始不设置排序顺序
  const [favorites, setFavorites] = useState([]);

  const updateGenreFilter = (selectedGenre) => {
    setGenre(selectedGenre);
    filterMovies(selectedGenre, yearRange, sortOrder);
  };

  const updateYearFilter = (selectedYearRange) => {
    setYearRange(selectedYearRange);
    filterMovies(genre, selectedYearRange, sortOrder);
  };

  const updateSortOrder = (order) => {
    setSortOrder(order);
    filterMovies(genre, yearRange, order);
  };

  const filterMovies = (filterGenre, filterYearRange, order) => {
    let filtered = moviesData.filter(movie => {
      const year = movie.year;
      const matchGenre = filterGenre ? movie.genre.includes(filterGenre) : true;
      let matchYear = true;
      if (filterYearRange) {
        const [startYear, endYear] = filterYearRange.split('-').map(Number);
        matchYear = year >= startYear && year <= endYear;
      }
      return matchGenre && matchYear;
    });

    if (order) {
      filtered.sort((a, b) => (order === 'asc' ? a.rating - b.rating : b.rating - a.rating));
    }

    setMovies(filtered);
  };

  const toggleFavorite = (movie) => {
    const isFavorite = favorites.some(favorite => favorite.id === movie.id);
    setFavorites(isFavorite ? favorites.filter(favorite => favorite.id !== movie.id) : [...favorites, movie]);
  };

  const removeFavorite = (movieId) => {
    setFavorites(favorites.filter(movie => movie.id !== movieId));
  };

  const clearFavorites = () => {
    setFavorites([]);
  };

  const reset = () => {
    setMovies(moviesData);
    setGenre('');
    setYearRange('');
    setSortOrder('');
  };

  return (
    <div>
      <div className="controls-container">
        <Filter
          updateGenreFilter={updateGenreFilter}
          updateYearFilter={updateYearFilter}
          selectedGenre={genre}
          selectedYearRange={yearRange}
        />
        <Sort updateSortOrder={updateSortOrder} sortOrder={sortOrder} />
        <button onClick={reset}>Reset</button>
      </div>
      <Favorites favorites={favorites} clearFavorites={clearFavorites} removeFavorite={removeFavorite} />
      <div className="movies-list">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.id} className="movie">
              <img src={movie.image} alt={movie.title} style={{ width: '150px', height: 'auto' }} />
              <h3>{movie.title}</h3>
              <p>Year: {movie.year}</p>
              <p>Genre: {movie.genre}</p>
              <p>Rating: {movie.rating}</p>
              <button onClick={() => toggleFavorite(movie)}>
                {favorites.some(favorite => favorite.id === movie.id) ? 'Remove from Favorites' : 'Add to Favorites'}
              </button>
            </div>
          ))
        ) : (
          <p>No movies found matching the criteria.</p>
        )}
      </div>
    </div>
  );
};

export default MoviesList;
