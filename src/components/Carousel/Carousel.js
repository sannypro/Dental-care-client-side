import React from 'react';
import smileImg from "../../Assets/Image/dentist-with-smile.jpg"
import './Carousel.css'
const Carousel = () => {
    return (
        <div className='container'>
            <section className='row align-items-center'>
                <div className=' col-lg-6'>
                    <h2 >
                        Professional and highly trined dental staff
                    </h2>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque tenetur itaque doloribus nihil! Assumenda iste maiores consequatur et blanditiis consequuntur voluptatem excepturi laboriosam mollitia explicabo! Saepe cumque reprehenderit possimus harum!</p>
                </div>
                <div className='col-lg-6'>
                    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src={smileImg} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={smileImg} class="d-block w-100" alt="..." />
                            </div>
                            <div class="carousel-item">
                                <img src={smileImg} class="d-block w-100" alt="..." />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div >
    );
};

export default Carousel;