import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            Copyright &copy; ShoppyCart{" "}
            <a
              style={{
                background: "silver",
                color: "black",
                opacity: "0.7",
                padding: "7px",
                borderRadius: "4px",
              }}
              href="https://ashpakmulanii.github.io/portfolio/"
            >
              Visit my portfolio...
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
