import React from "react";
import "./About.css";

const About = () => (
  <div id="about" className="about">
    <div className="about__wrapper">
      <div className="about__text">
        <h1 className="about__title">Kilka słów o nas</h1>
        <div className="about__description__wrapper">
          <span className="about__description">
            Voltic to firma zajmująca się szerokim spektrum usług elektrycznych.
            Wprowadzamy nowoczesne rozwiązania z zakresu ogrzewania
            elektrycznego, instalacji nisko/silnoprądowych oraz coraz bardziej
            popularnych w naszym kraju instalacji fotowoltaicznych. Nasze usługi
            są dostosowane indywidualnie dla każdego klienta, tak aby znaleźć
            najbardziej wydajne, opłacalne i spełniające Państwa oczekiwania
            rozwiązania. <br></br>
            Oferujemy najwyższej jakości produkty cenionych producentów.
           
          </span>
          <span className="about__description">
            Nasze realizacje cechuje wysoki standard wykonania, trwałe
            i wydajne rozwiązania. <br /> Głównymi zaletami jakie
            przemawiają za firmą Voltic to rzetelność, terminowość oraz
            elastyczność, gdyż jesteśmy w stanie sprostać wymaganiom naszych
            Klientów.<br></br> Ciągle inwestujemy w wiedzę i monitorujemy rynek, wszystko
            po to aby jakość świadczonych przez nas usług, była w pełni
            wartościowa i kompleksowa.<br></br> Stawiamy sobie za cel Wasz komfort i
            zadowolenie.
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default About;
