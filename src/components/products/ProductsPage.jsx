import React from 'react'
import { Container, Row, Col, Image, FormControl } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tooltip';


const ProductsPage = ({headingA, imgA, headingB, imgB}) => {

    let strA = String(headingA).toLowerCase().split(" ");
    let strB = String(headingB).toLowerCase().split(" ");

    return (
        <>
            <Row>
                <Col className="col-lg-12" id="products-page-top-content">

                    <div className="products-page-top-title">
                        <h1> <Link to={`/products/${strA[0]}`} target="_top" style={{textDecoration: 'none', color: '#000000'}} className='toolTip'> {headingA} </Link> </h1>
                    </div>

                    

                    <div className="products-page-top-img">
                        <img src={imgA} alt="" width="600px" />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col className="col-lg-12" id="products-page-bottom-content">

                    <div className="products-page-bottom-img">
                        <img src={imgB} alt="" width="600px" />
                    </div>

                    <div className="products-page-bottom-title">
                        <h1> <Link to={`/products/${strB[0]}`} target="_top" style={{textDecoration: 'none', color: '#000000'}} className='toolTip'> {headingB} </Link> </h1>
                    </div>
                </Col>
            </Row>

            <Tooltip anchorSelect=".toolTip" content="Click to learn more" position="right" float={true} variant="info"></Tooltip>
        </>
  )
}

export default ProductsPage