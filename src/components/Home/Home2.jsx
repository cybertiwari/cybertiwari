import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
	AiFillGithub,
	AiOutlineTwitter,
	AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import huggingFaceLogo from "../../Assets/hf-logo.png";

function Home2() {
	return (
		<Container fluid className="home-about-section" id="about">
			<Container>
				<Row>
					<Col md={8} className="home-about-description">
						<h1 style={{ fontSize: "2.6em" }}>
							LET ME <span className="purple"> INTRODUCE </span>{" "}
							MYSELF
						</h1>

						<p className="home-about-body">
							I discovered my passion for programming early on and
							have enjoyed every moment of learning and building
							since then. 🤷‍♂️
							<br />
							<br />I am proficient in technologies like{" "}
							<i>
								<b className="purple">
									Laravel, React.js, Python, AWS, Git, Docker,
								</b>
							</i>{" "}
							and have experience working with{" "}
							<i>
								<b className="purple">AI/ML models and APIs.</b>
							</i>
							<br />
							<br />
							My field of interest lies in creating{" "}
							<i>
								<b className="purple">
									scalable Web Applications, exploring Cloud
									Computing, and integrating Artificial
									Intelligence
								</b>
							</i>{" "}
							to build smarter and more innovative solutions.
							<br />
							<br />
							Whenever possible, I enjoy combining my expertise in{" "}
							<i>
								<b className="purple">
									React.js for dynamic frontends, Laravel for
									robust backends,
								</b>
							</i>{" "}
							and leveraging{" "}
							<i>
								<b className="purple">AWS and Docker</b>
							</i>{" "}
							for deploying efficient, cloud-based applications.
							My passion also extends to{" "}
							<i>
								<b className="purple">exploring AI/ML</b>
							</i>{" "}
							to{" "}
							<i>
								<b className="purple">
									create intelligent and impactful
								</b>
							</i>{" "}
							digital experiences.
						</p>
					</Col>

					<Col md={4} className="myAvtar">
						<Tilt>
							<img
								src={myImg}
								className="img-fluid"
								alt="avatar"
							/>
						</Tilt>
					</Col>
				</Row>

				<Row>
					<Col md={12} xs={12} className="home-about-social">
						<h1>FIND ME ON</h1>
						<p>
							Feel free to{" "}
							<span className="purple">connect </span>with me
						</p>
						<ul className="home-about-social-links">
							<li className="social-icons">
								<a
									href="https://github.com/cybertiwari"
									target="_blank"
									rel="noreferrer"
									className="icon-colour  home-social-icons"
								>
									<AiFillGithub />
								</a>
							</li>
							<li className="social-icons">
								<a
									href="https://twitter.com/cybertiwari"
									target="_blank"
									rel="noreferrer"
									className="icon-colour  home-social-icons"
								>
									<AiOutlineTwitter />
								</a>
							</li>
							<li className="social-icons">
								<a
									href="https://www.linkedin.com/in/cybertiwari/"
									target="_blank"
									rel="noreferrer"
									className="icon-colour  home-social-icons"
								>
									<FaLinkedinIn />
								</a>
							</li>
							<li className="social-icons">
								<a
									href="https://www.instagram.com/cybertiwari"
									target="_blank"
									rel="noreferrer"
									className="icon-colour home-social-icons"
								>
									<AiFillInstagram />
								</a>
							</li>
							<li className="social-icons">
								<a
									href="https://huggingface.co/cybertiwari"
									target="_blank"
									rel="noreferrer"
									className="icon-colour home-social-icons"
								>
									<img
										src={huggingFaceLogo}
										alt="Hugging Face"
										style={{
											width: "30px",
											height: "30px",
										}}
									/>
								</a>
							</li>
							<li className="social-icons">
								<a
									href="https://leetcode.com/u/cybertiwari/"
									target="_blank"
									rel="noreferrer"
									className="icon-colour home-social-icons"
								>
									<SiLeetcode />
								</a>
							</li>
						</ul>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}
export default Home2;
