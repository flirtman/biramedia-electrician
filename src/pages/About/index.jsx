import React, {useEffect} from 'react';
import {Container, Row, Col, Fade} from 'react-bootstrap';

import './styles.scss';
import MainNav from "../../components/MainNav";
import BlueQuoteStripe from "../../components/BlueQuoteStripe";
import Footer from "../../components/Footer";

import Img1 from '../../assets/images/gallery_about-us.jpg';
import Img2 from '../../assets/images/guarantee-customer-satisfaction.png';
import configs from "../../assets/configs";


import ServiceBoxes  from '../../components/ServiceBoxes';

const About = (props) => {
    useEffect( () =>{
        document.title = `${configs.companyName} | HVAC professionals in ${configs.greatCity} and surrounding areas`;
    });
    return (
        <div className="page-wrapper">
            <MainNav/>
            <Container style={{'margin' : '50px  auto'}}>
                <div className="main-title">
                    <h1>About Us</h1>
                </div>
                <Row>
                    <Col md={4}>
                        <div className="image-wrap-right">
                            <img src={Img1} style={{'width' : '100%'}}/>
                        </div>
                    </Col>
                    <Col md={8}>
                        <h2>{configs.companyName}</h2>
                        <p className="p-large">
                            {configs.companyName} is a leading service provider of top-class HVAC services across {configs.greatCity}. We
                            deliver professional on-site services for all possible models as well as makes of industrial, residential,
                            and commercial equipment for air conditioning, ventilation, and heating. Get access to top-class HVAC
                            services in {configs.greatCity} with our help!
                        </p>
                        <p>As a full-service HVAC provider, {configs.companyName} has been assisting residential as well as
                            commercial units with consistent HVAC solutions throughout the year. At the heart of our unparalleled
                            range of professional services is the expertise of our expert team that is capable of deeply
                            understanding the in-depth concepts of heating, cooling, and ventilation. With {configs.companyName},
                            you have access to a reliable partner for ensuring that your property is efficient and
                            functional.</p>
                        <h2>How do We Stand Out?</h2>
                        <p>For most of our clients, they end up expecting the respective HVAC systems to go on working. This is the
                            assurance that we bring on the table while serving them. When it comes to delivering HVAC solutions,
                            you will always be assured that your HVAC systems are in good, professional hands.</p>
                        <p>With multiple options to choose from in {configs.greatCity} with respect to HVAC services, it can be a tough task
                            to choose the best one out there. {configs.companyName} provides professional services involving skills
                            and several years of expertise in the given field.</p>
                        <p>Due to our strong commitment towards delivering the highest quality of services, we are able to
                            constantly grow our client base. We are currently serving a myriad of both residential as well as
                            commercial units with our innovative range of HVAC solutions.</p>
                        <p><small>We are based in {configs.greatCity} and aim at delivering top-quality cooling, heating, ventilation, and air quality
                            services to the local as well as surrounding area.</small></p>
                        <img src={Img2} alt="" className="customer-satisfaction"/>
                        <div className="button-blue">
                            <a href={`${process.env.PUBLIC_URL}/get-a-quote`}>Request Service</a>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container style={{margin: '50px auto'}}>
                <div className="main-title">
                    <h2>Our Services</h2>
                </div>
                <ServiceBoxes/>
            </Container>

            <BlueQuoteStripe/>
            <Footer/>
        </div>
    )
};

export default About;
