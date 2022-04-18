import React from 'react';
import { Link } from 'react-router-dom';
import teethWhitening from '../../Assets/Image/teeth-whitening.png'
import toothExtraction from '../../Assets/Image/Tooth-ectraction.png'
import dentalFeeling from '../../Assets/Image/dental-deeling.png'

const Services = () => {
    return (
        <div className='mb-5'>
            <div className='text-center  mt-5'>
                <small className='welcome-small'>Professional highly trained</small>
                <h1>our services</h1>
            </div>
            <div className='row container justify-content-center align-items g-3'>

                <div className="container col-lg-4">
                    <div className="card " >

                        <img src={teethWhitening} className="card-img-top img-fluid" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Teeth whitenig</h5>
                            <p className="card-text">Very few people have naturally brilliantly white teeth as the color of a person’s teeth is influenced by many different factors. Foods and drinks such as teas and coffees may stain teeth, in addition to age yellowing the teeth over time. Professional teeth whitening is the most powerful treatment you can get to lighten your teeth as much as possible.

                            </p>
                            <h4>Price: $60</h4>
                            <Link to="checkout" style={{ backgroundColor: '#1595d1', color: 'white' }} className="btn ">Checkout</Link>
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
                            <Link style={{ backgroundColor: '#1595d1', color: 'white' }} to="checkout" className="btn btn-primary">Checkout</Link>
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
                            <Link style={{ backgroundColor: '#1595d1', color: 'white' }} to="checkout" className="btn btn-primary">Checkout</Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Services;