import { WebsiteNavbar, HomeComponent, Footer } from "../components";
import * as images from "../images/home";

export function Home() {
    return (
        <div className="PageContainer">
            <WebsiteNavbar />
            <div className="PageContent">
                <div className="intro-text">
                    <HomeComponent image={images.FirstPageNoTitle} title={<h2>&gt; &nbsp;Sustainable Lunar Spaceport</h2>} text={<>
                    </>}
                    />
                </div>
            </div>{" "}
            <Footer />
        </div>
    );
}

