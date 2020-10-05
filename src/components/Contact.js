import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div id="contact" className="contact">
      <div className="contact-wrapper">
        <div className="contact-text">
          <h1 className="contact-title">Skontaktuj się z nami !</h1>
          <span className="contact-description">
            Voltic Usługi Elektryczne, <br></br> Sebastian Kwaśniewski <br></br>{" "}
            tel. : 609-205-937 <br></br>tel. : 607-968-894 <br></br> e-mail:
            volticseba@gmail.com <br></br> adres: Teklimyśl 9, 64-010 Krzywiń,{" "}
            <br></br> woj.wielkopolskie<br></br>
            NIP: 6981339711 <br></br>
            REGON: 411039018
          </span>
        </div>
      </div>
    </div>
  );
}

export default Contact;
