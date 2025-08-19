import { useState, useEffect } from "react";
import "./HomeComponent.css";

export function HomeComponent({ title, image, text }) {
  const [imageHeight, setImageHeight] = useState(0);

  useEffect(() => {
    if (image) {
      const img = new Image();
      img.src = image;
      img.onload = () => setImageHeight(img.height);
    }
  }, [image]);

  return (
    <div
      className="home-component-container"
      style={{
        height: imageHeight ? `${imageHeight}px` : "auto",
        backgroundImage: image
          ? `linear-gradient(rgba(255,255,255,0.4), rgba(255,255,255,0.4)), url(${image})`
          : undefined,
      }}
    >
    <div className="home-component-text">
      {title && <h2>{title}</h2>}
      <p>{text}</p>
    </div>
    
    </div>
  );
}