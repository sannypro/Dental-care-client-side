import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const navigate = useNavigate()
    const handleNavigate = (e) => {
        navigate(`/checkout/${service._id}`)
    }
    return (

        <div className="container col-lg-4">
            <div className="card " >

                <img src={service.img} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{service.serviceName}</h5>
                    <p className="card-text">{service.serviceDescription}
                    </p>
                    <h4>Price: ${service.price}</h4>
                    <button onClick={handleNavigate} style={{ backgroundColor: '#1595d1', color: 'white' }} className="btn ">Checkout</button>
                </div>
            </div>
        </div>

    );
};

export default Service;