import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram, AiFillMessage } from "react-icons/ai";
import { FaLinkedinIn, FaDiscord } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a professional with a diverse background in dentistry,
              orthodontics, and public health management.
              <br />
              <br />
              Throughout my career, I've developed a{" "}
              <i>
                <b className="purple">strong </b>
              </i>
              interest in
              <i>
                <b className="purple"> data analysis</b> and{" "}
                <b className="purple">management, </b>
              </i>{" "}
              <br />
              which has led me to explore different tools and technologies to
              <b className="purple"> capture, comprehend,</b> and{" "}
              <b className="purple">transform </b>information effectively.
              <br />
              <br />
              I'm proficient in a variety of{" "}
              <i>
                <b className="purple">data-related tools and languages,</b>{" "}
              </i>
              including &nbsp;Google Sheets, Google Data Studio, JavaScript,
              Appsheet, HTML, CSS, Python, Excel, and PowerBI.
              <br />
              These skills have allowed me to gain{" "}
              <i>
                <b className="purple">valuable insights</b>
              </i>{" "}
              into complex data sets, streamline processes, and{" "}
              <b className="purple">make informed decisions</b> that benefit
              both <b className="purple">individuals and organizations.</b>{" "}
              <br />
              <br />
              Overall, I'm passionate about leveraging data to{" "}
              <b className="purple">solve real-world problems</b>, and I'm
              constantly seeking new ways to expand my knowledge and skills in
              this area.
              <br />
              <br />
              I'm excited to see where this{" "}
              <i>
                <b className="purple">journey</b>
              </i>{" "}
              takes me and how I can use my expertise to make a{" "}
              <b className="purple">positive impact</b> on the{" "}
              <i>
                <b className="purple">world</b>
              </i>{" "}
              around me.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/GilesAlonso"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://tawk.to/chat/640884f031ebfa0fe7f16040/1gr0keive"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillMessage />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/gilesalonso/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/giles.g.alonso"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://discord.com/users/882432288925814865"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaDiscord />
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
