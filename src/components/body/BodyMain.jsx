import React from "react";
import NavMain from "../navbar/NavMain";
import "./BodyMain.css";
import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Col, Image, FormControl } from "react-bootstrap";
import Card from 'react-bootstrap/Card';

const BodyMain = () => {
  return (
    <div>
      <NavMain />

      <div className="intro-carousel">
        <Carousel fade variant="dark" indicators={false}>
          <Carousel.Item interval={2000}>
            <img className="d-block" src="ws_1.jpg" alt="First slide" />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img className="d-block" src="ws_2.jpg" alt="Second slide" />
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img className="d-block" src="ws_3.jpg" alt="Third slide" />
          </Carousel.Item>
        </Carousel>
      </div>

      <Container fluid>
        <Row className="about-section">
          <Col className="col-lg-6 left-content">
            <h1>About Us</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
              asperiores rerum non voluptatum vitae, animi odio maxime iure
              eveniet sint illum pariatur tenetur debitis fuga odit recusandae
              nobis deleniti? Harum. Soluta incidunt quae quos laudantium, sed
              doloribus placeat! Minus nostrum, dolore suscipit saepe dolorem
              voluptatibus error nemo, tempore enim ducimus iure distinctio
              officia ipsum sunt harum commodi, provident deleniti rerum.
              Cupiditate quisquam vel eaque magni. Doloribus a quo ipsum ut
              deserunt? Amet et aut fugit facere saepe odit ullam aliquid quam
              maxime dicta, voluptatem fugiat deleniti labore molestiae natus
              est. Consequuntur, accusantium. Praesentium vitae vero recusandae
              quidem optio ex voluptatum enim dolores minus exercitationem dolor
              nam, neque iusto, consequuntur, quasi eveniet culpa molestias
              laudantium. Quos veritatis repudiandae et quisquam veniam.
            </p>
          </Col>
          <Col className="col-lg-6 right-content">
            <img src="about_1.png" alt="" />
          </Col>
        </Row>
      </Container>

      <div className="products-section">
        <h1>Our Products</h1>

        <div className="cards">
          <div className="card">
            <h2>Title 1</h2>
          </div>

          <div className="card">
            <h2>Title 1</h2>
          </div>

          <div className="card">
            <h2>Title 1</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyMain;
