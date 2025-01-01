import React from "react";
import LeetCodeCalendar from "leetcode-calendar";
import { Row } from "react-bootstrap";

function Leetcode() {
	const svgElement = document.querySelector(".styles-module_calendar__sT1ND");
	console.log(svgElement);

	if (svgElement) {
		svgElement.setAttribute("height", "0");
	}

	return (
		<Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
			<h1 className="project-heading" style={{ paddingBottom: "20px" }}>
				Days I <strong className="purple">LeetCode</strong>
			</h1>
			<LeetCodeCalendar
				username="cybertiwari"
				blockSize={15}
				blockMargin={5}
				color="#c084f5"
				fontSize={16}
				width="0"
				style={{
					maxWidth: "1055px",
				}}
			/>
		</Row>
	);
}

export default Leetcode;
