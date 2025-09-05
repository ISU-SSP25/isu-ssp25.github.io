import { useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import Patch from "../images/patch.png";

export function WebsiteNavbar() {
  const location = useLocation(); // Get current route
  
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
          <Nav.Link className={`Nav-link-logo ${location.pathname === "/" ? "active" : ""}`} href="/">
            <img src={Patch} alt="Signature logo" className="Nav-logo" />
          </Nav.Link>
          <Nav.Link className={`Nav-link ${location.pathname === "/" ? "active" : ""}`} href="/">
            Home
          </Nav.Link>
          <Nav.Link className={`Nav-link ${location.pathname === "/short-term-mission" ? "active" : ""}`} href="/#/short-term-mission">
            Short Term Mission
          </Nav.Link>
          <Nav.Link className={`Nav-link ${location.pathname === "/long-term-vision" ? "active" : ""}`} href="/#/long-term-vision">
            Long Term Vision
          </Nav.Link>
          <Nav.Link className={`Nav-link ${location.pathname === "/contributors" ? "active" : ""}`} href="/#/contributors">
            Contributors
            </Nav.Link>
          <Nav.Link className={`Nav-link ${location.pathname === "/resources" ? "active" : ""}`} href="/#/resources">
            Resources
            </Nav.Link>

        </Nav>
      </Container>
    </Navbar>
  );
}
