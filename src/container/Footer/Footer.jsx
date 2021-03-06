import React, { useState, useRef}  from 'react'
import './Footer.scss'
import { motion } from 'framer-motion';
import AppWrap from '../../Wrapper/AppWrap';
import { client } from './../../client';
import emailjs from "@emailjs/browser";
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import {AiOutlineLinkedin} from 'react-icons/ai';


const MotionWrap = (Component, classNames) => function HOC() {
  return (
    <motion.div
      whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
      transition={{ duration: 0.5 }}
      className={`${classNames} app__flex`}
    >
      <Component />
    </motion.div>
  );
};

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const { username, email, message } = formData;

  const sendEmail = () => {
    
    emailjs.sendForm('service_o254kcw', 'template_ear2q23', form.current, 'LfuScSUIeiHe69orR')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);
    sendEmail(formData);

    const contact = {
      _type: 'contact',
      name: formData.username,
      email: formData.email,
      message: formData.message,
    };

    

    client.create(contact)
      .then(() => {
        setLoading(false);
        setIsFormSubmitted(true);
      })
      .catch((err) => console.log(err));
  };


  return (
    <>
     <h2 className="head-text">Contact</h2>
      <div> <div className="app__social" id='social'>

<a href='https://twitter.com/P_ptrix'>
   <div>
     <BsTwitter />
   </div>
   </a>
   
   <a href='https://www.facebook.com/profile.php?id=100082245522864'>
   <div> 
     <FaFacebookF />
   </div>
   </a>

   <a href='https://www.instagram.com/patriziothedev/'>
   <div>
     <BsInstagram />
   </div>
   </a>


   <a href='https://www.linkedin.com/in/patrick-medley2497/'>
   <div>
     <AiOutlineLinkedin />
     </div>
     </a>



 </div> </div>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <>???? </>
          <a href="mailto:patriziomedley@gmail.com" >patriziomedley@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <>????</>
          <a href="tel:+1 (784) 430-3121">+1 (784) 430-3121</a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <form ref={form}>
        <div className="app__footer-form app__flex">
            <div className="app__flex">
            <label htmlFor="name"></label>
            <input  type="text" placeholder="Your Name" name="name" value={username} onChange={handleChangeInput} required/>
          </div>
            <div className="app__flex">
            <label htmlFor="email"></label>
            <input  type="email" placeholder="Your Email" name="email" value={email} onChange={handleChangeInput} required/>
          </div>
            <div>
            <label htmlFor="message"></label>
            <textarea
           
              placeholder="Your Message"
              value={message}
                name="message"
                
                onChange={handleChangeInput}
                required
            />
          </div>
          <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
          </div> 
          </form>
      ) : (
        <div>
          <h3 className="head-text">
            Thank! I will get back to you as soon as possible.
          </h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);