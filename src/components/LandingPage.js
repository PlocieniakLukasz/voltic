import React from "react";
import "../App.css";
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="hero-container">
      <div className="hero-shadow">
        <h1>Voltic - usługi elektryczne</h1>
        <p> myślimy globalnie, działamy lokalnie</p>
        <div className="hero-btns">
          <a href="#offer" className="landingPage--button">
            OFERTA
          </a>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
