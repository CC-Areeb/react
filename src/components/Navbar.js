import PropTypes from 'prop-types';

const Navbar = (props) => {
    return (
        <>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} sticky-top`}>
                <div className="container-fluid">
                    <a className={`navbar-brand text-${props.textMode}`} href="/">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navigationBar" aria-controls="navigationBar" aria-expanded="false" aria-label="Toggle navigationBar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navigationBar">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className={`nav-link text-${props.textMode}`} aria-current="page" href="/">{props.home}</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link text-${props.textMode}`} href="/">{props.about}</a>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className={`btn btn-outline-${props.textMode} me-2`} type="submit">Search</button>
                        </form>
                        <label htmlFor="" className={`text-${props.textMode} fs-3 mx-3`}>🌞</label>
                        <div className="form-check form-switch mx-4">
                            <input className="form-check-input fs-3" onClick={props.switchTheme} type="checkbox" role="switch" id="themeSwitch" />
                            <label className={`form-check-label fs-3 text-${props.textMode}`} htmlFor="">🌑</label>
                        </div>
                    </div>
                </div>
            </nav>
        </>
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
    title: 'Text Utilities',
    home: 'Home',
    about: 'About'
}

export default Navbar;