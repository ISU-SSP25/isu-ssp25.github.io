import { WebsiteNavbar, Footer } from "../components";
import * as images from "../images/contributors";

export function Contributors() {
    return (
        <div className="PageContainer">
          <WebsiteNavbar />
          <div className="PageContent">
          {/* Text section with improved formatting */}
          <div className="intro-text">
            <p>
              <div className="h2">
                Contributors
              </div>
            </p>
          </div>
          </div>

          <Footer />
        </div>
      );
}
