import PropTypes from 'prop-types';
import React, { useState } from 'react';

const Navbar = (props) => {
    let defaultStyle = {
        color : 'rgb(242, 242, 242)',
        backgroundColor : 'rgb(77, 77, 77)',
    }

    const [theme, setTheme] = useState(defaultStyle);
    const toggleTheme = () => {
        
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navigationBar" aria-controls="navigationBar" aria-expanded="false" aria-label="Toggle navigationBar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navigationBar">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link text-light" aria-current="page" href="/">{props.home}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-light" href="/">{props.about}</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-light me-2" type="submit">Search</button>
                        <button className="btn btn-outline-light me-2 fs-3" onClick={toggleTheme}>🌓</button>
                    </form>
                </div>
            </div>
        </nav>
    );
}

// Define the type of value passed and if they are required or not 
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    home: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired
}

// Use this if there are no values passed  
Navbar.defaultProps = {
    title:'Text Utilities',
    home: 'Home',
    about: 'About'
}

export default Navbar;