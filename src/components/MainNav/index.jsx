import React from 'react';
import { Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
import './style.scss';
import Logo from '../../assets/images/hvac-logo.png';

import configs from '../../assets/configs';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';

class MainNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            path: window.location.pathname.split(process.env.PUBLIC_URL + '/')[1]
        };
        this.checkIfActive = this.checkIfActive.bind(this);
    }
    componentDidMount() {
        let classNameIs;
        if (this.state.path === '') {
            classNameIs = 'home';
        }
        else {
            classNameIs = this.state.path;
        }
        document.getElementsByTagName('body')[0].className = classNameIs;
    }
    checkIfActive (given) {
        return this.state.path === given;
    }
    render () {
        return (
            <Container className="nav-container">
                <Navbar expand="lg" bg="dark" variant="light">
                    <Navbar.Brand href="/">
                        <img src={Logo} alt={'Company Name'} className={'logo-top'}/>
                        <p>{configs.companyName}</p>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav">
                        <FormatAlignRightIcon/>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link href={`${process.env.PUBLIC_URL}/`} className={this.checkIfActive('') ? 'active' : ''}>Home</Nav.Link>
                            <Nav.Link href={`${process.env.PUBLIC_URL}/about`} className={this.checkIfActive('about') ? 'active' : ''}>About</Nav.Link>
                            <NavDropdown title="Services" id="basic-nav-dropdown" className={this.checkIfActive('service') ? 'active' : ''}>
                                <NavDropdown.Item href={`${process.env.PUBLIC_URL}/service/air-conditioning`}>Air Conditioning</NavDropdown.Item>
                                <NavDropdown.Item href={`${process.env.PUBLIC_URL}/service/heating`}>Heating</NavDropdown.Item>
                                <NavDropdown.Item href={`${process.env.PUBLIC_URL}/service/air-quality`}>Air Quality</NavDropdown.Item>
                                <NavDropdown.Item href={`${process.env.PUBLIC_URL}/service/water-heaters`}>Water Heaters</NavDropdown.Item>
                                <NavDropdown.Item href={`${process.env.PUBLIC_URL}/service/commercial-services`}>Commercial Services</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href={`${process.env.PUBLIC_URL}/gallery`} className={this.checkIfActive('gallery') ? 'active' : ''}>Gallery</Nav.Link>
                            <Nav.Link href={`${process.env.PUBLIC_URL}/faq`} className={this.checkIfActive('faq') ? 'active' : ''}>FAQ</Nav.Link>
                            <Nav.Link href={`${process.env.PUBLIC_URL}/get-a-quote`} className={this.checkIfActive('get-a-quote') ? 'active' : ''}>Get a Quote</Nav.Link>
                            <Nav.Link href={`${process.env.PUBLIC_URL}/contact`} className={this.checkIfActive('contact') ? 'active' : ''}>Contacts</Nav.Link>
                            <Nav.Link href="tel:5144760669">| <span>{configs.phone}</span></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        )
    }
}

export default MainNav;
