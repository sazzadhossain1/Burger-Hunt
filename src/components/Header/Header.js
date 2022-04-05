import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='parent-component '>
            <h2 className='hed'>Burger Hunt</h2>
            <nav className='navigation-bar'>
            <Link to="hone">Home</Link>
            <Link to="reviews">Reviews</Link>
            <Link to="dashboard">Dashboard</Link>
            <Link to="blog">Blogs</Link>
            <Link to="about">About</Link>
            </nav>
            
        </div>
    );
};

export default Header;