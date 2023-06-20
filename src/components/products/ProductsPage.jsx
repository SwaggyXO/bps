import React from 'react'
import { Container, Row, Col, Image, FormControl } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';
import Fade from 'react-reveal/Fade';


const ProductsPage = ({headingA, imgA, headingB, imgB}) => {

    let strA = String(headingA).toLowerCase().split(" ");
    let strB = String(headingB).toLowerCase().split(" ");

    return (
        <>
            <Row>
                <Col className="col-lg-12" id="products-page-top-content">

                    <Fade left>
                        <div className="products-page-top-title">
                            <h1> <Link to={`/products/${strA[0]}`} target="_top" style={{textDecoration: 'none', color: '#000000'}} className='toolTip'> {headingA} </Link> </h1>
                        </div>
                    </Fade>

                    <Fade right>
                        <div className="products-page-top-img">
                            <img src={imgA} alt="" width="600px" />
                        </div>
                    </Fade>
                </Col>
            </Row>
            <Row>
                <Col className="col-lg-12" id="products-page-bottom-content">

                    <Fade left>
                        <div className="products-page-bottom-img">
                            <img src={imgB} alt="" width="600px" />
                        </div>
                    </Fade>

                    <Fade right>
                        <div className="products-page-bottom-title">
                            <h1> <Link to={`/products/${strB[0]}`} target="_top" style={{textDecoration: 'none', color: '#000000'}} className='toolTip'> {headingB} </Link> </h1>
                        </div>
                    </Fade>
                </Col>
            </Row>

            <Tooltip anchorSelect=".toolTip" content="Click to learn more" position="right" float={true} variant="info"></Tooltip>
        </>
  )
}

export default ProductsPage