import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import golobe from "../../Assets/Projects/golobe.png";
import nyus from "../../Assets/Projects/nyus.png";
import jobportal from "../../Assets/Projects/job-portal.png";
import sportieEbikes from "../../Assets/Projects/sportie-ebikes.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="orange">Works </strong>
        </h1>
        <p style={{ color: "#090724 " }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={golobe}
              isBlog={false}
              title="Golobe"
              description="React Template for travel management and hotel booking with animated logo and components."
              ghLink="https://github.com/info-nitesh01/react-temp-golobe"
              demoLink="https://golobe-temp.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nyus}
              isBlog={false}
              title="NYUS"
              description="Pure HTML and CSS Template for Hotel management. Introduce the restaurant’s history, mission, and values. Highlight any unique selling points (USPs), such as farm-to-table ingredients, family recipes, or a cozy atmosphere.."
              ghLink="https://github.com/info-nitesh01/NYUS-Restaurant-Project"
              demoLink="https://nyus-food.netlify.app/#"
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sportieEbikes}
              isBlog={false}
              title="Sportie E-Bikes"
              description="React Template for E-bike Ecommerce template with animated logo and components with JSON data and filter page."
              ghLink="https://github.com/info-nitesh01/sportie-ebikes"
              demoLink="https://sportie-ebikes.netlify.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nyus}
              isBlog={false}
              title="Job-Portal"
              description="Next JS Template with typeScript for Job search and upload. Added different login category using data from JSON Server, with user authentication and authorization."
              ghLink="https://github.com/info-nitesh01/job-portal"
              demoLink="https://job-portal-example.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
