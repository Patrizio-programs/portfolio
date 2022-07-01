import logo from '../assets/logo.png';
import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import {Link} from 'react-router-dom';
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
           
          <Link to = {'/'} onClick={() => setToggle(false)}>Home</Link>  
        </li>
        
        <li className="app__flex p-text">
           
        <Link to = {'AboutMe'} onClick={() => setToggle(false)}>About Me</Link>  
        </li>
        
    
       
  
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 1.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              
            <li>
           
           <Link to = "/" onClick={() => setToggle(false)}>Home</Link>  
         </li>
                 
              <li>
              <Link to = {'AboutMe'} onClick={() => setToggle(false)}>About Me</Link>  
                </li>

           

          
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar