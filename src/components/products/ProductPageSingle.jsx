import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { productObjs } from './productsList';
import NavMain from '../navbar/NavMain';
import Footer from '../footer/Footer';
import { Container, Row, Col } from 'react-bootstrap';
import './ProductPageSingle.css';

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
                                <div id='product-single-page-heading-div'>
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
                                </div>

                                <div id='product-single-page-items'>
                                    {ele.items.map((item, index) => {
                                        return <h3 key={index} id='product-single-page-item' > {item} </h3>
                                    })}
                                </div>
                            </Col>

                            <Col className="col-lg-6" id='product-single-page-right-content'>
                                <img src={ele.img} alt={ele.heading.toLowerCase()} id='product-single-page-img' width="600px" />   
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