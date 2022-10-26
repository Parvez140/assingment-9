import React from 'react';
import heroImg from '../../image/hero-img.jpg';
import './HeroSection.css';

const HeroSection = () => {
    return (
        <div className='hero-section'>
            <div className="half-div">
                <h3>Welocome to  </h3>
                <h1>Apartment<span style={{"color":"tomato"}}>Hunter</span></h1>
                <p>Explore a variety of Modern, Stylish, Safe & Comfortable Furnished homes without leaving yours. RENTS Incorporation furnishing make it easy to find flexible housing without sacrificing quality.</p>
                <button className='hero-btn'>Search Home</button>
            </div>
            <div className="half-div">
                <img src={heroImg} alt="" />
            </div>
        </div>
    );
};

export default HeroSection;