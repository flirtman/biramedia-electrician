import React from "react";
import MainNav from "../../../components/MainNav";
import {Col, Container, Row} from "react-bootstrap";
import {Fade} from "react-reveal";
import ServicesSider from "../../../components/ServicesSider";
import BlueQuoteStripe from "../../../components/BlueQuoteStripe";
import Footer from "../../../components/Footer";
import './styles.scss';

import configs from "../../../assets/configs";

const WaterHeaters = () => {
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
                            <h1>Water Heaters</h1>
                        </div>
                        <Row>
                            <Col md={8}>
                                <Fade>
                                    <h2><span>{configs.companyName}</span> Water Heaters Services</h2>
                                    <p>
                                        In case the water heater at your property stops working, it implies that you cannot ensure hot-water
                                        laundry cycles, hot dishwasher cycles, or even warm showers. At {configs.companyName}, we aim at
                                        delivering top-notch comfort to our clients. This is the reason why our HVAC specialists aim at providing
                                        access to reliable water heater services across {configs.greatCity}. Irrespective of whether you require water
                                        heater installation, repair, replacement, or maintenance services, we have got you covered.
                                    </p>
                                    <p>
                                        Our team of HVAC professionals at {configs.companyName} is highly knowledgeable, well-trained, and
                                        possesses several years of relevant expertise in the field of handling all problems related to water
                                        heaters. We ensure continuous training of our HVAC teams in the latest water heating technology as
                                        well as repair techniques such that we are able to deliver the highest quality of services. In case you
                                        need assistance with water heater problems at your home or office in {configs.greatCity}, you can reach out to us
                                        now!
                                    </p>
                                    <h2>Efficient Water Heater Services in {configs.greatCity}</h2>
                                    <p>
                                        When you encounter problems associated with water heater units at your home or office, we will send
                                        over a trained technician for identifying the problem and fixing the same. Here are some water heater
                                        solutions that we deal in:
                                    </p>
                                    <ul>
                                        <li>Storage tanks</li>
                                        <li>Tankless water heaters</li>
                                        <li>Gas water heaters</li>
                                        <li>Electric water heaters</li>
                                        <li>Water heater maintenance</li>
                                        <li>Water heater installation</li>
                                        <li>Water heater repair</li>
                                        <li>Boiler installation and maintenance</li>
                                    </ul>
                                    <p>
                                        In case you are in search for water heater installation, repair, replacement, or maintenance solutions,
                                        our team of HVAC specialists can help you out instantly. When you schedule an appointment with our
                                        {configs.greatCity} team, you can always be assured of their arrival on time. After conducting an in-depth analysis
                                        of the water heater problem, our professionals will provide you with potential solutions. Contact us
                                        now!
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

export default WaterHeaters;
