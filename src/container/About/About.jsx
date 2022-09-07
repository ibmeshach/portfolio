import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { urlFor, client } from '../../client';
import { images } from '../../constants';
import { FaAward } from 'react-icons/fa'
import { FiUsers} from 'react-icons/fi'
import {VscFolderLibrary } from 'react-icons/vsc'
import ME from '../../assets/me.png'
import {MdEngineering} from 'react-icons/md'
import {BsDot} from 'react-icons/bs'
import { AiOutlineArrowRight, AiOutlineClose, AiOutlineCheck }  from 'react-icons/ai'
import {GiSkills, GiFlexibleStar} from 'react-icons/gi'
import { Ri24HoursLine} from 'react-icons/ri'



const About = () => {
  const [style5, setStyle5] = useState('abouts__modal');

  const [style1, setStyle1] = useState('abouts__modal');

  const [style2, setStyle2] = useState('abouts__modal');

  const [style3, setStyle3] = useState('abouts__modal');

  const [style4, setStyle4] = useState('abouts__modal');



  const changeStyle1 = () => {
    setStyle1('abouts__modal-reveal')
  }

  const changeStyle2 = () => {
    setStyle2('abouts__modal-reveal')
  }

  const changeStyle3 = () => {
    setStyle3('abouts__modal-reveal')
  }

  const changeStyle4 = () => {
    setStyle4('abouts__modal-reveal')

  }

  const changeStyle5 = () => {
    setStyle5('abouts__modal-reveal')
  }

  const cancelStyle = () => {
    setStyle1('abouts__modal')
    setStyle2('abouts__modal')
    setStyle3('abouts__modal')
    setStyle4('abouts__modal')
    setStyle5('abouts__modal')
  }
  return (
    <section id='About'>
      <div className='top__titles'>
        <h5>Get To Know</h5>
        <h2 className='head-text' >About Me</h2>
  
      </div>


    <div className="profile__container">

    <img src={ME} alt="profile" className='profile'/>
    </div>
      
     
   
        
          <div
           
            className="container about__container" 
          >
          
            <div className='about__content'>
              <div className="about__cards">


                <article className='about__card'>
                  <MdEngineering className='about__icon' />
                  <div className='about__title'>
                    <h3>Education</h3>
                    <p className='p-text'>Student</p>
                  </div>
                  <span className="about__button" onClick={changeStyle1}>
                        Learn more <AiOutlineArrowRight className='about__icon1'/>
                    </span>


                    <div className={style1}>
                    <div className="abouts__modal-content">
                        <AiOutlineClose  className='abouts__modal-close' onClick={cancelStyle}/>

                        <h3 className="abouts__modal-title">
                          Mechanical Engineering
                        </h3>
                        <p className="abouts__modal-description">
                          Currently getting my bachelor's
                          degree in the field of mechanical engineering
                        </p>
                          <ul className="abouts__modal-list">
                            <li className="abouts__modal-item">
                             {/* <BsDot className='abouts__modal-icon' /> */}
                             <p className="abouts__modal-info">
                                I am currently a 300level student of the department of mechanical engineering, 
                                University of Benin (UNIBEN).

                             </p>
                            </li>

                            <li className="abouts__modal-item">
                             {/* <BsDot className='abouts__modal-icon' /> */}
                             <p className="abouts__modal-info">
                               I had my secondary education at Uniben Demonstaration Secondary School (UDSS), Benin City.
                             </p>
                            </li>

                            <li className="abouts__modal-item">
                             {/* <BsDot className='abouts__modal-icon' /> */}
                             <p className="abouts__modal-info">
                               I plan on doing developing my skills both in mechanical engineering and software engineering.
                             </p>
                            </li>

                            
                          </ul>
                       
                    </div>
                  </div>
                </article>









                <article className='about__card'>
                  <FaAward className='about__icon' />
                  <div className='about__title'>
                    <h3>Experience</h3>
                    <p className='p-text'>10+ Projects</p>
                  </div>
                  <span className="about__button" onClick={changeStyle2}>
                        Learn More <AiOutlineArrowRight className='about__icon1'/>
                    </span>
                   
                    <div className={style2}>
                    <div className="abouts__modal-content">
                        <AiOutlineClose  className='abouts__modal-close' onClick={cancelStyle}/>

                        <h3 className="abouts__modal-title">
                          Experience
                        </h3>
                        <p className="abouts__modal-description">
                          Over 10 completed projects for clients and still counting
                        </p>
                          <ul className="abouts__modal-list">
                            <li className="abouts__modal-item">
                             {/* <BsDot className='abouts__modal-icon' /> */}
                             <p className="abouts__modal-info">
                                I have developed wonderfull projects both on the web2 and web3 space. 
                             </p>
                            </li>


                            <li className="abouts__modal-item">
                             {/* <BsDot className='abouts__modal-icon' /> */}
                             <p className="abouts__modal-info">
                                I have over a year experience in developing smart contracts with solidity and other tools and frameworks.   
                             </p>
                            </li>

                            <li className="abouts__modal-item">
                             {/* <BsDot className='abouts__modal-icon' /> */}
                              <p className="abouts__modal-info">
                                I also have started developing my skills with rust and the solana smart contract                           .
                              </p>
                            </li>

                            <li className="abouts__modal-item">
                             {/* <BsDot className='abouts__modal-icon' /> */}
                              <p className="abouts__modal-info">
                                I also have over 2 years experience in web development and I also worked well with other developers        .
                              </p>
                            </li>

                         
                            
                          </ul>
                       
                    </div>
                  </div>
                </article>









                <article className='about__card'>
                  <GiFlexibleStar className='about__icon' />
                  <div className='about__title'>
                    <h3>Personality</h3>
                    <p className='p-text'>Hardworking</p>
                  </div>
                    
                      <span className="about__button" onClick={changeStyle3}>
                        Learn more <AiOutlineArrowRight className='about__icon1'/>
                      </span>
                   
               
                  <div className={style3}>
                    <div className="abouts__modal-content">
                        <AiOutlineClose  className='abouts__modal-close' onClick={cancelStyle}/>

                        <h3 className="abouts__modal-title">
                          Honest
                        </h3>
                        <p className="abouts__modal-description">
                          Honest: I am a very honest, trust worthy and diligent individual with a sole purpose of pleasing by clients and employers
                        </p>
                          <ul className="abouts__modal-list">
                            <li className="abouts__modal-item">
                             {/* <BsDot className='abouts__modal-icon' /> */}
                             <p className="abouts__modal-info">
                                Accountability: I have always been good at making sure that I am accountable for every action I take, making me a very trust worthy person
                             </p>
                            </li>

                            <li className="abouts__modal-item">
                             {/* <BsDot className='abouts__modal-icon' /> */}
                             <p className="abouts__modal-info">
                               Flexibility: I also have the ability to adapt to changes and work under pressure, making me able to meet deadline, work with different people and other technologies.
                             </p>
                            </li>

                            <li className="abouts__modal-item">
                             {/* <BsDot className='abouts__modal-icon' /> */}
                             <p className="abouts__modal-info">
                               Team player: I have  very good communication skills with the ability to work well with others, no matter how many
                             </p>
                            </li>

                            <li className="abouts__modal-item">
                             {/* <BsDot className='abouts__modal-icon' /> */}
                             <p className="abouts__modal-info">
                               Creativity and Problem solving techniques: I have the ability to provide solutions to different problems
                             </p>
                            </li>

                      

                            
                          </ul>
                       
                    </div>
                  </div>
                </article>








                <article className='about__card'>
                  <Ri24HoursLine className='about__icon' />
                  <div className='about__title'>
                    <h3>Available</h3>
                    <p className='p-text'>24/7</p>
                  </div>
                  
                  <span className="about__button" onClick={changeStyle4}>
                        Learn more <AiOutlineArrowRight className='about__icon1'/>
                  </span>

                  <div className={style4}>
                    <div className="abouts__modal-content">
                        <AiOutlineClose  className='abouts__modal-close' onClick={cancelStyle}/>

                        <h3 className="abouts__modal-title">
                          Available
                        </h3>
                        <p className="abouts__modal-description">
                          I can be reached at anytime with different platforms
                        </p>
                          <ul className="abouts__modal-list">
                            <li className="abouts__modal-item">
                             {/* <BsDot className='abouts__modal-icon' /> */}
                             <p className="abouts__modal-info">
                                Whatsapp: +2348113774767, +2348148274833
                             </p>
                            </li>

                            <li className="abouts__modal-item">
                             {/* <BsDot className='abouts__modal-icon' /> */}
                             <p className="abouts__modal-info">
                               linkedln: Ibadin Meshach
                             </p>
                            </li>

                            <li className="abouts__modal-item">
                             {/* <BsDot className='abouts__modal-icon' /> */}
                             <p className="abouts__modal-info">
                              github: ibmeshach
                             </p>
                            </li>

                            <li className="abouts__modal-item">
                             {/* <BsDot className='abouts__modal-icon' /> */}
                             <p className="abouts__modal-info">
                              instagram:  @ib_meshach
                             </p>
                            </li>

                          

                            <li className="abouts__modal-item">
                             {/* <BsDot className='abouts__modal-icon' /> */}
                             <p className="abouts__modal-info">
                              twitter:  @Ehimeshach
                             </p>
                            </li>

                            <li className="abouts__modal-item">
                             {/* <BsDot className='abouts__modal-icon' /> */}
                             <p className="abouts__modal-info">
                              telegram:  +23481137747
                             </p>
                            </li>

                          

                          

                          
                            
                          </ul>
                       
                    </div>
                  </div>
                </article>








               






              </div>



              <div className='extra__info'>
              <p className=' about__text'>
                <ul>
                  <li>   
                      I'm a Blockchain solution architect and developer for EVM and Solana blockchains that including integrating with web and mobile applications.
                  </li>
                  
                  <li>
                      Additionally, I'm skilled with the backend and Frontend technologies like  Node.JS, MongoDB, Express JS, Firebase, Sanity, Html, React, Next, Css, Figma, Javascript, Git/Github, Typescript and others.
                  </li>
                  <li>
                  I have developed many projects and applications on top of Ethereum, Soalana and Node JS which are: 
                    - Token on standards - ERC 20 and ERC 721  - NFT minting applications  - DAO's - Dapps  
                  </li>
                  <li>
                   Skill sets include: - Solidity Dapp Development - Rust Solana Developement - MERN Development - UI/UX Designing with figma - Cross Platform App Development with Flutter and React Native
   
                  </li>
                
                   </ul>
              </p>

              <a href="https://github.com/ibmeshach" target="_blank" className='btn btn-primary1'>Github</a>
              <a href="#Footer" className='btn btn-primary2'>Let's Talk</a>
              

              </div>
             
            </div>
            
          </div>
        
     
    </section>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);