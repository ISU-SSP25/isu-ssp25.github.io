import { ContentElement, WebsiteNavbar, Footer } from "../components";
import * as images from "../images/long-term";

export function LongTerm() {
    return (
       <div className="PageContainer">
          <WebsiteNavbar />
          <div className="PageContent">
          {/* Text section with improved formatting */}
          <div className="intro-text">
            <p>
              <div className="h2">
                Long Term
              </div>
            </p>
          </div>
          </div>

          <Footer />
        </div>
    );
}
