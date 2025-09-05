// src/components/ContributorsComponent.js
import React, { useState } from "react";
import "./ContributorsComponent.css";

import contributors from "../contributors.json";
import * as images from "../images/contributors";

const categories = [
	"All",
	"Site Selection & Environment",
	"Spaceport Infrastructure",
	"Operations & Power Systems",
	"Communications & Navigation",
	"Spaceport Policy & Business",
];

export function ContributorsComponent() {
	const [activeCategory, setActiveCategory] = useState("All");

	const filteredContributors =
		activeCategory === "All"
			? contributors
			: contributors.filter((person) => person.contribution === activeCategory);

	return (
		<div className="contributors-container">
			<h2 className="contributors-title">Contributors</h2>

			{/* Category Filter */}
			<div className="contributors-filters">
				{categories.map((cat) => (
					<button
						key={cat}
						type="button"
						className={`filter-button ${
							activeCategory === cat ? "active" : ""
						}`}
						onClick={() => setActiveCategory(cat)}
					>
						{cat}
					</button>
				))}
			</div>

			{/* Contributors Grid */}
			<div className="contributors-grid">
				{filteredContributors.map((person, index) => (
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
									onClick={(e) => e.stopPropagation()}
								>
									in
								</a>
							)}
						</div>
						<span className="contributor-name">{person.name}</span>
						{person.role && (
							<span className="contributor-role">{person.role}</span>
						)}

						{/* Show topic/contribution only on "All" page */}
						{activeCategory === "All" && person.contribution && (
							<span className="contributor-topic">{person.contribution}</span>
						)}
					</div>
				))}
			</div>
		</div>
	);
}
