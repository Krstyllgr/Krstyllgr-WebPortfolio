import React from "react";
import "./about.css";
import { Container } from "react-bootstrap";
import AboutMe from "../../assets/grad.jpg";

function About() {
  return (
    <div>
      <Container className="main-container" id="aboutSection">
        <div className="myAboutImage">
          <img src={AboutMe} alt="Me" className="AboutMeImg" />
        </div>
        <div className="myAboutDetails">
          <h1>About Me</h1>
          <h6>
            Hello! I’m Kristyl Axlee Alegre, a passionate Cybersecurity
            Specialist and Web Developer with a strong foundation in Network
            Technology. I graduated with a Bachelor of Science in Information
            Technology, majoring in Network Technology from Batangas State
            University - The National Engineering University. My academic
            journey has equipped me with a deep understanding of computer
            networks, cybersecurity principles, and web development, which
            fueled my passion for technology and problem-solving. I have always
            been fascinated by how technology shapes the world, and this
            curiosity led me to explore various aspects of IT, from web
            development to cybersecurity.
          </h6>
        </div>
      </Container>
    </div>
  );
}

export default About;
