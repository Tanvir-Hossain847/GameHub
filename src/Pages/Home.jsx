import React from 'react';
import Slider from '../Components/Slider';

const Home = () => {
    return (
        <div>
            <div className='min-h-screen bg-neutral-800'>
                <header className='py-10'>
                    <Slider></Slider>
                </header>

                <main className='py-20'>
                    <h1 className='font-bold primary text-white text-3xl text-center'>Popular Games</h1>
                </main>
            </div>
        </div>
    );
};

export default Home;