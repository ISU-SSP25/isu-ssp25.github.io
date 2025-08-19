import { WebsiteNavbar, Footer, ContributorsComponent } from "../components";
import * as images from "../images/contributors";
import React from "react";
// import ContributorsComponent from "../components/ContributorsComponent.js";


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