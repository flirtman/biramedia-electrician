import React from "react";
import './styles.scss';
import BuildIcon from "@material-ui/icons/Build";
import configs from "../../assets/configs";
import {Nav, NavDropdown} from "react-bootstrap";

const ServicesSider = () => {
  return (
      <div className="section-service-sider">
          <div className="services-sider-wrap">
              <h2>Services</h2>
              <ul>
                  <li><Nav.Link href={`${process.env.PUBLIC_URL}/service/air-conditioning`}>Air Conditioning</Nav.Link></li>
                  <li><Nav.Link href={`${process.env.PUBLIC_URL}/service/heating`}>Heating</Nav.Link></li>
                  <li><Nav.Link href={`${process.env.PUBLIC_URL}/service/air-quality`}>Air Quality</Nav.Link></li>
                  <li><Nav.Link href={`${process.env.PUBLIC_URL}/service/water-heaters`}>Water Heaters</Nav.Link></li>
                  <li><Nav.Link href={`${process.env.PUBLIC_URL}/service/commercial-services`}>Commercial Services</Nav.Link></li>
              </ul>
          </div>
          <a className="call-now" href={`tel:${configs.phone}`}><strong><big>{configs.phone}</big></strong></a>
          <a className="get-a-quote" href={`${process.env.PUBLIC_URL}/get-a-quote`}>GET A QUOTE</a>
      </div>
  )
};

export default ServicesSider;
