import React from 'react';

const Favorites = ({ favorites, clearFavorites, removeFavorite }) => {
  return (
    <div className="favorites-container">
      <h2>My Favorites</h2>
      {favorites.length > 0 ? (
        <>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            {favorites.map(movie => (
              <li key={movie.id}>
                {movie.title}
                <button className = "remove_button" onClick={() => removeFavorite(movie.id)} style={{marginLeft: "10px"}}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <p>Total Favorite Movies: {favorites.length}</p>
          <button onClick={clearFavorites} style={{marginTop: "10px", cursor: "pointer"}}>Clear Favorites</button>
          
        </>
      ) : (
        <p>No favorites yet.</p>
      )}
    </div>
  );
};

export default Favorites;
