import React from "react";
import { Col, Row } from "react-bootstrap";
import {
	SiRedis,
	SiFirebase,
	SiPostgresql,
	SiMysql,
	SiLaravel,
	SiReact,
	SiPython,
	SiGit,
	SiAmazonaws,
	SiDocker,
	SiGraphql,
	SiOpenai,
} from "react-icons/si";

function Techstack() {
	return (
		<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
			<Col xs={4} md={2} className="tech-icons">
				<SiReact />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiLaravel />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiGit />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiPython />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiRedis />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiFirebase />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiPostgresql />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiMysql />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiAmazonaws />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiDocker />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiGraphql />
			</Col>
			<Col xs={4} md={2} className="tech-icons">
				<SiOpenai />
			</Col>
		</Row>
	);
}

export default Techstack;
