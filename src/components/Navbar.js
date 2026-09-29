import { useLocation } from "react-router-dom";
import { useState } from "react"; // 👈 ajouté
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import Patch from "../images/patch.png";

export function WebsiteNavbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false); // 👈 ajouté

  window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".Navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  return (
    <Navbar className="Navbar" sticky="top">
      <Container>
        <Nav className="Nav">
          {/* Logo à gauche */}
          <Nav.Link
            className={`Nav-link-logo ${location.pathname === "/" ? "active" : ""}`}
            href="/"
          >
            <img src={Patch} alt="Signature logo" className="Nav-logo" />
          </Nav.Link>

          {/* Bouton hamburger */}
          <button
            className="Nav-hamburger"
            onClick={() => setIsOpen(!isOpen)}
          >
            Menu
          </button>

          {/* Liens du menu */}
          <div className={`Nav-links ${isOpen ? "open" : ""}`}>
            <Nav.Link className={`Nav-link ${location.pathname === "/" ? "active" : ""}`} href="/">Home</Nav.Link>
            <Nav.Link className={`Nav-link ${location.pathname === "/short-term-mission" ? "active" : ""}`} href="/#/short-term-mission">Short Term Mission</Nav.Link>
            <Nav.Link className={`Nav-link ${location.pathname === "/long-term-vision" ? "active" : ""}`} href="/#/long-term-vision">Long Term Vision</Nav.Link>
            <Nav.Link className={`Nav-link ${location.pathname === "/contributors" ? "active" : ""}`} href="/#/contributors">Contributors</Nav.Link>
            <Nav.Link className={`Nav-link ${location.pathname === "/resources" ? "active" : ""}`} href="/#/resources">Resources</Nav.Link>
            <Nav.Link className={`Nav-link ${location.pathname === "/lunar-link-budget" ? "active" : ""}`} href="/#/lunar-link-budget">Calculator</Nav.Link>
            <Nav.Link className={`Nav-link ${location.pathname === "/iac2026" ? "active" : ""}`} href="/#/iac2026">IAC 2026</Nav.Link>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
}