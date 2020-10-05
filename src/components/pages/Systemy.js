import React from "react";
import "../../App.css";

import { Link } from "react-router-dom";

export default function Systemy() {
  return (
    <div className="services">
      <header
        className="header"
        style={{ backgroundImage: `url('/images/remote.jpg')` }}
      >
        <div className="header-shadow">
          <Link to="/">
            <i class="fas fa-arrow-left icon"></i>
          </Link>
          <h1 className="header-title">
            Nowoczesne systemy ogrzewania elektrycznego
          </h1>
        </div>
      </header>
      <span className="description">
        Ogrzewanie domu prądem elektrycznym to prosty i nowoczesny sposób
        wychodzący na przeciw ogrzewaniu tradycyjnemu. <br></br>
        Nie musimy marwić się o zanieczyszczenia powietrza czy też zakup
        produktów grzewczych. <br></br>
        Wygoda oraz niższe koszty instalacji, sprzyjają rosnącemu wciąż
        zainteresowaniu tym rodzajem ogrzewania.
        <br></br>
        Posiadanie instalacji fotowoltaicznej to dobry początek.<br></br> Własny prąd z
        ogniw słonecznych może wspomagać proces ogrzewania domu. 
        Istnieje możliwość magazynowania nadmiaru prądu do sieci, a
        następnie jego odbiór kiedy go potrzebujemy.
      </span>
    </div>
  );
}
