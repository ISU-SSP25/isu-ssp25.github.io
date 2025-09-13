import { WebsiteNavbar, Footer, ContributorsComponent } from "../components";

export function Contributors() {
    return (
        <div className="PageContainer">
          <WebsiteNavbar />
          <div className="PageContent">
            <ContributorsComponent />
          </div>
          <Footer />
        </div>
      );
}