import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import teethWhitening from '../../Assets/Image/teeth-whitening.png'
import toothExtraction from '../../Assets/Image/Tooth-ectraction.png'
import dentalFeeling from '../../Assets/Image/dental-deeling.png'
import Service from './Service';
import useServices from '../hooks/useServices';

const Services = () => {

    const [services] = useServices();


    return (
        <div className='mb-5'>
            <div className='text-center  mt-5'>
                <small className='welcome-small'>Professional highly trained</small>
                <h1>My services</h1>
            </div>
            <div className='row container justify-content-center align-items g-3'>

                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;