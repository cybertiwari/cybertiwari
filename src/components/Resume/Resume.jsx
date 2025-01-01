import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../../Assets/Sunil-Tiwari-Software-Engineer.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/TextLayer.css";
import "react-pdf/dist/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.mjs`;

function Resume() {
	const [width, setWidth] = useState(1200);
	const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);

	function onDocumentLoadSuccess({ numPages }) {
		setNumPages(numPages);
		setPageNumber(1);
	}
	useEffect(() => {
		setWidth(window.innerWidth);
	}, []);

	// Navigate to the previous page
	const goToPreviousPage = () => {
		if (pageNumber > 1) {
			setPageNumber(pageNumber - 1);
		}
	};

	// Navigate to the next page
	const goToNextPage = () => {
		if (pageNumber < numPages) {
			setPageNumber(pageNumber + 1);
		}
	};

	return (
		<div>
			<Container fluid className="resume-section">
				<Row style={{ justifyContent: "center", position: "relative" }}>
					<Button
						variant="primary"
						href={pdf}
						target="_blank"
						style={{ maxWidth: "250px" }}
					>
						<AiOutlineDownload />
						&nbsp;Download CV
					</Button>
				</Row>

				<Row className="resume">
					<Document
						file={pdf}
						className="d-flex justify-content-center"
						onLoadSuccess={onDocumentLoadSuccess}
					>
						<Page
							pageNumber={pageNumber}
							scale={width > 786 ? 1.7 : 0.6}
						/>
					</Document>
				</Row>
				{/* Navigation buttons */}
				<Row
					style={{
						justifyContent: "center",
						position: "relative",
						marginBottom: "1rem",
					}}
				>
					<div className="page-navigation">
						<Button
							variant="primary"
							className="nav-button"
							onClick={goToPreviousPage}
							disabled={pageNumber === 1}
						>
							<GrFormPrevious />
						</Button>
						<span className="page-indicator">
							{pageNumber} of {numPages}
						</span>
						<Button
							variant="primary"
							className="nav-button"
							onClick={goToNextPage}
							disabled={pageNumber === numPages}
						>
							<GrFormNext />
						</Button>
					</div>
				</Row>
				<Row style={{ justifyContent: "center", position: "relative" }}>
					<Button
						variant="primary"
						href={pdf}
						target="_blank"
						style={{ maxWidth: "250px" }}
					>
						<AiOutlineDownload />
						&nbsp;Download CV
					</Button>
				</Row>
			</Container>
		</div>
	);
}

export default Resume;
