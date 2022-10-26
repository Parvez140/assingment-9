import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <nav className='header'>
                <h2>Apartment<span style={{"color": 'tomato'}}>Hunter</span></h2>
                <div>
                    <Link to="/">Home</Link>
                    <Link to="/reviews">Reviews</Link>
                    <Link to="/dashbord">Dashbord</Link>
                </div>
            </nav>
        </div>
    );
};

export default Header;