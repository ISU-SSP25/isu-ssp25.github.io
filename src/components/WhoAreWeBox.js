import "./WhoAreWeBox.css";
import { Link } from "react-router-dom";

export function WhoAreWeBox({ text, image, alt }) {
  return (
    <div className="who-are-we-box">
      <div className="who-are-we-text">
        <h2>Who are we?</h2>
        <p>We are an international team of 43 participants from 18 countries, united by a shared mission to design a sustainable lunar spaceport.</p>
        <p>With the guidance of Eric Dahlstrom (Chair) and Joshua Kassulke (Teaching Associate), we have combined our diverse backgrounds to design a vision for humanity’s next step on the Moon.</p>
        <p>{text || ''}</p>
        <Link to="/contributors" className="who-are-we-link">
          Meet the Contributors
        </Link>
      </div>
      <div className="who-are-we-image-wrapper">
        <img src={image} alt={alt || "Group picture"} className="who-are-we-image" />
      </div>
    </div>
  );
}
