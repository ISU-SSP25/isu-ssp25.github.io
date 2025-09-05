import { TextComponent } from "./TextComponent";
import "./TermComponent.css";

export function TermComponent({ text , title}) {
    return (
        <div className="term-container">
            {title && <h2 className="term-title">{title}</h2>}
            <TextComponent text={text} />
        </div>
    );
}