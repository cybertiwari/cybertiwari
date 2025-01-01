import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
	return (
		<Card className="quote-card-view">
			<Card.Body>
				<blockquote className="blockquote mb-0">
					<p style={{ textAlign: "justify" }}>
						Hi Everyone, I am{" "}
						<span className="purple">Sunil Tiwari </span>
						from <span className="purple"> Rajasthan, India.</span>
						<br />
						I am a Software Engineer with 5 years of experience in
						web app development. I am currently employed as a
						software developer at Sunarc Technologies. I specialize
						in Laravel, React.js, Python, and AWS, building
						efficient and scalable applications. My work also
						includes integrating LLMs like Meta AI, OpenAI APIs, and
						Gemini AI APIs to create intelligent solutions.
						Passionate about technology, I focus on delivering
						impactful, user-friendly digital experiences tailored to
						business needs. Let's create something amazing together!
						<br />
						<br />
						Apart from coding, some other activities that I love to
						do!
					</p>
					<ul>
						<li className="about-activity">
							<ImPointRight /> Playing Bedmintion
						</li>
						<li className="about-activity">
							<ImPointRight /> Playing Call Of Duty
						</li>
						<li className="about-activity">
							<ImPointRight /> Travelling
						</li>
					</ul>

					<p style={{ color: "rgb(155 126 172)" }}>
						"Code is my canvas, technology is my brush, and
						innovation is the masterpiece I strive to create."{" "}
					</p>
					<footer className="blockquote-footer">Sunil Tiwari</footer>
				</blockquote>
			</Card.Body>
		</Card>
	);
}

export default AboutCard;
