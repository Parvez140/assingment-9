import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className='header'>
                <h2><span style={{"fontSize":"34px"}}>Apartment<span style={{"color": "tomato"}}>Hunter </span></span></h2>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/reviews">Reviews</Link>
                    <Link to="/dashbord">Dashbord</Link>
                    <Link to="/blogs">Blogs</Link>
                    <Link to="/aboutUs">About Us</Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;