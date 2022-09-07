import React from 'react'
import { images } from '../../constants';

import './Logo.scss';

const Logo = () => {
  return (
    <div className='app__navbar'>
        <div className='app__navbar-logo'>
            <img src={images.logo} alt="logo" />
        </div>
    </div>
  )
}

export default Logo