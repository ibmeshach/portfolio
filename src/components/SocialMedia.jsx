import React from 'react';
import { BsTwitter, BsLinkedin } from 'react-icons/bs';
import {  FaGithub } from 'react-icons/fa';


const SocialMedia = () => {
  return (
    <div className='app__social'>
        <div>
            <a href="https://twitter.com/Ehimeshach" target='_blank'><BsTwitter /></a>
        </div>
        
        <div>
        <a href="https://www.linkedin.com/in/ibadin-meshach-b65bb2241/" target='_blank'><BsLinkedin /></a>
        </div>
        <div>
        <a href="https://github.com/ibmeshach" target='_blank'><FaGithub /></a>
        </div>

    </div>
  )
}

export default SocialMedia