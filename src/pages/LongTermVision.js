import { TermComponent, WebsiteNavbar, Footer } from "../components";
// import * as images from "../images/long-term-vision";

export function LongTermVision() {
	return (
		<div className="PageContainer">
			<WebsiteNavbar />
			<div className="PageContent">
				<TermComponent title={"Long Term Vision"} text={
  <>
    <p>The initial lunar spaceport infrastructure serves as the foundation for humanity's long-term vision of space settlement, where today's design choices will shape tomorrow's lunar society and the new space economy.</p>
    <p>Our ambitious concept envisions a centralized transportation hub supporting 10 daily launches to Earth, Mars, and across the lunar surface, emphasizing sustainable cislunar operations, human welfare, and economic development to transform today's seemingly impossible dreams into tomorrow's achievable reality.</p>
  </>
} />
			</div>

			<Footer />
		</div>
	);
}
