import "./RoadMapLong.css";

export function RoadMapLong() {
	const steps = [
		{
			title: "Communication & Navigation",
			content: [
				"A key component of future spaceports is the ability to deliver highly functional Cislunar Traffic Management (CLTM). To support this the lunar spaceports of the future are connected by several private and public constellations of relay satellites orbiting the Moon, which provide constant, low-latency coverage.",
				"A hybrid strategy is used for cislunar connectivity: laser-based optical communications predominate for ultra-high data rate transmissions, intersatellite crosslinks, and science payload returns, while radio frequency systems are still necessary for broad-beam, weather-resilient links and omnidirectional coverage, especially for mobile assets and emergency channels.",
				"Crater-based reflector antennas have evolved into recognizable infrastructure, combining scientific research with practical use by acting as both the main communication centers and flexible platforms for radio astronomy.",
				"A state-of-the-art CisLunar Navigation System (C-LNS) is essential for CLTM and supports every maneuver, landing, and expedition. Constellations from NASA’s LunaNet and ESA’s Moonlight established the groundwork for the system, and promoted a collaborative lunar economy by facilitating smooth PNT services, high-bandwidth data streams, delay-tolerant networking, and international interoperability. By combining quantum inertial units with traditional satellite constellations, the team’s suggested hybrid architecture creates a robust, tiered navigation fabric.",
			],
		},
		{
			title: "Energy",
			content: [
				"A permanent lunar spaceport will require a robust energy system to support ~200 permanent staff, up to 300 residents, 30 daily passengers, and 10 daily launches (five cargo, one passenger). The system must power habitation, communications, propellant transfer, maintenance, launch operations, mobility, and suppression systems while ensuring stability, redundancy, and scalability.",
				"The proposed infrastructure here provides a resilient, scalable, and ISRU-compatible power system for a large lunar spaceport. A hybrid generation mix of SSPS, SMRs, and thermal solar, supported by flywheels, batteries, and fuel cells, ensures two-failure tolerance and continuous operation across life support, launch, and habitation. This foundation is critical to transition lunar presence from survival to thriving.",
				"\n",
				"Power Forecast",
				"Seven major subsystems were assessed using ISS and terrestrial analogs. Scaled values yield the following estimates:",
				"- Habitation (HAB): 960 kW for life support, food, lighting, thermal control.",
				"- Mission Control/Communications (COMM): 150 kW.",
				"- Propellant Transfer & Storage (P+GI): 411 kW fueling + 0.9–2.4 kW cryogenic cooling.",
				"- Maintenance & Cargo Transfer (MI+CT): 733 kW.",
				"- Pad Operations (PAD): 933 kW.",
				"- Surface Mobility (MOB): 10 kW for 20 rovers.",
				"- Rocket Launch Suppression (RLSS): 1,333 kW.",
				"Average daily demand is ~4.5 MW, peaking at 5 MW during launches. A 24-hour schedule shows fluctuating needs, requiring flexible storage and distribution.",
				"\n",
				"Energy Storage",
				"A hybrid system is proposed:",
				"-Flywheels (2,740 kW backbone): stabilize grid, smooth surges, long lifespan.",
				"-Solid-State Batteries: cover 17.5 h/day, meet 1,630 kW launch peaks; ~150 units at 237 kWh each.",
				"-Regenerative Fuel Cells (RFCESS): emergency backup with ISRU potential using lunar water.",
				"\n",

				"Energy Generation",
				"Five technologies were evaluated: solar panels, space solar power (SSPS), thermal solar, RTGs, and small modular reactors (SMRs); using a trade-off matrix (specific energy, scalability, reliability, ISRU compatibility, dust tolerance, cost). Results:",
				"- SSPS: highest-ranked, optimal for dust tolerance, stability, and scalability.",
				"- SMRs: continuous stable power, viable at large scale despite mass penalty.",
				"Thermal Solar: strong balance between ISRU compatibility and reliability.",
				"Conventional panels and RTGs were deprioritized. The proposed grid mixes SSPS, SMRs, and thermal solar, designed to remain operational under two simultaneous failures by shedding non-essential loads.",
				"\n",

				"Distribution & Management",
				"A virtual power plant integrates sources and routes supply to storage and subsystems. Optical power beaming is selected as the primary transmission method, supported by limited-capacity cables for vital systems. The power management system balances generation peaks, directs surplus to storage, and ensures uninterrupted critical functions.",
			],
		},
		{
			title: "Habitation",
			content: [
				"Long-duration lunar missions can expose workers to stress, isolation, and extreme conditions that risk emotional instability, cognitive decline, and social tension. Habitability factors such as lighting, noise/auditory ambiance, air quality, privacy can have direct affect on mental health and performance. Therefore, designing habitats necessitates special care and requires an interdisciplinary approach which can be achieved by integrating architecture with neuroscience to sustain well-being and operational efficiency.",
				"ISS experience highlights persistent issues which include high CO₂, odors, VOCs, and particulates, all magnified on the Moon by lunar dust and larger populations (~230–300). Headache risk doubles with every 1 mmHg rise in CO₂; keeping averages ≤2.5 mmHg is critical. A digital twin enabled ECLSS can autonomously monitor air quality, predict failures, and guide non-specialist operators.",
				"Mental health issues are likely at rates similar to astronauts (22–43% anxiety/depression) and high-risk Earth workers (30–40%). Stress arises from proximity to rocket launches, life-support dependence, and constant high-risk exposure; isolation compounds depression risk.",
				"Spaceport design must balance functionality, safety, and habitability. Following design interventions for Well-Being are proposed:",
				"- Architecture & Neuroscience: biophilia, prospect–refuge, and stress-reduction theories guide designs with circadian lighting, ergonomic exercise areas, and external views.",

				"- Biophilic Design: plants, green walls, water features, artificial skylights, and nature sounds to reduce stress and improve concentration.",
				"- Human-Centered Interiors: flexible, multi-use layouts; textured, sensory-rich materials; differentiated zones (cafes, gyms, gardens, privacy pods).",
				"- Scent Recreation Capsules: novel olfactory interventions where workers recreate meaningful scents from Earth, reinforcing memory and cultural connection.",
				"- Lighting, Privacy, and Social Balance: tunable LEDs for circadian health, acoustic privacy pods, and communal hubs to foster cohesion.",
			],
		},
		{
			title: "Operations & Power Systems",
			content: [
				"Lunar-based PNT is valuable for spaceports, especially one located in the PSR of the LSP since signals from Earth will only reach that location intermittently. With a functioning PNT network, it becomes easier to operate for necessary communication and landing systems and any potential lunar orbiting systems.",
				"These technologies need to be both easy to install with little infrastructure and reliable enough to sustain early missions:",
				"\tPower Systems: Vertical solar arrays, modular towers, and optical power beaming will provide scalable energy. Early systems will focus on ISRU needs like water ice electrolysis for hydrogen and oxygen fuel.",
				"\tHydrogen Production & Storage: Electrolysis of polar ice is the most viable path for local rocket fuel. Challenges include cryogenic storage at 20 K and boil-off; solutions involve Zero-Boil-Off tanks, advanced composites, and possible ammonia synthesis as a safer, more stable hydrogen carrier.",
				"We suggest a phased, hybrid transport architecture to best address today’s lunar logistics gap - deploying modular, coordinated hoppers for flexible and autonomous point-to-point delivery alongside a FLOAT low-power system that allows fixed, high-cadence shuttling between designated sites.",
			],
		},
		{
			title: "Economics, Policy & Law",
			content: [
"Tourism is envisioned as the backbone of a sustainable lunar economy, integrated with logistics, manufacturing, and retail. A tiered service ladder ranges from remote VR moonwalks and orbital sightseeing to surface excursions, extended residencies for specialists, and bespoke luxury stays with custom habitats and fine dining. Complementary product offerings include lunar-themed merchandise, Moon-made artifacts, luxury collaborations, and scientific data packages, tying lunar experiences directly into Earth markets.",
 "High-value tiers (e.g., bespoke luxury stays priced at $350M–$750M per participant) could generate $3B–$7.5B annually from just a handful of bookings. Revenues are structured to support infrastructure, compliance, sustainability, and reinvestment. Financing emphasizes public–private partnerships, milestone payments, and staged growth, ensuring lunar tourism not only provides luxury experiences but also sustains long-term spaceport operations and Earth–Moon economic cooperation.",
 "Smart contracts could automate operations, from insurance payouts and resource management to trade agreements and infrastructure safety. By reducing bureaucracy and enabling on-site execution, they address Moon–Earth communication delays while ensuring transparency and efficiency. Risks include over-reliance on vulnerable oracles, ethical questions about delegating power to code, and the need for redundancy and oversight. With careful design,  automation could enable the first transparent, democratic, and resource-efficient society beyond Earth."
			],
		},
	];
	return (
		<div className="timeline-container">
			{steps.map((step, index) => (
				<div key={index} className="timeline-step">
					<div className="timeline-marker"></div>
					<div className="timeline-content">
						<h2>{step.title}</h2>

						{/* Texte de contenu */}
						{step.content.map((c, i) => {
							const isIndented = c.startsWith("\t") || c.startsWith("- ");
							const text = c.replace(/^\t|- /, "").trim();
							if (isIndented) {
								return (
									<p
										key={i}
										className="indent"
										dangerouslySetInnerHTML={{ __html: text }}
									/>
								);
							}
							return <p key={i} dangerouslySetInnerHTML={{ __html: c }} />;
						})}

						{/* 👉 Lien du rapport */}
						{step.reportlink && (
							<p className="report-link">
								<a
									href={step.reportlink.url}
									target="_blank"
									rel="noopener noreferrer"
								>
									{step.reportlink.text}
								</a>
							</p>
						)}
					</div>
				</div>
			))}
		</div>
	);
}
