import React from "react";
import NavMain from "../navbar/NavMain";
import "./BodyMain.css";
import { Container, Row, Col, Image, FormControl } from "react-bootstrap";
import { BsArrowRight } from 'react-icons/bs'
import Slide from 'react-reveal/Slide';
import { Fade } from "react-reveal";
import Flip from 'react-reveal/Flip';
import Footer from "../footer/Footer";
import Products from "../products/Products";

const BodyMain = () => {
  return (
    <>
      <Container id="intro" fluid>
        <NavMain />
        <Container fluid id="intro-section">
          <Row>
            <Col className="col-lg-6" id="intro-left-content">
              <Fade top cascade>
                <div className="intro-h1">
                  <h1>Crafting Precision Machines for Your Unique Needs</h1>
                </div>

                <div className="intro-p">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                </div>

                <div className="intro-buttons">
                  <div className="intro-btn">
                    <button className="primary-btn btn" id="intro-btn-1">View Our Products</button>
                  </div>

                  <div className="intro-btn">
                    <button className="primary-btn btn" id="intro-btn-2"> <a href="#footer-main"> Reach out </a> <span> <BsArrowRight /> </span> </button>
                  </div>
                </div>
              </Fade>
            </Col>

            <Col className="col-lg-6" id="intro-right-content">
              <div className="intro-img">
                <Fade top>
                  <img src="home_page.png" alt=""/>
                </Fade>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container id="about-section" fluid>
        <Row>
          <Col className="col-lg-6" id="about-left-content">

            <Fade left cascade>
              <div className="about-h2">
                  <h2>About Us</h2>
              </div>

              <div className="about-h1">
                  <h1>Our designs solve problems</h1>
              </div>

              <div className="about-p">
                  <p>
                    Mr. R. K. Pal, Technical Director, holds a B.Tech degree in Mechanical Engineering from IIT Kharagpur and has an extensive experience of over 40 years in manufacturing with leading organizations such as Maruti Suzuki, GM, Hyundai, and others. 
                    He specializes in Lean/TPM/TPS and other world-class manufacturing systems.
                    Mr. H. K. Tyagi holds a Diploma in Mechanical Engineering and a B.Tech in Mechanical Engineering with a specialization in Computer-Integrated Manufacturing (CIM), 
                    in addition to an MBA in Operations. He has been working with auto and electronic industries since 1996 and has held lead and consultation roles in Industrial Engineering with other leading organizations in manufacturing.
                  </p>
              </div>
            </Fade>

          </Col>
          <Col className="col-lg-6" id="about-right-content">
            <div className="about-img">
              <Fade right>
                <img src="about_1.png" alt=""  />
              </Fade>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="col-lg-4 about-cards">
            <Fade bottom cascade>
              <div className="about-card">
                <div>
                  <h1>Mission</h1>
                </div>
                <div>
                  <p>Our aim is to become the top industrial equipment supplier in India, offering a wide range of products that help reduce process costs.</p>
                </div>
              </div>
            </Fade>
          </Col>
          <Col className="col-lg-4 about-cards">
            <div className="about-card">
              <Fade bottom cascade>
                <div>
                  <h1>Vision</h1>
                </div>
                <div>
                  <p>We specialize in the integration of the latest assembly line automation and industrial automation technologies to deliver high-quality tooling solutions.</p>
                </div>
              </Fade>
            </div>
          </Col>

          <Col className="col-lg-4 about-cards">
            <Fade bottom cascade>
              <div className="about-card">
                <div>
                  <h1>Values</h1>
                </div>
                <div>
                  <p>Prioritizing customer satisfaction, ensuring high-quality work, delivering on our commitments, and fostering strong collaborations with our business associates.</p>
                </div>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>

      <Products />

      <Footer />
    </>
  );
};

export default BodyMain;
