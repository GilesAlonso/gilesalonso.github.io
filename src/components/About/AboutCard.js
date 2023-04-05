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
            <span className="purple">Giles Grolla Alonso </span>
            from <span className="purple"> Espirito Santo, Brazil.</span>
            <br />I am a dentist with a specialization in orthodontics, and I
            have been working in public health management since 2013. I'm
            passionate about incorporating technology into my work, and I'm
            always excited to learn about new advancements in the field.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
            <li className="about-activity">
              <ImPointRight /> Taking part in a good discussion
            </li>
          </ul>

          <p style={{ color: "rgb(126 172 134)" }}>
          "Striving for Smiles through Technology and Expertise"{" "}
          </p>
          <footer className="blockquote-footer">Giles</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
