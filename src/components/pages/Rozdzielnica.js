import React from "react";
import "../../App.css";

import { Link } from "react-router-dom";

export default function Wysokopradowe() {
  return (
    <div className="services">
      <header
        className="header"
        style={{ backgroundImage: `url('/images/rozdzielnica.jpg')` }}
      >
        <div className="header-shadow">
          <Link to="/">
            <i class="fas fa-arrow-left icon"></i>
          </Link>
          <h1 className="header-title">Prefabrykacja rozdzielnic n.n.</h1>
        </div>
      </header>
      <span className="description">
        Instalacje fotowoltaiczne to coraz częstszy wybór w walce ze zmianami
        klimatycznymi.<br></br>
        Gromadzą one darmową energię słoneczną i zamieniają ją w energię
        elektryczną, którą możemy wykorzystywać do własnego użytku. <br></br>
        Dzięki nim zaoszczędzimy na ruchunkach a nasz dom stanie się nowoczesnym
        obiektem sprzyjającym środowisku.<br></br>
        Oferujemy Państwu nowoczesne rozwiązania z zakresu fotowoltaiki.
      </span>
    </div>
  );
}
