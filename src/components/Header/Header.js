import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Header.css';

const Header = () => {
    const {user, logout} = useAuth();
    return (
        <div className="header">
            <Link to="/home">Home</Link>
            <Link to="/shipping">Shippig</Link>
            <Link to= "/registration">Registration</Link>
            <Link to="/login">Login</Link>
            {user?.email && <button onClick={logout}>Logout</button>}
        </div>
    );
};

export default Header;