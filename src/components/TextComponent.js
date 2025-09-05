import "./TextComponent.css";

export function TextComponent({ text }) {
    return (
        <div className="text-component-container">
            <div className="text-component-content">
                {text}
            </div>
        </div>
    );
}
