import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Header.css"
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../components/firebase.init';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    return (

        <>
            {/* <nav className="navbar navbar-expand-lg navbar-dark navbar-color sticky-top">
                <div className="container-fluid">
                    
                    <button className="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav " aria-current="page">
                           
                            
                            
                            
                            




                        </div>

                    </div>
                </div>
            </nav > */}
            <Navbar className=' navbar-dark navbar-color sticky-top' expand="lg">
                <Container>
                    <Navbar.Brand  ><Link style={{ color: 'white' }} to="/" className='navbar-brand'>Labaid Dental Care</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link > <Link style={{ color: 'white' }} to="/" className='nav-link'>Home</Link></Nav.Link>
                            <Nav.Link ><Link style={{ color: 'white' }} to="/blogs" className='nav-link'>Blogs</Link></Nav.Link>
                            <Nav.Link ><Link style={{ color: 'white' }} to="/about" className='nav-link'>About</Link></Nav.Link>
                            <Nav.Link ><Link style={{ color: 'white' }} to="/checkout" className='nav-link'>checkOut</Link></Nav.Link>
                            {
                                user ? <button className='btn btn-danger' onClick={() => signOut(auth)}> Sign out</button> : <Nav.Link ><Link style={{ color: 'white' }} to="/login" className='nav-link' >Login</Link></Nav.Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    );
};

export default Header;