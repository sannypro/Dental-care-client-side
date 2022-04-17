import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Header.css"
import { Link } from 'react-router-dom';

const Header = () => {
    return (

        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link to="/" className='navbar-brand'>Dental Care</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav " aria-current="page">
                            <Link to="/" className='nav-link'>Home</Link>
                            <Link to="/blogs" className='nav-link'>Blogs</Link>
                            <Link to="/login" className='nav-link' >Login</Link>

                        </div>
                    </div>
                </div>
            </nav >
        </>

    );
};

export default Header;