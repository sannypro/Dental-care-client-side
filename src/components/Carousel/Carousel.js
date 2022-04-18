import { faClock, faCoffee, faStethoscope, faTeethOpen, faTooth } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import smileImg from "../../Assets/Image/smile.png"

import smileApple from "../../Assets/Image/carousel2-removebg-preview-removebg-preview.png"

import './Carousel.css'
const Carousel = () => {
    return (
        <div >
            <section className='row  bg-img align-items-center'>
                <div className='col-lg-6 p-5 carousel-text'>
                    <h1>Labaid Dental care</h1>
                    <h3 >
                        Professional and highly trined dental staff
                    </h3>
                    <p> From routine cleanings to orthodontic work, Professional Dental and Orthodontics has the technology and experience to take care of all your dental needs.</p>
                </div>
                <div className='col-lg-6 p-0'>
                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                        <d iv className="carousel-inner p-0">
                            <div className="carousel-item active p-0">
                                <img src={smileApple} className="d-block img-fluid" alt="..." />
                            </div>
                            <div className="carousel-item p-0">
                                <img src={smileImg} className="d-block img-fluid" alt="..." />
                            </div>

                        </d>
                    </div>
                </div>
            </section >
            <section>
                <div className=' justify-content-center carousel-card-container row '>
                    <div className='carousel-card col-lg-12  d-flex flex-column justify-content-center align-items-center py-5'>
                        <FontAwesomeIcon style={{ height: '30px' }} icon={faTooth} />
                        <h5>Root canals</h5>
                        <p className='text-center'>Our root canals procedures are very affordable with price from $200</p>
                    </div>
                    <div className='carousel-card d-flex col-lg-12   flex-column justify-content-center align-items-center py-5'>
                        <FontAwesomeIcon style={{ height: '30px' }} icon={faTeethOpen} />
                        <h5>Routine checkup-Ups</h5>
                        <p className='text-center'>comprehensive dental check up for both children adult</p>
                    </div>
                    <div className='carousel-card d-flex col-lg-12   flex-column justify-content-center align-items-center py-5'>
                        <FontAwesomeIcon style={{ height: '30px' }} icon={faClock} />
                        <h5>Teeth whiteing</h5>
                        <p className='text-center'>high quality teeth whitening products and treatment</p>
                    </div>
                    <div className='carousel-card d-flex col-lg-12    flex-column justify-content-center align-items-center py-5'>
                        <FontAwesomeIcon style={{ height: '30px' }} icon={faStethoscope} />
                        <h5>Conssult our dentist</h5>
                        <p className='text-center'>book an appointment with our highly trained dentist</p>
                    </div>
                </div>
            </section>
        </div >
    );
};

export default Carousel;