import "./ResourcesComponent.css";

export function ResourcesComponent() {
    return (
        <div className="resources-container">
            <h2 className="resources-title">Resources</h2>

            <h3 className="institution-title">
                International Astronautical Congress (IAC) 2025
            </h3>
            <div className="resource-item">
                <a
                    href="https://sustainablelunar.space"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Paper: Sustainable Lunar Infrastructure Development
                </a>
            </div>
            <br />

            <h3 className="institution-title">
                International Space University (ISU) - Space Studies Program 2025
            </h3>
            
            <div className="resource-item video-item">
                <span className="video-title">Sustainable Lunar Spaceports Presentation (Hanyang University ERICA): </span>
                <div className="video-wrapper">
                    <iframe
                        width="600"
                        height="315"
                        src="https://www.youtube.com/embed/mHIf1K2vR90?si=tFafg1huDd7wafrp&amp;start=20204"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerpolicy="strict-origin-when-cross-origin"
                        allowfullscreen
                    />
                </div>
            </div>
            <br />
            <div className="resource-item">
                <a
                    href="https://sustainablelunar.space"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Report: ISU Library - Sustainable Lunar Spaceports - SSP25
                </a>
            </div>
        </div>
    );
}