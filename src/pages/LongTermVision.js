import { ContentElement, WebsiteNavbar, Footer } from "../components";
import * as images from "../images/long-term-vision";

export function LongTermVision() {
    return (
       <div className="PageContainer">
          <WebsiteNavbar />
          <div className="PageContent">
          {/* Text section with improved formatting */}
          <div className="intro-text">
            <p>
              <div className="h2">
                Long Term Vision
              </div>
            </p>
          </div>
          </div>

          <Footer />
        </div>
    );
}
