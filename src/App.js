import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useNavigate, Link } from 'react-router-dom';
import Realmpage from './realmpage';
import appBgImage from './assets/webpage_bg.jpg';
import logo from './assets/logo.png'; // your logo image path

function HomePage({ bgImage }) {
  const navigate = useNavigate();

  return (
    <div className="app-container" style={{ backgroundImage: `url(${bgImage})` }}>
      <header className="header">
        <Link to="/" className="logo-title">
          <img src={logo} alt="Logo" className="logo-img" />
          <h1 className="app-title">Pradyumn</h1>
        </Link>

        <nav className="navbar">
          <input type="checkbox" id="menu-toggle" />
          <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>
          <ul className="menu">
            <li><Link to="/realm">Movies</Link></li>
            <li><Link to="/realm">Standalones</Link></li>
            <li><Link to="/realm">More to Come</Link></li>
            <li><Link to="/realm">Character Arcs</Link></li>
          </ul>
        </nav>
      </header>

      <div className="content">
        <h2 className="content-description">Welcome to my world</h2>
        <div className="actions">
          <button className="action-button" onClick={() => navigate("/realm")}>Enter the Realm</button>
        </div>
      </div>

      <footer className="footer">
        <a href="mailto:pradyumnnirvani0@gmail.com" target="_blank" rel="noopener noreferrer" className="footer-link">
          <span className="social-icon">📧</span> pradyumnnirvani0@gmail.com
        </a>
        <a href="https://www.instagram.com/pradyumn_19" target="_blank" rel="noopener noreferrer" className="footer-link">
          <span className="social-icon">📸</span> @pradyumn_19
        </a>
      </footer>
    </div>
  );
}

function App() {
  const [bgImage] = useState(appBgImage);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage bgImage={bgImage} />} />
        <Route path="/realm" element={<Realmpage />} />
      </Routes>
    </Router>
  );
}

export default App;
