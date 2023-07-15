import { Container, Row, Col, Image, FormControl } from "react-bootstrap";
import './Products.css';
import { BsArrowDown } from 'react-icons/bs';
import ProductsPage from "./ProductsPage";
import { motion } from "framer-motion";

const leftAnimate = {
    offScreen: {
      x: -200,
      opacity: 0
    },
    onScreen: {
      x: 0,
      opacity: 1
    },
}
  
const rightAnimate = {
    offScreen: {
      x: 200,
      opacity: 0
    },
    onScreen: {
      x: 0,
      opacity: 1
    },
}
  
const bottomAnimate = {
    offScreen: {
      y: 200,
      opacity: 0
    },
    onScreen: {
      y: 0,
      opacity: 1
    },
}

const topAnimate = {
    offScreen: {
      y: -200,
      opacity: 0
    },
    onScreen: {
      y: 0,
      opacity: 1
    },
}

const Products = () => {
  return (
    <>
        <Container fluid id="products-intro">
            <Row>
                <Col className="col-lg-12" id="products-intro-content">
                    
                        <motion.div className="products-intro-heading"
                            initial={"offScreen"}
                            whileInView={"onScreen"}
                            viewport={{once:true, amount: 0.1}}
                            transition={{
                              type: "spring",
                              delay: 0.3,
                              ease: [0.5, 0.71, 1, 1.5],
                            }}
                            variants={leftAnimate}
                        >
                            <h3>Why Choose Us?</h3>
                        </motion.div>

                        <motion.div className="products-intro-tagline"
                            initial={"offScreen"}
                            whileInView={"onScreen"}
                            viewport={{once:true, amount: 0.1}}
                            transition={{
                              type: "spring",
                              delay: 0.6,
                              ease: [0.5, 0.71, 1, 1.5],
                            }}
                            variants={leftAnimate}
                        >
                            <h1>Creating Tailored Solutions for Your Business</h1>
                        </motion.div>

                        <motion.div className="products-intro-descp"
                            initial={"offScreen"}
                            whileInView={"onScreen"}
                            viewport={{once:true, amount: 0.1}}
                            transition={{
                              type: "spring",
                              delay: 0.9,
                              ease: [0.5, 0.71, 1, 1.5],
                            }}
                            variants={leftAnimate}
                        >
                            <p>
                                We're a specialized equipment and machine factory that delivers top-quality products with a flexible approach, timely delivery, and innovative concepts. 
                                Our skilled team of engineers and designers use the latest techniques and materials to meet our clients' unique needs. 
                                Let us help bring your vision to life.
                            </p>
                        </motion.div>

                    <div className="products-intro-imgs">
                        
                            <motion.div className="products-intro-img"
                                initial={"offScreen"}
                                whileInView={"onScreen"}
                                viewport={{once:true, amount: 0.1}}
                                transition={{
                                  type: "spring",
                                  delay: 0.9,
                                  ease: [0.5, 0.71, 1, 1.5],
                                }}
                                variants={leftAnimate}
                            >
                                <img src="about_us.png" alt="" />
                            </motion.div>

                            <motion.div className="products-intro-img"
                                initial={"offScreen"}
                                whileInView={"onScreen"}
                                viewport={{once:true, amount: 0.1}}
                                transition={{
                                  type: "spring",
                                  delay: 1.5,
                                  ease: [0.5, 0.71, 1, 1.5],
                                }}
                                variants={topAnimate}
                            >
                                <img id="products-intro-img-mid" src="about_us.png" alt="" />
                            </motion.div>

                            <motion.div className="products-intro-img"
                                initial={"offScreen"}
                                whileInView={"onScreen"}
                                viewport={{once:true, amount: 0.1}}
                                transition={{
                                  type: "spring",
                                  delay: 1.2,
                                  ease: [0.5, 0.71, 1, 1.5],
                                }}
                                variants={rightAnimate}
                            >
                                <img src="about_us.png" alt="" />
                            </motion.div>
                    </div>

                        <motion.div className="products-intro-outro"
                            initial={"offScreen"}
                            whileInView={"onScreen"}
                            viewport={{once:true, amount: 0.1}}
                            transition={{
                              type: "spring",
                              delay: 1.6,
                              ease: [0.5, 0.71, 1, 1.5],
                            }}
                            variants={topAnimate}
                        >
                            <h3>Our offerings</h3>
                            <BsArrowDown fontSize="40px" />
                        </motion.div>

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