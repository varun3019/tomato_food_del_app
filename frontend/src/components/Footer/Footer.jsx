import React from 'react'
import './footer.css'
import { assets } from '../../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
    <div className="footer-content">
        <div className="footer-content-left">
        <img src={assets.logo} alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia doloribus sequi quibusdam repudiandae! Praesentium ratione molestias culpa eius alias consectetur cupiditate incidunt soluta sapiente consequatur, necessitatibus pariatur optio at possimus.</p>
        <div className="footer-social-icons">
        <img src={assets.facebook_icon} alt="" />
        <img src={assets.twitter_icon} alt="" />
        <img src={assets.linkedin_icon} alt="" />
        </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>HOME</li>
                <li>ABOUT US</li>
                <li>DELIVERY</li>
                <li>PRIVACY POLICY</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>Get In Touch</h2>
            <ul>
                <li>9380754551</li>
            <li>varunrao1000@gmail.com</li>
            </ul>
        </div>
    </div>
    <hr />
    <p className="footer-copyright">
        Copyright 2024 @Tomoto.com -All Right Reserved
    </p>
    </div>
  )
}

export default Footer