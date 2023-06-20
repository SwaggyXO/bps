import { Container, Row, Col, Image, FormControl } from "react-bootstrap";
import './Products.css';
import { BsArrowDown } from 'react-icons/bs';
import ProductsPage from "./ProductsPage";
import { Fade } from "react-reveal";

const Products = () => {
  return (
    <>
        <Container fluid id="products-intro">
            <Row>
                <Col className="col-lg-12" id="products-intro-content">
                    
                    <Fade left>
                        <div className="products-intro-heading">
                            <h3>Why Choose Us?</h3>
                        </div>
                    </Fade>

                    <Fade left>
                        <div className="products-intro-tagline">
                            <h1>Creating Tailored Solutions for Your Business</h1>
                        </div>
                    </Fade>

                    <Fade left>
                        <div className="products-intro-descp">
                            <p>
                                We're a specialized equipment and machine factory that delivers top-quality products with a flexible approach, timely delivery, and innovative concepts. 
                                Our skilled team of engineers and designers use the latest techniques and materials to meet our clients' unique needs. 
                                Let us help bring your vision to life.
                            </p>
                        </div>
                    </Fade>

                    <div className="products-intro-imgs">
                        
                        <Fade left>
                            <div className="products-intro-img">
                                <img src="about_us.png" alt="" />
                            </div>
                        </Fade>

                        <Fade bottom>
                            <div className="products-intro-img">
                                <img id="products-intro-img-mid" src="about_us.png" alt="" />
                            </div>
                        </Fade>

                        <Fade right>
                            <div className="products-intro-img">
                                <img src="about_us.png" alt="" />
                            </div>
                        </Fade>
                    </div>

                    <Fade top>
                        <div className="products-intro-outro">
                            <h3>Our offerings</h3>
                            <BsArrowDown fontSize="40px" />
                        </div>
                    </Fade>

                </Col>
            </Row>
        </Container>

        <Container id="products-page" style={{backgroundColor: '#D9D9D9'}} fluid>
            <ProductsPage headingA="Workstations" imgA="workstations.png" headingB="Process Automation/Special Purpose Machine" imgB="proc_auto.png" />
        </Container>

        <Container id="products-page" style={{backgroundColor: '#BABABA'}} fluid>
            <ProductsPage headingA="Assembly Jigs, Fixtures and Testing Equipment" imgA="assem_jigs_t_equip.png" headingB="Material Storage and Handling Equipment" imgB="handling_equip.png" />
        </Container>
    </>
  )
}

export default Products