import React from "react";
import "./Footer.css";
import Button from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <a href="#start" className="social-logo">
              VOLTIC
            </a>
          </div>
            <Link
              class="social-icon-link facebook"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <i class="fab fa-facebook-f" />
            </Link>
        </div>
      </section>
    </div>
  );
}

export default Footer;
