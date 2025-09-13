import { WebsiteNavbar, Footer, ResourcesComponent } from "../components";

export function Resources() {
    return (
        <div className="PageContainer">
          <WebsiteNavbar />
          <div className="PageContent">
            <ResourcesComponent />
          </div>
          <Footer />
        </div>
      );
}