import { TermComponent, WebsiteNavbar, Footer, RoadMapLong } from "../components";
// import * as images from "../images/long-term-vision";

export function LongTermVision() {
	return (
		<div className="PageContainer">
			<WebsiteNavbar />
			<div className="PageContent">
				<TermComponent
					title={"Long Term Vision"}
					text={
						<>
							<p>
								The initial spaceport infrastructure on the Moon in the short
								term, is designed to meet immediate mission requirements and
								pave the way for future settlements. However, its importance
								extends beyond just the first missions, it serves as the
								foundation for a long-term vision.
							</p>
							<p>
								{" "}
								Spaceports are the launching pad for the new space economy.
								However, to secure their future over the long term, spaceport
								developers must choose the right path today, emphasizing not
								only the importance of spaceports for future Moon habitation but
								also how every step taken today will shape tomorrow’s lunar
								society.
							</p>
						</>
					}
				/>
			</div>
		<div className="RoadMapLong">
			<RoadMapLong />
		</div>
			<Footer />
		</div>
	);
}
