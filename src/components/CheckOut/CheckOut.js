
import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useParams } from 'react-router-dom';
import auth from '../firebase.init';
import './CheckOut.css'

const CheckOut = () => {
    const { serviceId } = useParams()
    const [user] = useAuthState(auth)
    const [thankYou, setThankYou] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        setThankYou('Thank you for Booking')
    }
    const [service, setService] = useState();
    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    console.log(user);
    return (
        <div className='container '>
            {
                thankYou ? <div className='w-75 mx-auto mt-5 thank-you shadow border p-5 radius-3'> {thankYou}
                    <Link to="/"><button className='d-block btn btn-primary'>Back to home</button> </Link>
                </div> : <Form className='check-out' onSubmit={handleSubmit}>
                    <Row className="mb-3 mt-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control name='email' type="email" disabled value={user.email} placeholder="Enter email" />
                        </Form.Group>


                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Service Name</Form.Label>
                        <Form.Control name='serviceName' required disabled value={service?.serviceName} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Price</Form.Label>
                        <Form.Control name='price' type='number' required disabled value={service?.price} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control name='address' required placeholder="" />
                    </Form.Group>





                    <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>

                    <Button style={{ backgroundColor: '#1595d1' }} type="submit">
                        Submit
                    </Button>
                </Form>
            }
        </div>
    );
};

export default CheckOut;