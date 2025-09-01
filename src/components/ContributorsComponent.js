// src/components/contributorscomponent.js
import React from "react";
import "./ContributorsComponent.css";

import contributors from "../contributors.json";
import * as images from "../images/contributors";

export function ContributorsComponent() {
  return (
    <div className="contributors-container">
      <h2 className="contributors-title">Contributors</h2>
      <div className="contributors-grid">
        {contributors.map((person, index) => (
          <div key={index} className="contributor-card">
            <img
              src={images[person.name.replace(/\s+/g, "")] || images["Fallback"]}
              alt={person.name}
              className="contributor-image"
            />
            <div className="contributor-info">
              <h2 className="contributor-name">{person.name}</h2>
              <a
                href={person.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contributor-link"
              >
                LinkedIn
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}