import { WebsiteNavbar, HomeComponent, TextComponent, Footer } from "../components";
import * as images from "../images/home";

export function Home() {
    return (
        <div className="PageContainer">
            <WebsiteNavbar />
            <div className="PageContent">
                <div className="intro-text">
                    <HomeComponent image={images.LunarCoverHome} title={<h2> Sustainable Lunar Spaceport</h2>} text={<>
                    </>}
                    />
                </div>
                <div className="text-component">
                    <TextComponent text={<>
                        Short and Long term boxes
                    </>} />
                </div>
                <div className="text-component">
                    <TextComponent text={<>
                        Group picture and flag chain
                    </>} />
                </div>
            </div>{" "}
            <Footer />
        </div>
    );
}

