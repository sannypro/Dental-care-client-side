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

            <Navbar className=' navbar-dark navbar-color sticky-top' expand="lg">
                <Container>
                    <Navbar.Brand  ><Link style={{ color: 'white' }} to="/" className='navbar-brand'>Sanny Dental Care</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link > <Link style={{ color: 'white' }} to="/" className='nav-link'>Home</Link></Nav.Link>
                            <Nav.Link ><Link style={{ color: 'white' }} to="/blogs" className='nav-link'>Blogs</Link></Nav.Link>

                            <Nav.Link ><Link style={{ color: 'white' }} to="/about" className='nav-link'>About</Link></Nav.Link>
                            {
                                user && <>  <Nav.Link >
                                    <Link style={{ color: 'white' }} to="/add-service" className='nav-link'>Add service</Link>
                                </Nav.Link>
                                    <Nav.Link >
                                        <Link style={{ color: 'white' }} to="/manage" className='nav-link'>Manage </Link>
                                    </Nav.Link>
                                    <Nav.Link >
                                        <Link style={{ color: 'white' }} to="/orders" className='nav-link'>orders </Link>
                                    </Nav.Link></>
                            }
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