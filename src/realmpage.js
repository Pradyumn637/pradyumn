import React, { useState } from 'react';
import './realmpage.css';
import realmBgImage from './assets/webpage_b.jpg';  // Ensure the image exists in src/assets

function Realmpage() {
  const [selectedMovie, setSelectedMovie] = useState(null); // State to manage the open movie

  const movies = [
    {
      id: 1,
      title: 'Movie 1',
      description: 'This is a brief description of Movie 1.',
      img: 'https://via.placeholder.com/300x200', // Replace with movie thumbnail or cover
      details: 'Detailed view of Movie 1. More info about the plot, cast, etc.',
    },
    {
      id: 2,
      title: 'Movie 2',
      description: 'This is a brief description of Movie 2.',
      img: 'https://via.placeholder.com/300x200', // Replace with movie thumbnail or cover
      details: 'Detailed view of Movie 2. More info about the plot, cast, etc.',
    },
    {
      id: 3,
      title: 'Movie 3',
      description: 'This is a brief description of Movie 3.',
      img: 'https://via.placeholder.com/300x200', // Replace with movie thumbnail or cover
      details: 'Detailed view of Movie 3. More info about the plot, cast, etc.',
    },
  ];

  // Function to open the selected movie
  const openMovie = (movie) => {
    setSelectedMovie(movie);
  };

  // Function to close the selected movie
  const closeMovie = () => {
    setSelectedMovie(null);
  };

  return (
    <div
      className="realm-container"
      style={{ backgroundImage: `url(${realmBgImage})`, backgroundSize: 'cover', height: '100vh' }}
    >
      <div className="realm-content">
        <h1 className="realm-title">Welcome to the Realm</h1>
        <p className="realm-description">Here, power and mystery await!</p>

        <div className="movies-section">
          <h2>Movies</h2>
          <div className="movie-cards">
            {movies.map((movie) => (
              <div
                key={movie.id}
                className="movie-card"
                onClick={() => openMovie(movie)}
              >
                <img src={movie.img} alt={movie.title} className="movie-card-img" />
                <h3>{movie.title}</h3>
                <p>{movie.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Opened movie details */}
        {selectedMovie && (
          <div className="movie-detail-modal">
            <div className="modal-content">
              <h2>{selectedMovie.title}</h2>
              <p>{selectedMovie.details}</p>
              <button className="close-button" onClick={closeMovie}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Realmpage;
