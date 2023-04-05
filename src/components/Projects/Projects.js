import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import landing from "../../Assets/Projects/landing.png";
import emotion from "../../Assets/Projects/emotion.png";
import beesDashboard from "../../Assets/Projects/beesDashboard.png";
import edgeFinderEURUSD from "../../Assets/Projects/edgeFinderEURUSD.png";
import suicide from "../../Assets/Projects/suicide.png";
import ledwellAuctions from "../../Assets/Projects/ledwellAuctions.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={edgeFinderEURUSD}
              isBlog={true}
              title="THE EDGEFINDER"
              description="Revolutionary Product by Nick Syiek and Frank Cabibi: Discover the incredible solution that has taken the market by storm! Combining the innovative ideas and goals of two brilliant minds, this solid product has become one of the flagship offerings of Nick's company, A1Trading.com. Don't miss out on the cutting-edge technology that is changing the game. Check it out now!"
              ghLink="https://a1trading.com/edgefinder-story/"
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ledwellAuctions}
              isBlog={true}
              title="Auction schedule & planner"
              description="Revamped Auction Management: Simplify your Auction schedule and location management with an Appsheet built on Google sheets! This nifty app features advanced functions like residence mapping and categorization, plus a .kml file showcasing how the 2014 flood impacted the area's house pricing. Say goodbye to manual organization and hello to seamless auction coordination!"
             // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
             // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={beesDashboard}
              isBlog={false}
              title="BEES VIDEO DASHBOARD"
              description="Elevate Your Studio Production with a Consolidated Dashboard: No more juggling spreadsheets and struggling to keep track of data! Paulo's company has found the ultimate solution to monitor production and release across all their global studios. Thanks to advanced data organization and easy-to-use Google Sheets integration, this dashboard presents all the information in a single place. Plus, the sleek appearance has been expertly adjusted by Paulo and his team for maximum visual impact. Say goodbye to clutter and hello to streamlined productivity!"
             // ghLink="https://github.com/soumyajit4419/Editor.io"
             // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={landing}
              isBlog={false}
              title="Landing Page Sample"
              description="GamaAcademy course project, landing page with email registration in LocalStorage, Original template obtained from https://www.digitaldesignjournal.com/, modified to meet the requirements. Random images fetched from the internet to complete the template."
              ghLink="https://github.com/GilesAlonso/PaginaSegunda"
              demoLink="https://random-aleatory-black-friday-site.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title=""
              description=""
              ghLink=""
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title=""
              description=""
              ghLink=""
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
