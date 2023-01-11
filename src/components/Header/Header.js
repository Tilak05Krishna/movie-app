import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';
import { useSelector } from 'react-redux';

const Header = () => {
    const user = useSelector(state => state.user);
    return (
        <nav className="header">
            <div className="header__left">
                <Link to="/" className='header__link'>
                    Home
                </Link>
                {user[0].role === 'admin' && (<Link to="/addMovie" className="header__link">
                    Add Movie
                </Link>)}
            </div>
            <div className="header__right">
                {localStorage.getItem('token') && (<span className="header__userName">{user[0].email}</span>)}
                <Link to={"/login"} className='header__link'>
                    {localStorage.getItem('token') ? (<span>Log out</span>) : (<span>Log in</span>)}
                </Link>
            </div>
        </nav >
    )
}

export default Header;