import React, {useEffect} from 'react';
import {Fade, Slide} from 'react-reveal';
import './styles.scss';
import MainNav from "../../components/MainNav";
import {Col, Row} from 'react-bootstrap';

import Background from '../../assets/images/background_01.jpg';

import ImgSales1 from '../../assets/images/phone-ring.png';
import ImgSales2 from '../../assets/images/worenty.png';
import ImgSales3 from '../../assets/images/lisence.png';

import inner_blue_02 from '../../assets/images/inner_blue_02.jpg';



import AboutUsSection from "../../components/AboutUsSection";
import BlueQuoteStripe  from '../../components/BlueQuoteStripe';
import ServiceBoxes  from '../../components/ServiceBoxes';
import configs from "../../assets/configs";

import SERVICE_LEGENDS from '../../assets/images/SERVICE-LEGENDS.jpg';
import OUR_GOAL from '../../assets/images/OUR-GOAL.jpg';
import OUR_CLIENTS from '../../assets/images/OUR-CLIENTS.jpg';
import OUR_PRIMARY_PURPOSE from '../../assets/images/OUR-PRIMARY-PURPOSE.jpg';

import bg2 from '../../assets/images/home-img3.jpg';

import AC_INSTALLATION from '../../assets/images/AC_INSTALLATION.jpg';
import AC_REPAIR from '../../assets/images/AC_REPAIR.jpg';
import AC_MAINTENANCE from '../../assets/images/AC_MAINTENANCE.jpg';

import Footer from '../../components/Footer';

