import React from 'react';
import playStoreLogo from '../assets/play-store-logo.png'
import appStoreLogo from '../assets/app-store-logo.png'
import heroImage from '../assets/hero.png'

const Banner = () => {
    return (
        <div className='bg-[#F5F5F5]'>
            <div className="text-center space-y-6 pt-10 w-11/12 mx-auto">
                <h1 className="text-5xl font-bold text-black">We Build <br /> <span className='mr-3 bg-linear-to-r from-[#6D28D9] to-[#8B5CF6] bg-clip-text text-transparent'>Productive</span>Apps</h1>
                <p className='w-full lg:w-3xl mx-auto text-gray-500'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

                <div className="mt-4 space-x-4">
                    <a href="https://play.google.com/" className='btn btn-outline btn-neutral w-36'><img src={playStoreLogo}
                    className='w-6 h-6' alt="Google Play Store Logo" /> Google Play</a>
                    <a href="https://www.apple.com/app-store/" className='btn btn-outline btn-neutral w-36'><img src={appStoreLogo}
                    className='w-6 h-6' alt="App Store Logo" /> App Store</a>
                </div>
                <div>
                    <img src={heroImage}
                    className='mx-auto size-3/4 md:size-2/4' alt="Hero image" />
                </div>
            </div>
        </div>
    );
};

export default Banner;