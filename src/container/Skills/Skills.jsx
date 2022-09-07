import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss';
import Progress from '../Progress/Progress';






const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }

  }
}



      


  const Skills = () => {
    const [fntd, setFntd] = useState([])
    const [web3, setWeb3] = useState([])
    const [bckd, setBckd] = useState([])
    
    const [ot, setOt] = useState([])

    useEffect(() => {

        const w = '*[_type == "web3"] | order(_createdAt asc)';
        const f = '*[_type == "frontend"] | order(_createdAt asc)';
        const b = '*[_type == "backend"] | order(_createdAt asc)';
        const o = '*[_type == "ot"] | order(_createdAt asc)';

        client.fetch(w).then((data) => {
            setWeb3(data)
        })
        client.fetch(f).then((data) => {
            setFntd(data)
        })
        client.fetch(b).then((data) => {
          setBckd(data)
      })
        
        client.fetch(o).then((data) => {
            setOt(data)
        })


    }, [])
  


  return (
    <div id='Skills'>

      <div className='top__titles'>
        <h5 className=''>What Skills I Have</h5>
      
        <h2 className="head-text">My Experiences</h2>
  
      </div>




<div className="container experience__container">
    
  <div  className="experience__frontend">
      <h3 className="experience__header">WEB 3</h3>

      <div className="map__header">


      {web3.map((skill) => ( 

          <div  className="experience__content">
            
            <motion.div
               whileInView={{ opacity: [0, 1] }}
               transition={{ duration: 0.5 }}
                className="experience__details"
                key={skill.name}
              >
              <img className='made__icon' src={urlFor(skill.icon)} alt={skill.name}/>
              
              <div>
                <h4>{skill.name}</h4>
                <motion.div
                    variants={scaleVariants}
                    whileInView={scaleVariants.whileInView}
                    className='loader'>
                        <Progress done={skill.perc} />
              </motion.div>
              </div>
            </motion.div>
           
          </div>


      ))}

</div>

  </div>





  <div  className="experience__frontend">
      <h3>FRONTEND</h3>


      {fntd.map((skill) => ( 

          <div className="experience__content">
            <article key={skill.name}  className='experience__details'>
            
              <img className='made__icon' src={urlFor(skill.icon)} alt={skill.name}/>
              
              <div>
                <h4>{skill.name}</h4>
                <motion.div
                    variants={scaleVariants}
                    whileInView={scaleVariants.whileInView}
                    className='loader'>
                        <Progress done={skill.perc} />
              </motion.div>
              </div>
                  
            </article>
          </div>


      ))}

  </div>



  <div  className="experience__frontend">
      <h3>BACKEND</h3>


      {bckd.map((skill) => ( 

          <div className="experience__content">
            <article key={skill.name}  className='experience__details'>
            
              <img className='made__icon' src={urlFor(skill.icon)} alt={skill.name}/>
              
              <div>
                <h4>{skill.name}</h4>
                <motion.div
                    variants={scaleVariants}
                    whileInView={scaleVariants.whileInView}
                    className='loader'>
                        <Progress done={skill.perc} />
              </motion.div>
              </div>
                  
            </article>
          </div>


      ))}

  </div>


  <div  className="experience__frontend">
      <h3>OTHERS</h3>


      {ot.map((skill) => ( 

          <div className="experience__content">
            <article key={skill.name}  className='experience__details'>
            
              <img className='made__icon' src={urlFor(skill.icon)} alt={skill.name}/>
              
              <div>
                <h4>{skill.name}</h4>
                <motion.div
                    variants={scaleVariants}
                    whileInView={scaleVariants.whileInView}
                    className='loader'>
                        <Progress done={skill.perc} />
              </motion.div>
              </div>
                  
            </article>
          </div>


      ))}

  </div>

    
</div>







   
             




     
    </div>
  );
};

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'app__whitebg',
);