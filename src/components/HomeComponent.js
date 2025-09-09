import { useState, useEffect } from "react";
import "./HomeComponent.css";

export function HomeComponent({ title, image, text }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="home-component-container"
      style={{
        backgroundImage: !isMobile && image
          ? `linear-gradient(rgba(255,255,255,0.4), rgba(255,255,255,0.4)), url(${image})`
          : undefined,
      }}
    >
      <div className="home-component-text">
        {isMobile && image && (
          <img
            src={image}
            alt="Lunar Cover Home"
            className="home-component-mobile-image"
          />
        )}
        {title && <h2>{title}</h2>}
        <p>{text}</p>
      </div>
    </div>
  );
}