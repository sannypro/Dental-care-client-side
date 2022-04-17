import React from 'react';
import Carousel from '../Carousel/Carousel';
import Welcome from '../WelcomeSection/Welcome';


const Home = () => {
    return (
        <main>
            <section >
                <Carousel></Carousel>
                <Welcome></Welcome>
            </section>
        </main>
    );
};

export default Home;