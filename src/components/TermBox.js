import { Link } from "react-router-dom";
import "./TermBox.css";

export function TermBox({ title, text, link }) {
  return (
    <div className="term-box">
      <div className="term-box-title">{title}</div>
      <div className="term-box-text">{text}</div>
      <Link to={link} className="term-box-link">
        Learn More
      </Link>
    </div>
  );
}