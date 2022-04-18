import React from 'react';
import welcome from '../../Assets/Image/welcome.png'
import './Welcome.css';

import { Link } from 'react-router-dom';
import Services from '../Services/Services';

const Welcome = () => {
    return (
        <>
            <div className='row container align-items-center justify-content-center'>
                <div className='col-lg-6 col-sm-12 '>
                    <img className='img-fluid' src={welcome} alt="" />
                </div>
                <div className='col-lg-6 col-sm-12 '>
                    <small className='welcome-small text-bold'>Changing lives one smile at a time</small>
                    <h2> welcome to dental care</h2>
                    <p>Our goal is to make high quality dental care accessible to all residents of our great state.Our vision is to gather the best oral health professionals in the state of Utah.</p>
                </div>
            </div>
            <div className='dream text-center py-5 mt-5'>
                <h2>Make your dream smile a reality</h2>
                <small>Call us or book your appointment today</small>
            </div>
            <Services></Services>

        </>
    );
};

export default Welcome;