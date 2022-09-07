import React, { useState } from 'react';

import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';


import './Navbar.scss';
import { BiBook,  BiMessageSquareDetail  } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { MdRecommend } from 'react-icons/md';
import { FaRegThumbsUp } from 'react-icons/fa';


const Navbar = () => {

    const [activeNav, setActiveNav] = useState('#')

  return (
    <nav className='nav'>


        <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
        <a href="#About" onClick={() => setActiveNav('#About')} className={activeNav === '#About' ? 'active' : ''}><AiOutlineUser /></a>
        {/* <a href="#Skills" onClick={() => setActiveNav('#Skills')} className={activeNav === '#Skills' ? 'active' : ''}><BiBook /></a> */}
        <a href="#Work" onClick={() => setActiveNav('#Work')} className={activeNav === '#Work' ? 'active' : ''}><RiServiceLine /></a>
        <a href="#Testimonial" onClick={() => setActiveNav('#Testimonial')} className={activeNav === '#Testimonial' ? 'active' : ''}><FaRegThumbsUp /></a>
        <a href="#Contact" onClick={() => setActiveNav('#Contact')} className={activeNav === '#Footer' ? 'active' : ''}><BiMessageSquareDetail /></a>





    </nav>
  )
}

export default Navbar