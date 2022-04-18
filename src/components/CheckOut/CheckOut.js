
import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';
import './CheckOut.css'

const CheckOut = () => {
    const [user] = useAuthState(auth)
    const [thankYou, setThankYou] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        setThankYou('Thank you for submit')
    }
    console.log(user);
    return (
        <div className='container'>
            {
                thankYou ? <div className='w-75 mx-auto mt-5 thank-you shadow border p-5 radius-3'> {thankYou}
                    <Link to="/"><button className='d-block btn btn-primary'>Back to home</button> </Link>
                </div> : <Form onSubmit={handleSubmit}>
                    <Row className="mb-3 mt-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" value={user.email} placeholder="Enter email" />
                        </Form.Group>


                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control required placeholder="1234 Main St" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Address 2</Form.Label>
                        <Form.Control placeholder="Apartment, studio, or floor" />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label required>City</Form.Label>
                            <Form.Control required />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>State</Form.Label>
                            <Form.Select required defaultValue="Choose...">
                                <option>Choose...</option>
                                <option required>...</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Zip</Form.Label>
                            <Form.Control required />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            }
        </div>
    );
};

export default CheckOut;