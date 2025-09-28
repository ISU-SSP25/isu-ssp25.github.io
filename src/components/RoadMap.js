import "./RoadMap.css";
import * as images from "../images/short-term-mission";

export function RoadMap() {
  const steps = [
    {
      icon: images.SiteSelectionEnvironment,
      title: "Site Selection & Environment",
      content: [
        "Choosing a lunar spaceport site depends on resource access, safe landing terrain, power availability, thermal stability, and communication links with Earth. These factors ensure both short-term operations and long-term sustainability.",
        "The Lunar South Pole, particularly the de Gerlache Rim 2 region, offers near-continuous sunlight, proximity to volatile-rich permanently shadowed regions, and natural shielding topography, while maintaining direct line-of-sight communication with Earth.",
        "Key challenges include higher delta-v requirements for polar missions, extreme cold in shadowed regions, and hazardous regolith dust, which demand robust dust mitigation and detailed geophysical surveys before construction."
      ],
      reportlink: { 
        text: "Section 1.1 of the report", 
        url: "https://isulibrary.isunet.edu/index.php?lvl=notice_display&id=12277"
      },
    },
    {
      icon: images.SpaceportInfrastructure,
      title: "Spaceport Infrastructure",
      content: [
        "Lunar Launch and Landing Pads (LLPs) are essential to protect orbital and surface assets from high-velocity ejecta generated during landings. Without proper LLP or safe measures, plume-driven debris can travel greater than 2,000 m/s and damage infrastructure or orbiting systems.",
        "Our approach offers a two-fold solution:",
        "\t1. Deployable and temporary LLPs for rapid, movable early-mission use.",
        "\t2. Prepare a high-bearing-capacity subgrade by lowering the surface to a particular depth, then paving it with regolith bricks to create durability (ISRU-built LLP).",
        "Space radiation poses major risks to crews, electronics, and infrastructure. A sustainable approach combines lightweight alloys and hydrogen-rich polymers with regolith-based shielding, which can be compacted or enriched with additives like polyethylene or water to improve protection.",
        "ISRU (such as aluminum, magnesium, and iron) not only enhances radiation safety but also reduces reliance on Earth-supplied materials, supporting long-term resilience on the lunar surface.",
        "Robotics will be central to building and operating a lunar spaceport. Autonomous and semi-autonomous systems can handle tasks such as cargo offloading, mobility, and construction, reducing crew workload and mission risk."
      ],
      reportlink: { 
        text: "Section 1.1 of the report", 
        url: "https://isulibrary.isunet.edu/index.php?lvl=notice_display&id=12277"
      },
    },
    {
      icon: images.OperationsPowerSystems,
      title: "Operations & Power Systems",
      content: [
        "Lunar-based PNT is valuable for spaceports, especially one located in the PSR of the LSP since signals from Earth will only reach that location intermittently. With a functioning PNT network, it becomes easier to operate for necessary communication and landing systems and any potential lunar orbiting systems.",
        "These technologies need to be both easy to install with little infrastructure and reliable enough to sustain early missions:",
        "\tPower Systems: Vertical solar arrays, modular towers, and optical power beaming will provide scalable energy. Early systems will focus on ISRU needs like water ice electrolysis for hydrogen and oxygen fuel.",
        "\tHydrogen Production & Storage: Electrolysis of polar ice is the most viable path for local rocket fuel. Challenges include cryogenic storage at 20 K and boil-off; solutions involve Zero-Boil-Off tanks, advanced composites, and possible ammonia synthesis as a safer, more stable hydrogen carrier.",
        "We suggest a phased, hybrid transport architecture to best address today’s lunar logistics gap - deploying modular, coordinated hoppers for flexible and autonomous point-to-point delivery alongside a FLOAT low-power system that allows fixed, high-cadence shuttling between designated sites."
      ],
      reportlink: { 
        text: "Section 1.2 of the report", 
        url: "https://isulibrary.isunet.edu/index.php?lvl=notice_display&id=12277"
      },
    },
    {
      icon: images.CommunicationNavigation,
      title: "Communication & Navigation",
      content: [
        "Our mission architecture proposal is based on a mobile mesh network that removes blind spots and follows mission teams, solving problems that fixed or satellite-only systems cannot. Also, to ensure future-forward compatibility, we want to verify that our proposed mesh network is compliant with future LNSS standards, for which we must ensure signal compatibility, reference systems, interoperability and service volume definition.",
        "\tNavigation & Timing (PNT): Local lunar systems are needed since Earth signals cannot always reach permanently shadowed regions (PSRs). Mobile mesh networks and pseudolite towers can provide GPS-like services for landings, rovers, and autonomous robotics.",
        "\tCommunications: Early reliance on relay satellites (e.g., Lunar Pathfinder, LunaNet) will be supplemented by local networks. Mobile nodes and modular towers can adapt coverage, avoid blind spots, and ensure reliable links for crew, robotics, and cargo.",
        "Multi-purpose reusable tower",
        "\tOne solution for lunar communications includes Multi-Purpose Reusable Towers (MPRT), with the ability to determine their own location, and generate solar power. The design integrates telecommunications, navigation, and power generation within a single, rapidly deployable package.",
        "\tMPRTs will be positioned on peaks of near-constant light, to ensure consistent communication availability through mesh networking for data and PNT services, providing a  resilient cis-lunar communication backbone to assist in spacecraft landing and surface operations.",
        "\tBased on integrating with existing lunar base programs, like NASA’s LunaNet, the deployment and construction of MPRTs can be conducted in the short term through an uncrewed service establishment phase and developed to support semi-permanent operations.",
    ],
      reportlink: { 
        text: "Section 1.2 of the report", 
        url: "https://isulibrary.isunet.edu/index.php?lvl=notice_display&id=12277"
      },
    },
    {
      icon: images.SpaceportPolicyBusiness,
      title: "Spaceport Policy & Business",
      content: [
        "Our proposal recognizes that a lunar spaceport requires not just technical solutions but also new governance and business models. We outline a phased approach where governments finance and operate the first facilities under existing treaties (Outer Space Treaty, Artemis Accords), while private industry contributes through contracts.",
        "Our objective is to bridge the legal gap that must be addressed to ensure sustainable lunar development. Over time, operations would transition toward airport-style governance and diversified revenue streams.",
        "\tGovernance: Our approach introduces a Lunar Council to coordinate policy, a Lunar Credit system to reward contributions and manage access equitably, and a Lunar Tribunal to resolve disputes. A Lunar Safety Organization would oversee operational standards.",
        "\tLiability & Ownership: We propose a hybrid liability model: strict liability for high-risk launches and fault-based liability for broader operations. Since lunar land cannot be owned, our credit-based system offers investment rewards and operational privileges without violating international law.",
        "\tEconomics: Our analysis estimates initial pad construction at $4 billion, with launch/landing fees (~$20–30M per mission) forming the core revenue stream. Breakeven requires 15–20 launches per year, supplemented by ISRU propellant sales, cargo handling, and tourism. A public–private partnership model ensures financial sustainability and growth.",
    ],
      reportlink: { 
        text: "Section 1.3 of the report", 
        url: "https://isulibrary.isunet.edu/index.php?lvl=notice_display&id=12277"
      },
    },
];
return (
  <div className="timeline-container">

    {steps.map((step, index) => (
      <div key={index} className="timeline-step">
        <div className="timeline-marker">
          <img src={step.icon} alt={step.title} className="timeline-icon" />
        </div>
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