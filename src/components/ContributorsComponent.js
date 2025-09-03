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
            <div className="avatar-wrapper">
              <img
                src={images[person.name.replace(/\s+/g, "")]}
                alt={person.name}
                className="contributor-image"
              />
            {person.linkedin && (
                <a
                  href={person.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="linkedin-badge"
                  onClick={(e) => e.stopPropagation()} // prevent double link activation
                >
                  in
                </a>
              )}
            </div>
            <span className="contributor-name">{person.name}</span>
            {person.role && (
              <span className="contributor-role">{person.role}</span>
            )}
          
          </div>
        ))}
      </div>
    </div>
  );
}