import "./HomeComponent.css";

export function HomeComponent({ title, image, text }) {
    return (
        <div className="home-component-container">
            <div className="home-component-text">
                {title && <h2>Sustainable Lunar Spaceport</h2>}
                <p>{text}</p> 
            </div>
            {image && (

                <div className="home-component-photo">
                    <img src={image} alt="Project Cover" />
                </div>
            )}
        </div>
    );
}
