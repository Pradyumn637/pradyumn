import React, { useState, useEffect } from "react";
import "./realmpage.css";

// Import background image
import backgroundImage from './assets/webpage_bg.jpg'; // Ensure this path is correct

function RealmPage() {
  const [movies, setMovies] = useState([]);
  const [categories, setCategories] = useState(["Trending", "Top Picks", "New Releases"]);

  useEffect(() => {
    // Example API call for movie data
    fetch("https://api.example.com/movies") // Change with your API URL
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  // Handle click to navigate to a detailed section for each category
  const handleCategoryClick = (category) => {
    alert(`Opening details for category: ${category}`);
    // You can implement navigation here based on your routing (e.g., React Router or Modals)
  };

  return (
    <div className="realmpage" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="movie-container">
        {categories.map((category, index) => (
          <div key={index} className="movie-category">
            {/* Title Card for each category */}
            <div
              className="category-title-card"
              onClick={() => handleCategoryClick(category)}
            >
              <h3>{category}</h3>
            </div>

            <div className="movie-row">
              {movies.length > 0 ? (
                movies.map((movie) => (
                  <div className="movie-card" key={movie.id}>
                    <img src={movie.poster} alt={movie.title} />
                    <div className="movie-info">
                      <h3>{movie.title}</h3>
                    </div>
                  </div>
                ))
              ) : (
                <div className="loading">Loading movies...</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RealmPage;
