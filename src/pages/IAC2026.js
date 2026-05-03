import { TermComponent, WebsiteNavbar, Footer, RoadMap } from "../components";
// import * as images from "../images/long-term-vision";

export function IAC2026() {
  return (
    <div className="PageContainer">
      <WebsiteNavbar />
      <div className="PageContent">
        <TermComponent
          title={"Abstract submission for IAC 2026"}
          text={
            <>
              <p>As humanity prepares for a return to the lunar surface with Artemis III, new paradigms for surface mobility, ISRU, communication and navigation will be essential. Robotics will be a key enabler for human presence on the moon and future lunar activities will be dependent on the ability to effectively communicate with these systems. A continuous robotic presence will be essential in hybrid missions, motivating the development of a concept for enhanced human activities in this paper. Additionally, the infrastructure and bandwidth requirements to support these robotic operations will be explored, with several connectivity solutions being proposed.</p>

              <p>For decades, human–robot interaction (HRI) has been explored as a foundational framework for interplanetary exploration. Telerobotics, the remote interaction between humans and robotic systems, has demonstrated significant potential in space applications. These experiments incorporate closed-loop feedback mechanisms, including haptic feedback, enabling operators to perceive terrain irregularities and navigate more effectively. Embedding multisensory feedback interfaces, including haptic-audio channels, can further enhance situational awareness and operational fluidity. Robotic systems can extend human physiological and perceptual capabilities, enhance precision in scientific experimentation, and facilitate construction and ISRU-related activities under extreme environmental conditions.</p>

              <p>This paper investigates advanced HRI interfaces as enabling systems for lunar mobility and sustainable, semi-autonomous operations. The integration of telerobotics with autonomous interfaces will be examined, alongside the convergence of soft robotics and EVA operations, to propose adaptive and resilient operational architectures for the lunar environment. We also explore AI-supported interfaces to evaluate implementations of real-time (semi)autonomous operability of the developed HRI systems.</p>

              <p>Ultimately, a robust link to Earth will be imperative for these robotic implementations, and this paper will investigate the feasibility of an optical link that integrates with both fixed and mobile infrastructure. An analysis will be presented that demonstrates how this can be achieved and integrated with a surface-based mesh network to support sustained operations. Additionally, several network types will be investigated, highlighting their suitability through modelled link budgets. A key component of the proposed solutions will be validating 4G suitability with data from tests conducted in Antarctica by one of the authors during his mission with the Australian Antarctic Division as a Communications Technical Officer, which enabled simulating analogous conditions to the Lunar South Pole. While environmental aspects might have differed, the extreme conditions and prevailing ice provide a comparable surface situation for further evaluation.</p>
            </>
          }
        />
      </div>

      <div className="RoadMap"></div>

      <Footer />
    </div>
  );
}
