import './Footer.css';
import { Container, Row, Col, Image, FormControl } from "react-bootstrap";
import { BsTelephone, BsWhatsapp } from 'react-icons/bs';
import { TfiEmail } from 'react-icons/tfi';
import { UserOutlined, MailOutlined, MobileOutlined } from '@ant-design/icons';
import { Input } from 'antd';
const { TextArea } = Input;

const Footer = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        const from = e.target.elements.user_name.value;
        const email = e.target.elements.user_email.value;
        const phone = e.target.elements.user_phone.value;
        const description = e.target.elements.user_descp.value;

        const subject = 'BPS Contact Form Submission';
        const body = `From: ${from}\nEmail: ${email}\nPhone: ${phone}\n\nDescription: ${description}\n`;

        const mailToLink = `mailto:bpsenterprisesggn@gmail.com?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(body)}`;

        window.location.href = mailToLink;
    }

    const handleChange = (e) => {}

    return (
        <Container fluid id="footer-main">
            <Row>
                <Col className="col-lg-6">
                        <div className="footer-left-content">

                            <div className="footer-left-intro">
                                <div className="footer-img">
                                    <img src="logo_main.png" alt="" />
                                </div>

                                <div className="footer-links">
                                    <h5>Catch us at: </h5>
                                    <a href='https://wa.me/9810899268' target='_blank'> <BsWhatsapp /> </a>
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
                </Col>

                <Col className="col-lg-6">
                        <div className='footer-right-content'>
                            <div className='form-heading'>
                                <h2> Inquire </h2>
                            </div>

                            <div className='footer-form'>
                                <form onSubmit={handleSubmit}>
                                    <div className='form-input-div'>
                                        <Input type='text' className='form-input' name='user_name'  placeholder="Name" onChange={handleChange} prefix={<UserOutlined />} />
                                    </div>
                                    <div className='form-input-div'>
                                        <Input type='email' className='form-input' name='user_email' placeholder="Email Address" onChange={handleChange} prefix={<TfiEmail />} />
                                    </div>
                                    <div className='form-input-div'>
                                        <Input type='tel' className='form-input' name='user_phone' placeholder="Phone Number" onChange={handleChange} prefix={<BsTelephone />} />
                                    </div>
                                    <div className='form-input-div'>
                                        <TextArea
                                            className='form-input'
                                            name='user_descp'
                                            placeholder="Let us know how we can help"
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
                </Col>
            </Row>
        </Container>
    )
}

export default Footer