import React from 'react';
import welcome from '../../Assets/Image/welcome.png'
import './Welcome.css';
import teethWhitening from '../../Assets/Image/teeth-whitening.png'

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
                <div className='text-center mt-5'>
                    <small className='welcome-small'>Professional highly trained</small>
                    <h1>our services</h1>
                </div>
                <div className='container'>
                    <div class="card" style={{ width: '18rem' }}>
                        <img src={teethWhitening} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Welcome;