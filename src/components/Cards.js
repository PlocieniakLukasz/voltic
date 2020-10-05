import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div id='offer' className="cards">
      <h1 className='title'>Usługi</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="/images/instalacje-fotowoltaiczne.jpg"
              text="Instalacje fotowoltaiczne - energia ze słońca"
              label="szczegóły"
              path="/panele"
            />
            <CardItem
              src="/images/remote.jpg"
              text="Nowoczesne systemy ogrzewania elektrycznego "
              label="szczegóły"
              path="/ogrzewanie-elektryczne"
            />
            <CardItem
              src="images/measurement.jpg"
              text="Pomiary ochronne"
              label="szczegóły"
              path="/pomiary-ochronne"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/camera.jpg"
              text="Instalacje niskoprądowe"
              label="szczegóły"
              path="/instalacje-niskopradowe"
            />
            <CardItem
              src="images/wysokopradowe-min.jpg"
              text="Instalacje wysokopradowe"
              label="szczegóły"
              path="/instalacje-wysokopradowe"
            />
            <CardItem
              src="images/rozdzielnica.jpg"
              text="Prefabrykacja rozdzielnic n.n"
              label="szczegóły"
              path="/prefabrykacja-rozdzielnic"
            />
            <CardItem
              src="images/compensator.jpg"
              text="Kompensacja Mocy Biernej"
              label="szczegóły"
              path="/kompensacja-mocy"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
