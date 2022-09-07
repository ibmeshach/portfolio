import React from 'react'
import './Footer.scss'
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';

import {IoLogoTwitter} from 'react-icons/io'
import { FiInstagram } from 'react-icons/fi';
import { FaFacebook } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
  return (
    <footer id='#Footer'>
      <a href="#" className='footer__logo'><img src={images.logo} alt="" /></a>

      <ul className='permalinks'>
          <li><a href="#">Home</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#Skills">Experiences</a></li>
          <li><a href="#Service">Services</a></li>
          <li><a href="#Work">Portfolio</a></li>
          <li><a href="#Testimonial">Testimonial</a></li>
          <li><a href="#Contact">Contact</a></li>
    
      </ul>


      <div className="footer__socials">
        <a href="https://www.facebook.com/ibadin.ehis" target='_blank' className='l1'><FaFacebook /></a>
        <a href="https://instagram.com/ib_meshach" target='_blank' className='l2'><FiInstagram /></a>
        <a href="https://twitter.com/Ehimeshach" target='_blank' className='l3'><IoLogoTwitter /></a>
        <a href="https://www.linkedin.com/in/ibadin-meshach-b65bb2241" target='_blank' className='l4'><AiFillLinkedin /></a>
      </div>

      <div className="footer__copyright">
         <small>
           &copy; Ibmeshach. All rights reserved
         </small>
      </div>
    </footer>

  )
}


export default AppWrap(
  MotionWrap(Footer, 'footer__about'),
  'footer',
  'app__whitebg',
);