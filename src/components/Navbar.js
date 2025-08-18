import { useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Navbar.css";
import Patch from "../images/patch.png";

export function WebsiteNavbar() {
  const location = useLocation(); // Get current route

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
          <Nav.Link className={`Nav-link ${location.pathname === "/short-term" ? "active" : ""}`} href="/#/short-term">
            Short Term
          </Nav.Link>
          <Nav.Link className={`Nav-link ${location.pathname === "/long-term" ? "active" : ""}`} href="/#/long-term">
            Long Term
          </Nav.Link>
          <Nav.Link className={`Nav-link ${location.pathname === "/collaborators" ? "active" : ""}`} href="/#/collaborators">
            Collaborators
            </Nav.Link>
          <Nav.Link className={`Nav-link ${location.pathname === "/resources" ? "active" : ""}`} href="/#/resources">
            Resources
            </Nav.Link>

        </Nav>
      </Container>
    </Navbar>
  );
}
