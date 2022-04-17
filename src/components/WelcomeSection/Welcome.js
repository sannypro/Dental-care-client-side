import React from 'react';
import welcome from '../../Assets/Image/welcome.png'
import './Welcome.css';
import teethWhitening from '../../Assets/Image/teeth-whitening.png'
import toothExtraction from '../../Assets/Image/Tooth-ectraction.png'
import dentalFeeling from '../../Assets/Image/dental-deeling.png'
import { Link } from 'react-router-dom';

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
            <div >
                <div className='text-center  mt-5'>
                    <small className='welcome-small'>Professional highly trained</small>
                    <h1>our services</h1>
                </div>
                <div className='row container justify-content-center card-container g-3'>

                    <div className="container col-lg-4">
                        <div className="card ">
                            <img src={teethWhitening} className="card-img-top img-fluid" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Teeth whitenig</h5>
                                <p className="card-text">Very few people have naturally brilliantly white teeth as the color of a person’s teeth is influenced by many different factors. Foods and drinks such as teas and coffees may stain teeth, in addition to age yellowing the teeth over time. Professional teeth whitening is the most powerful treatment you can get to lighten your teeth as much as possible.

                                </p>
                                <h4>Price: $60</h4>
                                <Link to="checkout" className="btn btn-primary">Checkout</Link>
                            </div>
                        </div>
                    </div>


                    <div className="container col-lg-4">
                        <div className="card ">
                            <img src={toothExtraction} className="card-img-top img-fluid" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Tooth Extraction</h5>
                                <p className="card-text">Tooth extraction is the removal of a tooth from its socket in the bone. If you are facing a tooth extraction, it can seem a little daunting and nerve-wracking. However, tooth extractions are a fairly common procedure.  You have nothing to fear as extractions are only preformed when they offer a great benefit to the patient.</p>
                                <h4>Price: $150</h4>
                                <Link to="checkout" className="btn btn-primary">Checkout</Link>
                            </div>
                        </div>
                    </div>


                    <div className="container col-lg-4">
                        <div className="card ">
                            <img src={dentalFeeling} className="card-img-top img-fluid" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Dental Emergency</h5>
                                <p className="card-text">The two most common periods in life to experience dental emergencies are during toddlerhood and adolescence due to environmental exploration and sports-related injuries. However, it is also common for adults to experience a dental emergency due to trauma, decay, or infection.Common Dental Emergencies</p>
                                <h4>Price: $112</h4>
                                <Link to="checkout" className="btn btn-primary">Checkout</Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Welcome;