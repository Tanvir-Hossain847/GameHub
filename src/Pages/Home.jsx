import React from 'react';
import Slider from '../Components/Slider';
import MiniSlider from '../Components/MiniSlider';
import Reviews from '../Components/Reviews';

const Home = () => {
    return (
        <div>
            <div className='min-h-screen bg-neutral-800'>
                <header className='py-10'>
                    <Slider></Slider>
                </header>

                <main className='py-20'>
                    <h1 className='font-bold primary text-white text-3xl text-center'>Popular Games</h1>

                    <div className="py-10">
                        <MiniSlider></MiniSlider>
                    </div>
                    <div className="">
                        <h1 className='font-bold primary text-white text-3xl text-center py-5'>Action Games</h1>
                        <MiniSlider></MiniSlider>
                    </div>
                    <div className="py-10">
                        <Reviews></Reviews>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Home;