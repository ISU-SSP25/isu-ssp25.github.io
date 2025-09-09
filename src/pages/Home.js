import { WebsiteNavbar, HomeComponent, TextComponent, FlagChain, Footer, TermBox, WhoAreWeBox } from "../components";
import * as images from "../images/home";

export function Home() {
    return (
        <div className="PageContainer">
            <WebsiteNavbar />
            <div className="PageContent">
                <div className="intro-text">
                    <HomeComponent image={images.LunarCoverHome} title={<h2> Building a Sustainable Lunar Spaceport</h2>} text={<>
                    </>}
                    />
                </div>
                <div className="term-boxes-container">
                    <TermBox
                        title="Short Term Mission"
                        text="Humanity’s return to the Moon starts with robust infrastructure for frequent landings, launches, and logistics. Discover how the short term mission lays the groundwork for lunar exploration."
                        link="/short-term-mission"
                    />
                    <TermBox
                        title="Long Term Vision"
                        text="The lunar spaceport is more than a gateway—it’s the foundation for a permanent lunar community and a thriving space economy. Explore our vision for the future of a long-term human presence on and around the Moon."
                        link="/long-term-vision"
                    />
                </div>

                <WhoAreWeBox
                    image={images.Team}
                    alt="Group picture"
                />
                <FlagChain />                
            </div>
            <Footer />
        </div>
    );
}