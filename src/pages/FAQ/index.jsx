import React, {useEffect} from 'react';
import {Container, Row, Col, Accordion, Card} from 'react-bootstrap';
import './styles.scss';
import MainNav from "../../components/MainNav";
import BlueQuoteStripe from "../../components/BlueQuoteStripe";
import Footer from "../../components/Footer";
import ServicesSider from "../../components/ServicesSider";

import configs from "../../assets/configs";

import LiveHelpIcon from '@material-ui/icons/LiveHelp';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';

const FAQ = (props) => {
    const setStyle = {
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };
    useEffect( () =>{
        document.title = `${configs.companyName} | HVAC professionals in ${configs.greatCity} and surrounding areas`;
    });
    return (
        <div className="page-wrapper">
            <div style={setStyle}>
                <MainNav/>
                <div className="faq-body-wrap">
                    <Container>
                        <div className="main-title">
                            <h1>Frequently Asked Questions</h1>
                        </div>
                        <Row>
                            <Col md={8}>
                                <Accordion defaultActiveKey="0">
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="0">
                                            <LiveHelpIcon/>
                                            How to keep the furnace working well?
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="0">
                                            <Card.Body>
                                                <QuestionAnswerIcon/>
                                                You can ensure the best-ever working condition of the furnace at your residential or commercial
                                                property through regular care and maintenance services by our experts at {configs.greatCity}. Our
                                                dedicated efforts will help in maximizing the overall lifespan of the heating furnace while improving its
                                                efficiency at the same time.
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="1">
                                            <LiveHelpIcon/>
                                            How can I improve the efficiency and life of the HVAC units at my home??
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body>
                                                <QuestionAnswerIcon/>
                                                One of the most important things to consider is cleaning and replacing the filters as frequently as
                                                possible. For the best outcomes, you should always trust professional results delivered by HVAC experts
                                                at {configs.greatCity}.
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="2">
                                            <LiveHelpIcon/>
                                            How often should I ensure maintenance for my air conditioner?
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="2">
                                            <Card.Body>
                                                <QuestionAnswerIcon/>
                                                You should aim at getting maintenance of the air conditioning system of your house or office at least
                                                twice a year for optimum performance. You can trust the expertise offered by our reliable team of HVAC
                                                experts for air conditioning solutions.
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="3">
                                            <LiveHelpIcon/>
                                            How do I choose the right dehumidifier?
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="3">
                                            <Card.Body>
                                                <QuestionAnswerIcon/>
                                                You can choose the right dehumidifier by considering several factors. One of the major factors to look
                                                out for is energy efficiency and its overall performance.
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="4">
                                            <LiveHelpIcon/>
                                            How can I purify air indoors?
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="4">
                                            <Card.Body>
                                                <QuestionAnswerIcon/>
                                                You can do so by hiring professional HVAC specialists from our team to receive top-class air quality
                                                services. Our experts have relevant training as well as in-depth expertise in handling HVAC projects of all
                                                complexities.
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="5">
                                            <LiveHelpIcon/>
                                            What are the benefits of HVAC services?
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="5">
                                            <Card.Body>
                                                <QuestionAnswerIcon/>
                                                When you avail our comprehensive range of HVAC services, you can be assured that the respective air
                                                conditioning, heating, ventilation, and heater units are functioning well and efficiently. Moreover,
                                                proper HVAC services from time to time can also improve the overall lifespan of your HVAC units.
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </Col>
                            <Col md={4}>
                                <ServicesSider/>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <BlueQuoteStripe/>
            <Footer/>
        </div>
    )
};

export default FAQ;
