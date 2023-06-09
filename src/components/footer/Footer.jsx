import './Footer.css';
import { Container, Row, Col, Image, FormControl } from "react-bootstrap";
import { BsTelephone, BsYoutube } from 'react-icons/bs';
import { TfiEmail } from 'react-icons/tfi';
import { UserOutlined, MailOutlined, MobileOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { useState } from 'react';
const { TextArea } = Input;
import Fade from 'react-reveal/Fade';

const Footer = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile: '',
        message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const {name, email, mobile, message} = formData;

        const mailToLink = `mailto:pagchump96@gmail.com?subject=New Message From${name}&body=${encodeURIComponent(`${message}\n\n${mobile}`)}`;
        window.location.href = mailToLink;
    }

    const handleChange = (e) => {
        const {name, value} = e.target;

        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }))
    }

    return (
        <Container fluid id="footer-main">
            <Row>
                <Col className="col-lg-6">
                    {/* <Fade bottom cascade> */}
                        <div className="footer-left-content">

                            <div className="footer-left-intro">
                                <div className="footer-img">
                                    <img src="logo_main.png" alt="" />
                                </div>

                                <div className="footer-links">
                                    <h5>Catch us at: </h5>
                                    <a href=''> <BsYoutube /> </a>
                                </div>
                            </div>

                            <div className="hr-div">
                                <hr />
                            </div>

                            <div className="footer-address">
                                <h5> <span> Address: </span> BPS Enterprise
                                    Plot No,- 437/7/ (Ground Floor) Kadipur Industrial Area, Gurugram, Haryana 122001
                                </h5>
                            </div>

                            <div className="hr-div">
                                <hr />
                            </div>

                            <div className="footer-contact">

                                <div className="footer-mobile">
                                    <h5> <span> <BsTelephone color='black' /> </span> +91 9810899268 </h5>
                                </div>

                                <div className="footer-email">
                                    <h5> <span> <TfiEmail color='black' /> </span> bpsenterprisesggn@gmail.com </h5>
                                </div>

                            </div>
                        </div>
                    {/* </Fade> */}
                </Col>

                <Col className="col-lg-6">
                    {/* <Fade bottom cascade> */}
                        <div className='footer-right-content'>
                            <div className='form-heading'>
                                <h2> Inquire </h2>
                            </div>

                            <div className='footer-form'>
                                <form onSubmit={handleSubmit}>
                                    <div className='form-input-div'>
                                        <Input type='text' className='form-input' placeholder="Name" defaultValue={formData.name} onChange={handleChange} prefix={<UserOutlined />} />
                                    </div>
                                    <div className='form-input-div'>
                                        <Input type='email' className='form-input' placeholder="Email Address" defaultValue={formData.email} onChange={handleChange} prefix={<TfiEmail />} />
                                    </div>
                                    <div className='form-input-div'>
                                        <Input type='tel' className='form-input' placeholder="Phone Number" defaultValue={formData.mobile} onChange={handleChange} prefix={<BsTelephone />} />
                                    </div>
                                    <div className='form-input-div'>
                                        <TextArea
                                            className='form-input'
                                            placeholder="Let us know how we can help"
                                            defaultValue={formData.message}
                                            onChange={handleChange}
                                            autoSize={{
                                            minRows: 3,
                                            maxRows: 5,
                                            }}
                                        />
                                    </div>
                                    <div className='form-btn-div'>
                                        <button className='primary-btn btn form-submit-btn' type='submit'> SUBMIT </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    {/* </Fade> */}
                </Col>
            </Row>
        </Container>
    )
}

export default Footer