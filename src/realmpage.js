import React, { useState, useEffect } from "react";
import "./realmpage.css";
import backgroundImage from './assets/webpage_bg.jpg'; // Make sure this is correct

function RealmPage() {
  const [movies, setMovies] = useState([]);
  const [categories] = useState(["Trending", "Top Picks", "New Releases"]);

  useEffect(() => {
    // Replace with your actual API or local movie data
    fetch("https://api.example.com/movies") // Placeholder
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  const handleCategoryClick = (category) => {
    alert(`Opening more from: ${category}`);
    // Add modal or routing if needed
  };

  return (
    <div className="realmpage" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="overlay" />
      <div className="movie-container">
        <h1 className="realm-title">Xplore the Verse</h1>

        {categories.map((category, index) => (
          <div key={index} className="movie-category">
            <div
              className="category-title-card"
              onClick={() => handleCategoryClick(category)}
            >
              <h2>{category}</h2>
            </div>

            <div className="movie-row">
              {movies.length > 0 ? (
                movies
                  .filter((movie) => movie.category === category)
                  .map((movie) => (
                    <div className="movie-card" key={movie.id}>
                      <img src={movie.poster} alt={movie.title} />
                      <div className="movie-info">
                        <h3>{movie.title}</h3>
                      </div>
                    </div>
                  ))
              ) : (
                <div className="loading">Fetching content from the shadows...</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RealmPage;
