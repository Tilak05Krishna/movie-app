import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
    return (
        <nav className="header">
            <div className="header__left">
                <Link to="/" className='header__link'>
                    Home
                </Link>
                <Link to="/createMovie" className="header__link">
                    Add Movie
                </Link>
            </div>
            <div className="header__right">
                <Link to={!localStorage.getItem('token') && "/login"} className='header__link'>
                    {localStorage.getItem('token') ? (<span>User</span>) : (<span>Log in</span>)}
                </Link>
            </div>
        </nav >
    )
}

export default Header;