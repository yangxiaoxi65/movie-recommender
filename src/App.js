import React from 'react';
import './App.css'; 
import MoviesList from './components/MoviesList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Recommender</h1>
      </header>
      <main>
        <MoviesList />
      </main>
    </div>
  );
}

export default App;
