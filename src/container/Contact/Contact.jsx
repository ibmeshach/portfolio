import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Contact.scss';
import {MdOutlineEmail} from 'react-icons/md'
import {RiH3, RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'




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


const Contact = () => {

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    };

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };


  return (
    <section id='Contact'>
       <div className='top__titles'>
        <h5 className=''>Get In Touch</h5>
    
        <h2 className="head-text">Contact Me</h2>

      </div>


      <div className="container contact__container">
        <div className="contact__options">

        <motion.div
          variants={scaleVariants}
          whileInView={scaleVariants.whileInView}>
            <a href="mailto:ibmesach@gmail.com" target='_blank' className='link'>
              <article className='contact__option'>
                <MdOutlineEmail className='contact__option-icon1'/>
                <h4>Email</h4>
                <h5>ibmeshach@gmail.com</h5>
                <a href="mailto:ibmesach@gmail.com" target='_blank' >Send a message</a>
              </article>
            </a>
          </motion.div>


         <motion.div
          variants={scaleVariants}
          whileInView={scaleVariants.whileInView}>
          <a href="https://wa.me/+2348113774767" target='_blank'  className='link'>
            <article className='contact__option'>
              <BsWhatsapp className='contact__option-icon3'/>
              <h4>Whatspp</h4>
              <h5>+2348113774767</h5>
              <a href="https://api.whatsapp.com/send?phone+2348113774767" target='_blank'>Send a message</a>
            </article>
          </a>
         </motion.div>
          
        
        </div>
        {!isFormSubmitted ?
         
              <form action="">
                <input type="text" name='name' placeholder='Your Full Name' value={name} onChange={handleChangeInput} required />
                <input type="email" name='email' placeholder='Your Email' value={email} onChange={handleChangeInput} required />
                <textarea name="message" id="" cols="30" rows="7" placeholder='Your Message' value={message} onChange={handleChangeInput} required></textarea>
                <button type='button ' className='btn btn-primary contact__btn' onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message'}</button>
              </form>
  

            : 
                <h3 className='congrats' style={{margin: '1rem auto'}}>
                  Thank you for getting in touch!
                </h3>
            }
                    
      </div>
    </section>
  );
};

export default AppWrap(
  MotionWrap(Contact, 'app__footer'),
  'contact',
  'app__whitebg',
);