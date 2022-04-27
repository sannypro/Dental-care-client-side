import React from 'react';

import useServices from '../hooks/useServices';
import ManageService from './ManageService';

const Manage = () => {
    const [services, setServices] = useServices([]);

    const handleDelete = id => {
        const url = `http://localhost:5000/services/${id}`
        console.log(url);
        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => console.log(data))

        const remaining = services.filter(service => service._id !== id)
        console.log(remaining);
        setServices(remaining)
    }

    return (
        <div className='row container justify-content-center align-items g-3'>
            {
                services.map(service => <div className="container col-lg-4">
                    <div className="card " >

                        <img src={service.img} className="card-img-top img-fluid" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{service.serviceName}</h5>
                            <p className="card-text">{service.serviceDescription}
                            </p>
                            <h4>Price: ${service.price}</h4>
                            <button onClick={() => handleDelete(service._id)} style={{ backgroundColor: '#1595d1', color: 'white' }} className="btn ">delete</button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Manage;