import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <Link className="navbar-brand" to="/">Fitness Tracker</Link>
            <div className="collaspse navbar-collapse">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/exercises">Exercises</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;