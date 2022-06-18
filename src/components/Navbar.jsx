import logo from '../assets/logo.png'
import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import './Navbar.scss';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
  return (
    <nav className='app__navbar'>
        <div className='app__navbar-logo'>
        <img src={logo} alt="" />
        </div>
        <ul className="app__navbar-links">
       
          <li className="app__flex p-text">
           
            <a href='#'> Home</a>
        </li>
        
        <li className="app__flex p-text">
           
           <a href='#'>About Me</a>
        </li>
        
       
  
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              
                <li>
                  <a href='#' onClick={() => setToggle(false)}>Home
                  
                </a>
                
              </li>
              
              
              <li>
                  <a href='#' onClick={() => setToggle(false)}>About Me
                  
                </a>
                
                </li>
          
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar