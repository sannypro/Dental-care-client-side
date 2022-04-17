import React from 'react';
import welcome from '../../Assets/Image/welcome.png'
import './Welcome.css'

const Welcome = () => {
    return (
        <>
            <div className='row container align-items-center'>
                <div className='col-lg-6 col-sm-12 '>
                    <img className='img-fluid' src={welcome} alt="" />
                </div>
                <div className='col-lg-6 col-sm-12 '>
                    <small className='welcome-small text-bold'>Changing lives one smile at a time</small>
                    <h2> welcome to dental care</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, voluptatem omnis porro maxime quas ducimus, explicabo sed nihil ex distinctio velit minima soluta iusto? Perferendis temporibus nisi corporis enim sint.</p>
                </div>
            </div>
            <div className='dream text-center py-5 mt-5'>
                <h2>Make your dream smile a reality</h2>
                <small>Call us or book your appointment today</small>
            </div>
            <div>
                <small>Professional highly trained</small>
            </div>
        </>
    );
};

export default Welcome;