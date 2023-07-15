import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { productObjs } from './productsList';
import NavMain from '../navbar/NavMain';
import Footer from '../footer/Footer';
import { Container, Row, Col } from 'react-bootstrap';
import './ProductPageSingle.css';
import { motion } from "framer-motion";

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

const ProductPageSingle = () => {
    const { id } = useParams();
    let a = id == "process" ? 1 : 0;

    return productObjs.map((ele) => {
        if (ele.heading.toLowerCase().split(" ")[0] == id)
        {
            let arr = ele.heading.split(" ");
            return (
                <React.Fragment>
                    <NavMain />

                    <Container fluid id='product-single-page'>
                        <Row id='product-single-page-content'>
                            <Col className="col-lg-6" id='product-single-page-left-content'>
                                <motion.div id={`product-single-page-heading-div${arr.length > 1 ? '-large' : ''}`}
                                    initial={"offScreen"}
                                    animate={"onScreen"}
                                    transition={{
                                      type: "spring",
                                      delay: 0.3,
                                      ease: [0.5, 0.71, 1, 1.5],
                                    }}
                                    variants={topAnimate}
                                >
                                    {arr.length > 2 ?
                                        <>
                                            <h1>
                                                {
                                                    arr[0] + " " + arr[1] + " " + arr[2]
                                                }

                                                <span>
                                                    <br />
                                                    {
                                                        arr[3] + " " + arr[4] + " " + (arr[5] ? arr[5] : "")
                                                    }
                                                </span>
                                            </h1>
                                        </>
                                    : <h1> {ele.heading} </h1>
                                    }
                                </motion.div>

                                <div id='product-single-page-items'>
                                    {ele.items.map((item, index) => {
                                        return <motion.h3 key={index} id='product-single-page-item' 
                                            initial={"offScreen"}
                                            animate={"onScreen"}
                                            transition={{
                                            type: "spring",
                                            delay: 0.6 + index / 10,
                                            ease: [0.5, 0.71, 1, 1.5],
                                            }}
                                            variants={topAnimate}
                                        > {item} </motion.h3>
                                    })}
                                </div>
                            </Col>

                            <Col className="col-lg-6" id='product-single-page-right-content'>
                                <motion.img src={ele.img} alt={ele.heading.toLowerCase()} id='product-single-page-img'
                                    initial={"offScreen"}
                                    animate={"onScreen"}
                                    transition={{
                                      type: "spring",
                                      delay: 0.6,
                                      ease: [0.5, 0.71, 1, 1.5],
                                    }}
                                    variants={rightAnimate}
                                ></motion.img>
                                
                            </Col>
                        </Row>
                    </Container>

                    <Footer />
                </React.Fragment>
            )
        }

        <Navigate to='/' />
    })
}

export default ProductPageSingle