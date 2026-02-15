import { TermComponent, WebsiteNavbar, Footer, RoadMap } from "../components";
// import * as images from "../images/long-term-vision";

export function IAC2026() {
  return (
    <div className="PageContainer">
      <WebsiteNavbar />
      <div className="PageContent">
        <TermComponent
          title={"Abstract submission for IAC 2026"}
          text={
            <>
              <p>Temporary page for the IAC 2026 abstract submission.</p>
              <p>
                Themes considered for the abstract submission include:
                <ul>
                  <li>Space robotics for lunar missions</li>
                  <li>Laser comms between Moon and Earth</li>
                  <li>Antarctica as an analogue for the lunar south pole</li>
                </ul>
              </p>
            </>
          }
        />
      </div>

      <div className="RoadMap"></div>

      <Footer />
    </div>
  );
}
