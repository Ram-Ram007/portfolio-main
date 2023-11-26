import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            I am <span className="purple">Ram </span>
            originally from pondicherry.
            <br />
            When I'm not busy scribbling code, I like to keep things interesting
            by climbing mountains, gaming like there's no tomorrow, and scouring
            the earth for rare vinyls...You could say I'm a collector, but
            instead of stamps or coins, I collect grooves and scratches.
          </p>
          <h3 style={{ paddingBottom: "20px", paddingTop: "20px" }}>
            More about <strong className="purple">Ram </strong> 👀
          </h3>
          <p style={{ textAlign: "justify" }}>
            My
            <span className="purple"> educational</span> background is rooted in
            <span className="purple"> computer Engineering</span>I found myself
            drawn to technology and coding. So, I decided to embark on the
            ultimate coding journey
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
