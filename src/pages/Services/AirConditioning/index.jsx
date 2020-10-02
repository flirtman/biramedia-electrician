import React from "react";
import MainNav from "../../../components/MainNav";
import {Col, Container, Row} from "react-bootstrap";
import {Fade} from "react-reveal";
import ServicesSider from "../../../components/ServicesSider";
import BlueQuoteStripe from "../../../components/BlueQuoteStripe";
import Footer from "../../../components/Footer";
import './styles.scss';

import configs from "../../../assets/configs";

const AirConditioning = () => {
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
                            <h1>Air Conditioning</h1>
                        </div>
                        <Row>
                            <Col md={8}>
                                <Fade>
                                    <h2><span>{configs.companyName}</span> Air Conditioning Services</h2>
                                    <p>
                                        As the hot summer months kick in, you wish to ensure that the air conditioning system in your home or
                                        office in {configs.greatCity} is functioning well. In case you are facing issues with the air conditioning system of
                                        your house or commercial unit, then you can reach out to us for professional air conditioning solutions
                                        in {configs.greatCity}. Whether your air conditioning unit needs repair or replacement, we are here to help you
                                        with that. Our HVAC experts can also help you with air conditioning installation for optimum experience.
                                    </p>
                                    <p>
                                        When you are going on about your day, the last thing that you would like to think about is the overall
                                        health of the air conditioning HVAC system at your house or office. At {configs.companyName}, we take
                                        care of all your air conditioning requirements to allow you to enjoy the cool during the summer season.
                                    </p>
                                    <ul>
                                        <li>
                                            Air Conditioning Installation: Whether you are looking for an air conditioning unit for your home
                                            or office space, or your existing air conditioning system is beyond repair, air conditioning
                                            installation by the experts is an ideal solution. We feature a team of licensed technicians for
                                            determining which options are right as per your specific requirement and budget.
                                        </li>
                                        <li>
                                            Air Conditioning Repair: There cannot be anything worse than having the air conditioner fail
                                            during the peak of the summer season. Air conditioning is critical. Therefore, for the best
                                            results, you can contact our professionals at {configs.companyName} to learn about our
                                            exclusive air conditioning repair services.
                                        </li>
                                        <li>
                                            Air Conditioning Maintenance: It is always a good idea to ensure proper A/C repair and
                                            maintenance. It will allow your system to run efficiently and for a longer duration. You can
                                            schedule the maintenance services of your air conditioning unit now by reaching out to us.
                                        </li>
                                    </ul>
                                    <div className="">
                                        <div className="button-blue">
                                            <a href={`${process.env.PUBLIC_URL}/contact`}>Contact us right away to know more!</a>
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

export default AirConditioning;
