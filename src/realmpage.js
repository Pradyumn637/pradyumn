import React from "react";
import "./realmpage.css";
import logo from "./assets/logo.png";
import { useNavigate } from "react-router-dom";

function Realmpage() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="realm-container">
      {/* Logo and Title */}
      <div className="realm-header">
        <img
          src={logo}
          alt="Azrakan Logo"
          className="realm-logo"
          onClick={handleBack}
        />
        <h1 className="realm-title" onClick={handleBack}>
          AZRAKAN
        </h1>
      </div>

      <div className="realm-content">
        <h2>Welcome to the Realm</h2>
        <p>This is the portal to the unknown... (or whatever your vibe is)</p>
        <button onClick={handleBack} className="realm-back-button">
          ← Back to Home
        </button>
      </div>
    </div>
  );
}

export default Realmpage;
