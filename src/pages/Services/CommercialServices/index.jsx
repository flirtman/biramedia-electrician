import React from "react";
import MainNav from "../../../components/MainNav";
import {Col, Container, Row} from "react-bootstrap";
import {Fade} from "react-reveal";
import ServicesSider from "../../../components/ServicesSider";
import BlueQuoteStripe from "../../../components/BlueQuoteStripe";
import Footer from "../../../components/Footer";
import './styles.scss';

import configs from "../../../assets/configs";

const CommercialServices = () => {
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
                            <h1>Commercial</h1>
                        </div>
                        <Row>
                            <Col md={8}>
                                <Fade>
                                    <h2><span>{configs.companyName}</span> Commercial Services</h2>
                                    <p>
                                        While residential systems might be simple, a commercial {configs.greatCity} HVAC system installation can be
                                        quite complicated. At {configs.companyName}, our expert team of heating, cooling, ventilation, and
                                        water heater experts is renowned for offering the best-in-class commercial HVAC solutions across
                                        {configs.greatCity}. For more information, reach out to our team now!
                                    </p>
                                    <p>
                                        If the HVAC system at your commercial unit is not functioning well, then we have got you covered. After
                                        conducting in-depth analysis of the HVAC system at your commercial premise, our specialists can detect
                                        the exact problem and fix it at the same time. Additionally, we are also available for new HVAC
                                        installation consulting and delivery services across commercial buildings in {configs.greatCity}. Our HVAC
                                        specialists can offer you professional advice on commercial HVAC installation, reliable models and
                                        makes, and other HVAC-related issues.
                                    </p>
                                    <p>
                                        The benefit of using the expertise of our HVAC experts for your commercial HVAC installation, repair, or
                                        replacement is not just our skills or knowledge, but it is also our consistency. Most of the local
                                        commercial units in {configs.greatCity} choose our HVAC services due to the overall commitment and
                                        professionalism of our team.
                                    </p>
                                    <h2>
                                        Get Access to Top-notch Commercial HVAC Services in {configs.greatCity}
                                    </h2>
                                    <p>
                                        Commercial heating and cooling installation as well as maintenance services are unavoidable. At HVAC
                                        {configs.greatCity} Solutions, we offer a comprehensive range of commercial HVAC installation, repair,
                                        replacement, and maintenance solutions as per the unique requirements of the clients.
                                    </p>
                                    <p>
                                        At {configs.companyName}, our comprehensive range of HVAC services for commercial premises
                                        includes:
                                    </p>
                                    <ul>
                                        <li>Commercial AC installation, repair, replacement, maintenance</li>
                                        <li>Commercial furnace installation, repair, replacement, maintenance</li>
                                        <li>Commercial water heater solutions</li>
                                        <li>Commercial air quality</li>
                                    </ul>
                                    <p>
                                        Trust our professionals at {configs.companyName} to get access to the best-in-class range of advanced
                                        HVAC solutions for your commercial premise. For more information, reach out to us now!
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

export default CommercialServices;
