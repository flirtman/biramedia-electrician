import React from "react";
import MainNav from "../../../components/MainNav";
import {Col, Container, Row} from "react-bootstrap";
import {Fade} from "react-reveal";
import ServicesSider from "../../../components/ServicesSider";
import BlueQuoteStripe from "../../../components/BlueQuoteStripe";
import Footer from "../../../components/Footer";

import './styles.scss';

import configs from "../../../assets/configs";

const Heating = () => {
    const setStyle={
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh'
    };
    return (
        <div className="page-wrapper">
            <div style={setStyle}>
                <MainNav/>
                <div className="service-body-wrap">
                    <Container>
                        <div className="main-title">
                            <h1>Heating</h1>
                        </div>
                        <Row>
                            <Col md={8}>
                                <Fade>
                                    <h2><span>{configs.companyName}</span> Heating Services</h2>
                                    <p>
                                        People all across {configs.greatCity} tend to depend significantly on reliable HVAC units for optimum heating of
                                        the property when it is chilling outside. We realize the importance of optimum heating for your
                                        residential or commercial property when it is immensely cold outside. If you are facing difficulties in
                                        managing the heating system of your house or office effectively, you can reach out to our team of HVAC
                                        experts at {configs.companyName}.
                                    </p>
                                    <p>
                                        Whether your heating system requires installation, repair, replacement, or maintenance, we have got
                                        you covered. Whether it is about a heat pump system or a furnace, we are committed to providing
                                        access to top-quality heating repair, installation, and maintenance solutions. Using the expertise of our
                                        HVAC experts, you can also know about programmable thermostats and zone control systems that can
                                        help you in saving utility as well as energy bills.
                                    </p>
                                    <p>You can reach out to us for a comprehensive range of heating solutions. Here are some to look out for:</p>
                                    <ul>
                                        <li>
                                            Heating Repair: Is your heating unit not functioning well? Our team of heating experts can help
                                            you fix the same instantly as well as professionally.
                                        </li>
                                        <li>
                                            Heating Installation: In case the existing heater is broken or you simply need to purchase an all-
                                            new unit, you can reach out to our team of HVAC experts to help you with heating installation.
                                        </li>
                                        <li>
                                            Heating Maintenance: As you ensure regular maintenance of the heating unit at your home or
                                            office, you can look forward to placing fewer repair or replacement requests. You can trust the
                                            overall expertise of our HVAC experts with professional heating care and maintenance.
                                        </li>
                                    </ul>
                                    <p>
                                        As our HVAC experts remain quite active in the {configs.greatCity} area, we understand the multiple options that
                                        we can deliver when it comes to heating units – both at residential and commercial units. Reach out to us
                                        now for more details.
                                    </p>
                                    <div className="">
                                        <div className="button-blue">
                                            <a href={`${process.env.PUBLIC_URL}/contact`}>Contact Us</a>
                                        </div>
                                    </div>
                                </Fade>
                            </Col>
                            <Col md={4}>
                                <Fade>
                                    <ServicesSider/>
                                </Fade>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <BlueQuoteStripe/>
                <Footer/>
            </div>
        </div>
    );
};

export default Heating;
