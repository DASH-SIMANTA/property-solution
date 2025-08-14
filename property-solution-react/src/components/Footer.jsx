import React from 'react';
import logo from "../assets/nav-location-icon.png";
import { FaSquareInstagram } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";



const Footer = () => {
    return (
        <footer className="footer flex bg-base-200  text-base-content p-10 gap-5">
            <aside className='left w-80 ml-24 mr-24'>

                <div className=" w-[50px] h-[60px] mr-32">
                    <img className="w-full h-full rounded-2xl" src={logo} alt="" />
                </div>


               

                <p className='justify-start w-full'>
                    ListMyCity does not charge booking fees or service fees. All property informationis submitted directly by hosts or obtained through public channels. All transactions are handled independently between guest and host.
                </p>
                <br />
                <div className='flex align-baseline'>
                    <FaSquareInstagram className='w-8 h-8 rounded-2xl' />
                    <p className='pt-2'>@listmycity</p>



                </div>
                <div className='flex align-middle'>
                    <CgMail className='w-8 h-8 rounded-2xl' />
                    <p className='pt-2'>Inquiries@listmycity.us</p>


                </div>



            </aside>
            <nav className='w-80'>
                <h6 className="footer-title">Quick Menu</h6>
                <a className="link link-hover">Home</a>
                <a className="link link-hover">Explore Stays</a>
                <a className="link link-hover">Refer & Earn</a>
                <a className="link link-hover">List Your Property</a>
                <a className="link link-hover">Help & Support</a>
                <a className="link link-hover">Messaging</a>
                <a className="link link-hover">Notification</a>
                <a className="link link-hover">FAQs</a>
            </nav>
            <nav className='w-80'>
                <h6 className="footer-title">Information</h6>
                <a className="link link-hover">My Account</a>
                <a className="link link-hover">Login</a>
                <a className="link link-hover">My Properties</a>
                <a className="link link-hover">Save</a>
            </nav>
            <nav className='w-80'>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Basic Plan</a>
                <a className="link link-hover">Standard Plan</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Terms & Conditions</a>
            </nav>
            <nav className='w-80 mr-24'>
                <h6 className="footer-title">Subscribe</h6>
                <a className="link link-hover">Enter your email below to be the first to know about new collections.</a>

                <div className='flex align-baseline'>
                    <CgMail className='w-8 h-8 rounded-2xl pt' />
                    <a className='pt-2'>Your Email</a>


                </div>
            
            </nav>

        </footer>
    );
};

export default Footer;