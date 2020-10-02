import React from 'react';
import ImgBox1 from "../../assets/images/inner_11.jpg";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import ImgBox2 from "../../assets/images/inner_12.jpg";
import BusinessOutlinedIcon from "@material-ui/icons/BusinessOutlined";
import ImgBox3 from "../../assets/images/inner_13.jpg";
import BuildOutlinedIcon from "@material-ui/icons/BuildOutlined";



import './styles.scss'

const ServiceBoxes = () => {
    return (
        <div className="boxes-section">
            <div className="box-wrapper">
                <div className="box-thumb">
                    <img src={ImgBox1} alt=""/>
                </div>
                <div className="box-icon"><HomeOutlinedIcon/></div>
                <div className="box-content">
                    <h2>HEATING</h2>
                    <p>Trusted expert heating installation & repair.</p>
                    <div className="box-btn"><a href={`${process.env.PUBLIC_URL}/service/heating`}>Read More</a></div>
                </div>
            </div>
            <div className="box-wrapper">
                <div className="box-thumb">
                    <img src={ImgBox2} alt=""/>
                </div>
                <div className="box-icon"><BusinessOutlinedIcon/></div>
                <div className="box-content">
                    <h2>AIR CONDITIONING</h2>
                    <p>Air conditioning services of any kind.</p>
                    <div className="box-btn"><a href={`${process.env.PUBLIC_URL}/service/air-conditioning`}>Read More</a></div>
                </div>
            </div>
            <div className="box-wrapper">
                <div className="box-thumb">
                    <img src={ImgBox3} alt=""/>
                </div>
                <div className="box-icon"><BuildOutlinedIcon/></div>
                <div className="box-content">
                    <h2>AIR QUALITY</h2>
                    <p>Preventative maintenance and routine care.</p>
                    <div className="box-btn"><a href={`${process.env.PUBLIC_URL}/service/air-quality`}>Read More</a></div>
                </div>
            </div>
        </div>
    )
};

export default ServiceBoxes
