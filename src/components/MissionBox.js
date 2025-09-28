import "./MissionBox.css";

export function MissionBox({ text, alt }) {
  return (
    <div className="mission-box">
      <div className="mission-text">
        <h2>Our Mission</h2>
        <p>Our project explores how humanity can build a 
            <span className="font-bold"> sustainable lunar spaceport </span>
            to support long-term presence on the Moon. Developed during the 
            <span className="font-bold"> 2025 International Space University Space Studies Program </span>
            , this work brings together expertise across science, engineering, human performance, policy, and management.</p>
        <p>We focus on both the 
            <span className="font-bold"> short-term mission </span>
            and the <span className="font-bold"> long-term vision </span> of evolving from a single Launch and Landing Pad (LLP) into a 
            <span className="font-bold"> multifunctional hub </span> with multiple LLPs and human-centered habitats. This infrastructure will enable 
            <span className="font-bold"> scientific, commercial, and strategic activities </span> on the Moon and beyond.</p>
      </div>
    </div>
  );
}
