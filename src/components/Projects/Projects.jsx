import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import ClothSimulation from "../../Assets/Projects/cloth-simulation.png";
import IndianFlagSimulation from "../../Assets/Projects/indian-flag.png";
import WeddingInvitation from "../../Assets/Projects/wedding-invitation.png";
import TwinsTalk from "../../Assets/Projects/twinstalk.png";
import syncRoom from "../../Assets/Projects/syncRoom.png";
import TAS from "../../Assets/Projects/TAS.png";
import KafeBiz from "../../Assets/Projects/KafeBiz.png";
import QuoteNow from "../../Assets/Projects/QuoteNow.png";
import QMTool from "../../Assets/Projects/QMTool.png";

const projects = [
	{
		imgPath: TAS,
		title: "Toll Analytics System (TAS)",
		description:
			"Toll Analytics System (TAS) automates toll data processing by extracting transaction records from toll plazas and bank APIs, transforming them via AWS Glue, and storing them in Redshift. It enables reporting, dispute resolution, and image management through a Laravel-based dashboard.",
		ghLink: "https://github.com/cybertiwari/TAS",
		demoLink: "https://tas.interiseworld.com/login",
	},
	{
		imgPath: KafeBiz,
		title: "KafeBiz",
		description:
			"KafeBiz is a Laravel-based coworking space marketplace connecting space owners and renters. Owners list spaces, renters search and book via AWS-hosted MySQL and S3 storage. Admins approve listings, manage payments, and earn commissions. Secure payments and seamless booking ensure efficiency.",
		ghLink: "https://github.com/cybertiwari/kafebiz",
		demoLink: "https://www.coworkhub.in/",
	},
	{
		imgPath: QMTool,
		title: "QM Tool",
		description:
			"QMTool is a Laravel + Vue.js web app for auditing call center recordings. It enables manual audits, rebuttals (up to three times), calibration, and reporting. Admins assign audits, auditors review calls, and reports track agent performance and compliance.",
		ghLink: "https://github.com/cybertiwari/QMTool",
		demoLink: "https://simpliq.qdegrees.com/",
	},
	{
		imgPath: QuoteNow,
		title: "QuoteNow",
		description:
			"QuoteNow is a property inspection and tradie job portal that streamlines inspections, service requests, and job management. It connects landlords, tenants, and tradies, enabling seamless quote generation, task assignments, and payments, ensuring efficient property maintenance and service handling. Built with Laravel and React.",
		ghLink: "https://github.com/cybertiwari/QuoteNow",
		demoLink: "https://www.quotenow.com.au/",
	},
	{
		imgPath: TwinsTalk,
		title: "Twins Talk AI Chatbot",
		description:
			"Twins Talk is a Streamlit-based conversational AI project leveraging OpenAI's capabilities for multilingual, interactive chat experiences. It features a customizable, lightweight, and user-friendly interface, designed to provide seamless conversational interactions for various use cases.",
		ghLink: "https://github.com/cybertiwari/twinstalk/",
		demoLink: "https://twinstalk.suniltiwari.dev/",
	},
	{
		imgPath: syncRoom,
		title: "syncRoom | Your Digital Meeting Room",
		description:
			"syncRoom is a React-based video conferencing app featuring Jitsi integration, real-time meeting management, and a user-friendly interface. Built with Vite and Tailwind CSS, it ensures seamless communication and collaboration for teams.",
		ghLink: "https://github.com/cybertiwari/syncRoom",
		demoLink: "https://syncroom.suniltiwari.dev",
	},
	{
		imgPath: WeddingInvitation,
		title: "Digital Wedding Invitation",
		description:
			"Digital Wedding Invitation is an open-source project offering a customizable and interactive wedding invitation webpage. Featuring animations, a countdown timer, and responsive design, it combines elegance and functionality for a memorable digital experience celebrating your special day.",
		ghLink: "https://github.com/cybertiwari/WeddingInvitation",
		demoLink: "https://wedding-invitation.suniltiwari.dev/",
	},
	{
		imgPath: ClothSimulation,
		title: "Cloth Simulation",
		description:
			"Cloth Simulation is an open-source project using Three.js to create realistic 3D cloth physics. It features real-time rendering, interactive camera controls, and responsive design, providing an excellent platform to explore physics-based animations and Three.js capabilities.",
		ghLink: "https://github.com/cybertiwari/Cloth-Simulation",
		demoLink: "https://cloth-simulation.suniltiwari.dev/",
	},
	{
		imgPath: IndianFlagSimulation,
		title: "Indian Flag Simulation",
		description:
			"Indian Flag Simulation is an open-source Three.js project showcasing a realistic 3D animation of the Indian flag waving. It celebrates 'Azadi ka Amrit Mahotsav,' combining WebGL graphics, interactive controls, and physics-based simulation for an engaging visual experience.",
		ghLink: "https://github.com/cybertiwari/Indian-Flag",
		demoLink: "https://indian-flag.suniltiwari.dev/",
	},
];

function Projects() {
	return (
		<Container fluid className="project-section">
			<Container>
				<h1 className="project-heading">
					My Recent <strong className="purple">Works</strong>
				</h1>
				<p style={{ color: "white" }}>
					Here are a few projects I've worked on recently.
				</p>
				<Row
					style={{ justifyContent: "center", paddingBottom: "10px" }}
				>
					{projects.map((project, index) => (
						<Col key={index} md={4} className="project-card">
							<ProjectCard
								imgPath={project.imgPath}
								isBlog={false}
								title={project.title}
								description={project.description}
								ghLink={project.ghLink}
								demoLink={project.demoLink}
							/>
						</Col>
					))}
				</Row>
			</Container>
		</Container>
	);
}

export default Projects;