const Home = (props) => {
    const setStyle = {
        backgroundImage: "url(" + Background + ")"
    };
    useEffect( () =>{
        document.title = `${configs.companyName} | Professional electrical services in ${configs.greatCity} and surrounding areas`;
    });
    return (
        <div className="page-wrapper">
            <div style={setStyle} className="page-wrapper-content">
                <MainNav/>
                <div className="container">
                    <div className="header-wrapper">
                        <div style={{maxWidth: '600px'}} className="header-content">
                            <Fade left cascade>
                                <h1 className="">
                                    Professional <span className="blue-text">Electricians</span> <br/>
                                     in <span className="blue-text">{configs.greatCity}</span>
                                </h1>
                            </Fade>
                            <Fade>
                                <p className="">{configs.companyName} are here when you need us to service both your residential and commercial properties.</p>
                                <div className="">
                                    <div className="button-blue">
                                        <a href={`${process.env.PUBLIC_URL}/get-a-quote`}>Request Service</a>
                                    </div>
                                    <div className="button-white">
                                        <a href={`${process.env.PUBLIC_URL}/about`}>About Us</a>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                    <Fade left cascade>
                        <ServiceBoxes/>
                    </Fade>
                    <Fade bottom>
                        <div className="sales-line-section">
                            <div className="sales-line-box box-wrapper">
                                <div className="sales-line-box-img-wrap">
                                    <img src={ImgSales1} alt=""/>
                                </div>
                                <p>AVAILABLE 24 HOURS</p>
                            </div>
                            <div className="sales-line-box box-wrapper">
                                <div className="sales-line-box-img-wrap">
                                    <img src={ImgSales2} alt=""/>
                                </div>
                                <p>LICENSED & INSURED</p>
                            </div>
                            <div className="sales-line-box box-wrapper">
                                <div className="sales-line-box-img-wrap">
                                    <img src={ImgSales3} alt=""/>
                                </div>
                                <p>WARRANTY & MAINTENANCE</p>
                            </div>
                        </div>
                    </Fade>
                </div>
                <Fade bottom>
                    <div className="about-section">
                    <Slide left>
                        <div className="about-section-left">
                            <div className="about-section-left-content">
                                <h3>Who <span>We</span> Are</h3>
                                <p>
                                    For all your electrical needs in the entire Greater {configs.greatCity} area, you can count on the professional
                                    services and experienced electricians from {configs.companyName}. With several years of relevant experience,
                                    and being trusted services in several homes as well as businesses, you can be assured of a highly friendly
                                    and customer-centric experience that you can come across in {configs.greatCity}.
                                </p>
                                <p>
                                    All our work serves to be unconditionally guaranteed and completed as per the Safety
                                    Standards with diligence and care. We aim at producing work of the highest professional standards in
                                    the given industry. We are also experts in offering 24/7 emergency services when it comes to residential
                                    or commercial electrical services in {configs.greatCity}.
                                </p>
                                <Row>
                                    <Col xs={12} sm={6}>
                                        <div className="about-section-left-content-point-wrap">
                                            <span>
                                                <img src={SERVICE_LEGENDS} alt=""/>
                                            </span>
                                            <span>
                                                <h4>SERVICE LEGENDS</h4>
                                                <p>We are highly renowned for our bespoke
                                                    electrician services across {configs.greatCity}.</p>
                                            </span>
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <div className="about-section-left-content-point-wrap">
                                            <span>
                                                <img src={OUR_CLIENTS} alt=""/>
                                            </span>
                                            <span>
                                                <h4>OUR GOAL</h4>
                                                <p>We are committed to serving our clients with top-notch electrical installation and
                                                    repair services across residential and commercial premises.</p>
                                            </span>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12} sm={6}>
                                        <div className="about-section-left-content-point-wrap">
                                            <span>
                                                <img src={OUR_GOAL} alt=""/>
                                            </span>
                                            <span>
                                                <h4>OUR CLIENTS</h4>
                                                <p>We cater to both residential as well as commercial
                                                    units with our professional range of services.</p>
                                            </span>
                                        </div>
                                    </Col>
                                    <Col xs={12} sm={6}>
                                        <div className="about-section-left-content-point-wrap">
                                            <span>
                                                <img src={OUR_PRIMARY_PURPOSE} alt=""/>
                                            </span>
                                            <span>
                                                <h4>OUR PRIMARY PURPOSE</h4>
                                                <p>We aim at providing top-class experiences to our clients through the
                                                    installation, repair, replacement, and maintenance of electrical systems.</p>
                                            </span>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Slide>
                    <Slide right>
                        <div className="about-section-right" style={{backgroundImage: `url(${inner_blue_02})`}} >
                            <div className="about-section-right-content">
                                <h3>Trusted & Proud</h3>
                                <p>We have over 15 years experience in providing electrician services.</p>
                            </div>
                        </div>
                    </Slide>
                </div>
                </Fade>
                <div className="ac-section">
                    <Slide left>
                        <div className="ac-section-left" style={{backgroundImage: `url(${bg2})`}} >
                            <div className="ac-section-left-content">
                                {/*<h3>Trusted & Proud</h3>*/}
                                {/*<p>We have over 15 years experience in the air conditioning industry.</p>*/}
                            </div>
                        </div>
                    </Slide>
                    <Slide right>
                        <div className="ac-section-right">
                            <div className="ac-section-right-content">
                                <h3><span>Electrician</span> Services</h3>
                                <p>
                                    Are you searching for an experienced electrician in {configs.greatCity}? Then, you should inquire no further than
                                    {configs.companyName}. Having over a decade of relevant expertise in the electrical industry, we have garnered
                                    a high-end reputation to serve as the premium-range electrical service provider in {configs.greatCity}. Our
                                    company boasts a team of highly skilled and well-trained electricians featuring the highest possible
                                    standards. For over a decade, we have been delivering top-class electrical services for both residents as
                                    well as businesses in and around {configs.greatCity}.
                                </p>
                                <Row>
                                    <Col xs={12}>
                                        <div className="ac-section-right-content-point-wrap">
                                            <span>
                                                <img src={AC_INSTALLATION} alt=""/>
                                            </span>
                                            <span>
                                                <h4>Residential Electrician Services:</h4>
                                                <p>Trusted experts delivering residential electrician services.</p>
                                            </span>
                                        </div>
                                    </Col>
                                    <Col xs={12}>
                                        <div className="ac-section-right-content-point-wrap">
                                            <span>
                                                <img src={AC_REPAIR} alt=""/>
                                            </span>
                                            <span>
                                                <h4>Commercial Electrician Services:</h4>
                                                <p>for all types of commercial settings and installations.</p>
                                            </span>
                                        </div>
                                    </Col>
                                    <Col xs={12}>
                                        <div className="ac-section-right-content-point-wrap">
                                            <span>
                                                <img src={AC_MAINTENANCE} alt=""/>
                                            </span>
                                            <span>
                                                <h4>Electrical Installation:</h4>
                                                <p>For top-notch electrical installations and repairs.</p>
                                            </span>
                                        </div>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Slide>
                </div>
                <BlueQuoteStripe/>
                <AboutUsSection/>
                <Footer/>
            </div>
        </div>
    )
};

export default Home;
