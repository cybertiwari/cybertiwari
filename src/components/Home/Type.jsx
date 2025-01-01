import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
	return (
		<Typewriter
			options={{
				strings: [
					"Software Developer Engineer",
					"Freelancer",
					"LAMP Stack Developer",
					"Open Source Contributor",
					"AI/ML Engineer",
				],
				autoStart: true,
				loop: true,
				deleteSpeed: 50,
			}}
		/>
	);
}

export default Type;
