import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LanguagesCard from "./LanguagesCard";
import LibrariesCard from "./LibrariesCard";

const Languages = ({ languages, libraries }) => {
  return (
    <section className="languages">
      <Container className="languages-bx">
        <Row className="languages-row">
          <Col size={12}>
            <h2>Languages</h2>
            <Row>
              {languages.map((language) => {
                return <LanguagesCard language={language} />;
              })}
            </Row>
          </Col>
        </Row>
      </Container>
      <Container className="languages-bx">
        <Row className="languages-row">
          <Col size={12}>
            <h2>Libraries/ Tools</h2>
            <Row>
              {libraries.map((library) => {
                return <LibrariesCard library={library} />;
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Languages;
