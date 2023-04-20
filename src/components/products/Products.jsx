import { Container, Row, Col, Image, FormControl } from "react-bootstrap";
import './Products.css';
import { BsArrowDown } from 'react-icons/bs';

const Products = () => {
  return (
    <>
        <Container fluid id="products-intro">
            <Row>
                <Col className="col-lg-12" id="products-intro-content">
                    <div className="products-intro-heading">
                        <h3>Why Choose Us?</h3>
                    </div>

                    <div className="products-intro-tagline">
                        <h1>Creating Tailored Solutions for Your Business</h1>
                    </div>

                    <div className="products-intro-descp">
                        <p>
                            We're a specialized equipment and machine factory that delivers top-quality products with a flexible approach, timely delivery, and innovative concepts. 
                            Our skilled team of engineers and designers use the latest techniques and materials to meet our clients' unique needs. 
                            Let us help bring your vision to life.
                        </p>
                    </div>

                    <div className="products-intro-imgs">
                        <div className="products-intro-img">
                            <img src="about_us.png" alt="" />
                        </div>
                        <div className="products-intro-img">
                            <img id="products-intro-img-mid" src="about_us.png" alt="" />
                        </div>
                        <div className="products-intro-img">
                            <img src="about_us.png" alt="" />
                        </div>
                    </div>

                    <div className="products-intro-outro">
                        <h3>Our offerings</h3>
                        <BsArrowDown fontSize="40px" />
                    </div>
                </Col>
            </Row>
        </Container>

        <Container id="products-page-1" fluid>
            <Row>
                <Col className="col-lg-12" id="products-page-1-left-content">
                    <div className="products-page-1-left-title">
                        <h1>Workstations</h1>
                    </div>

                    <div className="products-page-1-left-img">
                        <img src="workstations.png" alt="" width="400px" />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className="col-lg-12" id="products-page-1-right-content">
                    <div className="products-page-1-right-img">
                        <img src="proc_auto.png" alt="" width="400px" />
                    </div>

                    <div className="products-page-1-right-title">
                        <h1>Process Automation/Special Purpose Machine</h1>
                    </div>
                </Col>
            </Row>
        </Container>
    </>
  )
}

export default Products