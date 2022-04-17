import { faClock, faCoffee, faStethoscope, faTeethOpen, faTooth } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import smileImg from "../../Assets/Image/dentist-with-smile-removebg-preview.png"
import './Carousel.css'
const Carousel = () => {
    return (
        <div >
            <section className='row  bg-img align-items-center'>
                <div className='col-lg-6 p-5'>
                    <h2 >
                        Professional and highly trined dental staff
                    </h2>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque tenetur itaque doloribus nihil! Assumenda iste maiores consequatur et blanditiis consequuntur voluptatem excepturi laboriosam mollitia explicabo! Saepe cumque reprehenderit possimus harum!</p>
                </div>
                <div className='col-lg-6'>
                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={smileImg} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={smileImg} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src={smileImg} className="d-block w-100" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className='d-flex justify-content-center  row carousel-card-container'>
                    <div className='carousel-card  d-flex flex-column justify-content-center align-items-center py-5'>
                        <FontAwesomeIcon style={{ height: '30px' }} icon={faTooth} />
                        <h3>Root canals</h3>
                        <p className='text-center'>Our root canals procedures are very affordable with price from $200</p>
                    </div>
                    <div className='carousel-card d-flex  flex-column justify-content-center align-items-center py-5'>
                        <FontAwesomeIcon style={{ height: '30px' }} icon={faTeethOpen} />
                        <h3>Root canals</h3>
                        <p className='text-center'>Our root canals procedures are very affordable with price from $200</p>
                    </div>
                    <div className='carousel-card d-flex flex-column justify-content-center align-items-center py-5'>
                        <FontAwesomeIcon style={{ height: '30px' }} icon={faClock} />
                        <h3>Root canals</h3>
                        <p className='text-center'>Our root canals procedures are very affordable with price from $200</p>
                    </div>
                    <div className='carousel-card d-flex  flex-column justify-content-center align-items-center py-5'>
                        <FontAwesomeIcon style={{ height: '30px' }} icon={faStethoscope} />
                        <h3>Root canals</h3>
                        <p className='text-center'>Our root canals procedures are very affordable with price from $200</p>
                    </div>
                </div>
            </section>
        </div >
    );
};

export default Carousel;