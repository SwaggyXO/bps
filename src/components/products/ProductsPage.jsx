import React from 'react'
import { Container, Row, Col, Image, FormControl } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
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


const ProductsPage = ({headingA, imgA, headingB, imgB}) => {

    let strA = String(headingA).toLowerCase().split(" ");
    let strB = String(headingB).toLowerCase().split(" ");

    return (
        <>
            <Row>
                <Col className="col-lg-6" id="products-page-top-content">

                        <motion.div className="products-page-top-title"
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
                            <h1> <Link to={`/products/${strA[0]}`} target="_top" style={{textDecoration: 'none', color: '#000000'}} className='toolTip'> {headingA} </Link> </h1>
                        </motion.div>
                </Col>

                <Col className="col-lg-6" id="products-page-top-content">

                        <motion.div className="products-page-top-img"
                            initial={"offScreen"}
                            whileInView={"onScreen"}
                            viewport={{once:true, amount: 0.1}}
                            transition={{
                              type: "spring",
                              delay: 0.3,
                              ease: [0.5, 0.71, 1, 1.5],
                            }}
                            variants={rightAnimate}
                        >
                            <img src={imgA} alt="" />
                        </motion.div>
                </Col>
            </Row>
            <Row>
                <Col className="col-lg-6" id="products-page-bottom-content">

                        <motion.div className="products-page-bottom-img"
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
                            <img src={imgB} alt="" />
                        </motion.div>

                </Col>

                <Col className="col-lg-6" id="products-page-bottom-content">

                        <motion.div className="products-page-bottom-title"
                            initial={"offScreen"}
                            whileInView={"onScreen"}
                            viewport={{once:true, amount: 0.1}}
                            transition={{
                              type: "spring",
                              delay: 0.3,
                              ease: [0.5, 0.71, 1, 1.5],
                            }}
                            variants={rightAnimate}
                        >
                            <h1> <Link to={`/products/${strB[0]}`} target="_top" style={{textDecoration: 'none', color: '#000000'}} className='toolTip'> {headingB} </Link> </h1>
                        </motion.div>

                </Col>
            </Row>

            <Tooltip anchorSelect=".toolTip" content="Click to learn more" position="right" float={true} variant="info"></Tooltip>
        </>
  )
}

export default ProductsPage