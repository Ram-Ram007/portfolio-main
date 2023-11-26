import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avataaars.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <br />
            <br />
            <p className="home-about-body">
              I am a <b className="purple">Full Stack developer </b> who
              specializes in <b className="purple">frontend</b> development, who
              likes to craft solid and scalable frontend products with great
              user experience.
              <br />
              <br />
              Like a Jedi with a lightsaber, I wield the power of{" "}
              <b className="purple">
                Javascript, React.js, Node.js, Css, Git
              </b>{" "}
              and more with ease. I approach my work with a relaxed and natural
              style, always striving for excellence.
              <br />
              <br />
              When I'm not coding, you can find me at the beach&nbsp;
              <i>
                <b className="purple">surfing, climbing or traveling </b> the
                world search of new adventures. Or, if the weather isn't
                cooperating, you might find me curled up on the couch with a
                good book or<b className="purple"> videogame</b> .
              </i>
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <br />
          <br />
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/ram-ram007"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ramajeyam-s-451014250?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
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
