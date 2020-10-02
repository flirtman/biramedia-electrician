import React from "react";
import MainNav from "../../../components/MainNav";
import {Col, Container, Row} from "react-bootstrap";
import {Fade} from "react-reveal";
import ServicesSider from "../../../components/ServicesSider";
import BlueQuoteStripe from "../../../components/BlueQuoteStripe";
import Footer from "../../../components/Footer";
import './styles.scss';

import configs from "../../../assets/configs";

const AirQuality = () => {
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
                            <h1>Air Quality</h1>
                        </div>
                        <Row>
                            <Col md={8}>
                                <Fade>
                                    <h2><span>{configs.companyName}</span> Air Quality Services</h2>
                                    <p>
                                        As far as indoor climate is concerned, people turn to reliable air conditioning or heating solutions from
                                        the experts. While both heating and cooling of the environment in which you live are important, you
                                        cannot deny the importance of breathing in fresh, unpolluted air. Therefore, ensuring and maintaining
                                        good air quality in your property is of utmost importance. At {configs.companyName}, we help both
                                        residential as well as commercial property owners get access to the freshest indoor air with the help of
                                        our efficient and reliable services.
                                    </p>
                                    <p>
                                        Our HVAC technicians are highly knowledgeable and skilled in the given field. Moreover, they possess
                                        several years of relevant expertise in dealing with HVAC air quality units and services to deliver optimum
                                        solutions. We also aim at adhering to the defined code of ethics while delivering professional services.
                                    </p>
                                    <h2>Indoor Air Quality Cleaning System Solutions</h2>
                                    <p>
                                        If you wish to live in a healthier and comfortable environment, it is important that you should aim at
                                        improving the overall air quality. Our expert HVAC team at {configs.companyName} offers a full range
                                        of indoor air quality solutions for your lifestyle and living environment.
                                    </p>
                                    <p>
                                        Our indoor air quality specialists are capable of converting the cooling or heating system into a
                                        comprehensive air treatment center for the entire house or office. For reducing indoor pollutants, we
                                        recommend that you should consider installing advanced air cleaning systems like innovative filters.
                                        Moreover, the installation of advanced air sterilization systems can also help in reducing germs and
                                        removing odors.
                                    </p>
                                    <p>
                                        Additionally, some of the extra air quality services that our experts deliver are:
                                    </p>
                                    <ul>
                                        <li>Air duct cleaning</li>
                                        <li>Air purification systems</li>
                                        <li>Dryer vent cleaning</li>
                                        <li>Air quality assessment</li>
                                        <li>Air filter replacements</li>
                                        <li>Dehumidifiers</li>
                                    </ul>
                                    <p>
                                        When it comes to improving the overall air quality for your property, reach out to our experts at HVAC
                                        {configs.greatCity} Solutions.
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

export default AirQuality;
