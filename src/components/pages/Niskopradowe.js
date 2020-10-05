import React from "react";
import "../../App.css";

import { Link } from "react-router-dom";

export default function Niskopradowe() {
  return (
    <div className="services">
      <header
        className="header"
        style={{ backgroundImage: `url('/images/camera.jpg')` }}
      >
        <div className="header-shadow">
          {" "}
          <Link to="/">
            <i class="fas fa-arrow-left icon"></i>
          </Link>
          <h1 className="header-title">Instalacje niskoprądowe</h1>
        </div>
      </header>
      <span className="description">
      Instalacje niskoprądowe służą głównie do zapewnienia bezpieczeństwa
      obiektów oraz usprawniania funkcjonalności innych systemów.<br></br>
      Nasi fachowcy zajmują się poradą oraz montażem takich instalacji jak np.
      monitoring czy sytemy alarmowe działające na terenie naszych posiadłości. <br></br>
      
      </span>
    </div>
  );
}
