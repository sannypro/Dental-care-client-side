import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Header.css"
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../components/firebase.init';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    return (

        <>
            <nav className="navbar navbar-expand-lg navbar-dark navbar-color sticky-top">
                <div className="container-fluid">
                    <Link style={{ color: 'white' }} to="/" className='navbar-brand'>Labaid Dental Care</Link>
                    <button className="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav " aria-current="page">
                            <Link style={{ color: 'white' }} to="/" className='nav-link'>Home</Link>
                            <Link style={{ color: 'white' }} to="/blogs" className='nav-link'>Blogs</Link>
                            <Link style={{ color: 'white' }} to="/about" className='nav-link'>About</Link>
                            {
                                user ? <button onClick={() => signOut(auth)}> sign out</button> : <Link style={{ color: 'white' }} to="/login" className='nav-link' >Login</Link>
                            }




                        </div>

                    </div>
                </div>
            </nav >
        </>

    );
};

export default Header;