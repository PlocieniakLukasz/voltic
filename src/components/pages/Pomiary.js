import React from "react";
import "../../App.css";

import { Link } from "react-router-dom";

export default function Pomiary() {
  return (
    <div className="services">
      <header
        className="header"
        style={{ backgroundImage: `url('/images/measurement.jpg')` }}
      >
        <div className="header-shadow">
          <Link to="/">
            <i class="fas fa-arrow-left icon"></i>
          </Link>
          <h1 className="header-title">Pomiary ochronne</h1>
        </div>
      </header>
      <span className="description">
        Oferujemy Państwu wszelkie czynności dotyczące kontroli i pomiarów
        parametrów instalacji elektrycznych<br></br>
        Służą one ocenie stanu instalacji, bezpieczeństwa użytkowania oraz
        zapobiegają awarii <br></br>
        Pomiary ochronne powinny być wykonywane co kilka lat lub częściej jeśli
        istnieje taka potrzeba.<br></br>
        Jesteśmy doświadczonym zespołem dbającym o Państwa bezpieczeństwo.
      </span>
    </div>
  );
}
