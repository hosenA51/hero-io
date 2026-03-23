import React from 'react';
import { FaFacebookSquare, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { TbMailFilled } from 'react-icons/tb';
import logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <footer className="bg-[#001931] text-gray-300 mt-20">
            <div className="w-11/12 mx-auto py-14 
                      grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
                <div>
                    <a href='/' className="font-bold text-xl flex items-center"><img src={logo} className='w-10 h-10' alt="" /> HERO.IO</a>
                    <p className="text-sm leading-relaxed mt-3">
                        Empowering users to discover, explore, and install apps effortlessly — a modern, intelligent app store experience built for simplicity, performance, and innovation.
                    </p>
                </div>
                <div>
                    <h3 className="text-white font-semibold mb-4">Company</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-white cursor-pointer">About Us</li>
                        <li className="hover:text-white cursor-pointer">Our Mission</li>
                        <li className="hover:text-white cursor-pointer">Contact Saled</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-white font-semibold mb-4">Services</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-white cursor-pointer">Products & Services</li>
                        <li className="hover:text-white cursor-pointer">Customer Stories</li>
                        <li className="hover:text-white cursor-pointer">Download Apps</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-white font-semibold mb-4">Information</h3>
                    <ul className="space-y-2 text-sm">
                        <li className="hover:text-white cursor-pointer">Privacy Policy</li>
                        <li className="hover:text-white cursor-pointer">Terms & Conditions</li>
                        <li className="hover:text-white cursor-pointer">Join Us</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-white font-semibold mb-4">Social Links</h3>
                    <ul className="space-y-3 text-sm">
                        <li className="hover:text-white cursor-pointer flex items-center gap-2">
                            <span><FaSquareXTwitter /></span> <span>@HERO-IO</span>
                        </li>
                        <li className="hover:text-white cursor-pointer flex items-center gap-2">
                            <span><FaLinkedin /></span> <span>@HERO-IO</span>
                        </li>
                        <li className="hover:text-white cursor-pointer flex items-center gap-2">
                            <span><FaFacebookSquare /></span> <span>@HERO-IO</span>
                        </li>
                        <li className="hover:text-white cursor-pointer flex items-center gap-2">
                            <span><TbMailFilled /></span> <span>support@heroio.com</span>
                        </li>
                    </ul>
                </div>

            </div>
            <div className="border-t border-gray-700">
                <p className="text-center text-sm py-6 text-gray-400">
                    © {new Date().getFullYear()} HERO.IO All rights reserved.
                </p>
            </div>

        </footer>
    );
};

export default Footer;