import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './Services.scss';
import { urlFor, client } from '../../client';
import { images } from '../../constants';
import { FaAward } from 'react-icons/fa'
import { FiUsers} from 'react-icons/fi'
import {VscFolderLibrary } from 'react-icons/vsc'
import {MdAppSettingsAlt} from 'react-icons/md'
import {GiAndromedaChain, GiPaintBrush} from 'react-icons/gi'
import {BsGlobe} from 'react-icons/bs'

import { AiOutlineArrowRight, AiOutlineClose, AiOutlineCheck }  from 'react-icons/ai'



const Service = () => {
  const [style5, setStyle5] = useState('services__modal');

  const [style3, setStyle3] = useState('services__modal');

  const [style4, setStyle4] = useState('services__modal');

  const [style2, setStyle2] = useState('services__modal');



  const changeStyle3 = () => {
    setStyle3('services__modal-reveal')
  }

  const changeStyle4 = () => {
    setStyle4('services__modal-reveal')

  }

  const changeStyle5 = () => {
    setStyle5('services__modal-reveal')
  }

  const changeStyle2 = () => {
    setStyle2('services__modal-reveal')
  }

  const cancelStyle = () => {
   
    setStyle3('services__modal')
    setStyle4('services__modal')
    setStyle5('services__modal')
    setStyle2('services__modal')
  }
  return (
    <section id='Service'>
      <div className="service__container">

      
      <div className='top__titles'>
        <h5>My Services</h5>
        <h2 className='head-text'>What I Offer</h2>
  
      </div>
        
          <div
           
            className="container service__container" 
          >
          
            <div className='service__content'>
              <div className="service__cards">



                <article className='service__card'>
                  <BsGlobe className='service__icon' />
                  <div className='service__title'>
                    <h3>Blockchain</h3>
                    <p className='p-text'>Services</p>
                  </div>
                    
                      <span className="service__button" onClick={changeStyle3}>
                        See more <AiOutlineArrowRight className='service__icon1'/>
                      </span>
                   
               
                  <div className={style3}>
                    <div className="services__modal-content">
                        <AiOutlineClose  className='services__modal-close' onClick={cancelStyle}/>

                        <h3 className="services__modal-title">
                          Blockchain implementaions
                        </h3>
                       
                          <ul className="services__modal-list">
                            <li className="services__modal-item">
                             {/* <AiOutlineCheck className='services__modal-icon' /> */}
                             <p className="services__modal-info">
                                Smart contract Development using solidity
                             </p>
                            </li>

                            

                           
                            <li className="services__modal-item">
                             {/* <AiOutlineCheck className='services__modal-icon' /> */}
                             <p className="services__modal-info">
                               Development of Dapps, DAOs
                             </p>
                            </li>

                            
                            <li className="services__modal-item">
                             {/* <AiOutlineCheck className='services__modal-icon' /> */}
                             <p className="services__modal-info">
                               Smart contract testing
                             </p>
                            </li>


                            <li className="services__modal-item">
                             {/* <AiOutlineCheck className='services__modal-icon' /> */}
                             <p className="services__modal-info">
                               Nfts, tokens, oracles, smart contract security
                             </p>
                            </li>



                 
                            
                          </ul>
                       
                    </div>
                  </div>
                </article>








                <article className='service__card'>
                  <GiPaintBrush className='service__icon' />
                  <div className='service__title'>
                    <h3>Web Development</h3>
                    <p className='p-text'>Frontend/Backend</p>
                  </div>
                  
                  <span className="service__button" onClick={changeStyle4}>
                        See more <AiOutlineArrowRight className='service__icon1'/>
                  </span>

                  <div className={style4}>
                    <div className="services__modal-content">
                        <AiOutlineClose  className='services__modal-close' onClick={cancelStyle}/>

                        <h3 className="services__modal-title">
                          Web Development
                        </h3>
                        
                          <ul className="services__modal-list">
                            <li className="services__modal-item">
                             {/* <AiOutlineCheck className='services__modal-icon' /> */}
                             <p className="services__modal-info">
                                MERN projects
                             </p>
                            </li>

                            <li className="services__modal-item">
                             {/* <AiOutlineCheck className='services__modal-icon' /> */}
                             <p className="services__modal-info">
                               Implementation of Firebase and Sanity
                             </p>
                            </li>


                            <li className="services__modal-item">
                             {/* <AiOutlineCheck className='services__modal-icon' /> */}
                             <p className="services__modal-info">
                               frontend services
                             </p>
                            </li>

                            
                          </ul>
                       
                    </div>
                  </div>
                </article>








                <article className='service__card'>
                  <GiAndromedaChain className='service__icon' />
                  <div className='service__title'>
                    <h3>Extras</h3>
                    <p className='p-text'>Other Services</p>
                  </div>
                  <span className="service__button" onClick={changeStyle5}>
                        See more <AiOutlineArrowRight className='service__icon1'/>
                  </span>

                  <div className={style5}>
                    <div className="services__modal-content">
                        <AiOutlineClose  className='services__modal-close' onClick={cancelStyle}/>

                        <h3 className="services__modal-title">
                          Other Services
                        </h3>
                       
                          <ul className="services__modal-list">
                            <li className="services__modal-item">
                             {/* <AiOutlineCheck className='services__modal-icon' /> */}
                             <p className="services__modal-info">
                                Cross Platform Mobile Apps Development
                             </p>
                            </li>

                            <li className="services__modal-item">
                             {/* <AiOutlineCheck className='services__modal-icon' /> */}
                             <p className="services__modal-info">
                                UI/UX 
                             </p>
                            </li>

                      

                            
                          </ul>
                       
                    </div>
                  </div>
                </article>






             








              </div>




              
            </div>
            
          </div>
        </div>
     
    </section>
  );
};

export default AppWrap(
  MotionWrap(Service, 'app__service'),
  'services',
  'app__whitebg',
);