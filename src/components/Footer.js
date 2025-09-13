import React from "react";
import "./Footer.css";
import { scrollToTopPage } from "./ScrollToTop"; // import the function


export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-line">
        {/* Tagline left */}
        <div className="footer-left">
          Enabling Sustainable Lunar Spaceports
        </div>

        {/* Scroll-to-top text */}
        <span className="scroll-top" onClick={scrollToTopPage}>
          ↑ Top of the page
        </span>

        {/* Copyright right */}
        <div className="footer-right">
          <span className="copyright-names">
            © 2025{" "}
            <a
              href="https://www.emmavellard.com"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight"
            >
              Emma Vellard
            </a>{" "}
            &{" "}
            <a
              href="https://github.com/mgrinstein"
              target="_blank"
              rel="noopener noreferrer"
              className="highlight"
            >
              Monique Grinstein
            </a>
          </span>
          <span className="copyright-reserved">
            . All rights reserved.
          </span>
        </div>
      </div>

      
    </footer>
  );
}