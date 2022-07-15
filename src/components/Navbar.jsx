import logo from '../assets/logo.webp';
import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import {Link} from 'react-router-dom';
import './Navbar.scss';
import DarkMode from './DarkMode';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const scrollUp = () =>{
      window.scrollTo(0,0)
      setToggle(false)
    }


  return (
    <nav className='app__navbar'>
        <div className='app__navbar-logo'>
        <img src={logo} alt="" />
        </div>
        <ul className="app__navbar-links">
       
          <li className="app__flex p-text">
           
          <Link to = {'/'} onClick={() => scrollUp()}>Home</Link>  
        </li>
        
        <li className="app__flex p-text">  
        <Link to = {'AboutMe'} onClick={() => scrollUp()}>About Me</Link>  
        </li>

        <li className="app__flex p-text">  
        <Link to = {'Resume'} onClick={() => scrollUp()}>Resume</Link>  
        </li>


        <div>
        <DarkMode/>
      </div>
      </ul>

      

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: .90, ease: 'easeOut' }}
          >
            <HiX onClick={() => scrollUp()} />
            <ul>
              
            <li>
           
           <Link to = "/" onClick={() => scrollUp()}>Home</Link>  
         </li>
                 
              <li>
              <Link to = {'AboutMe'} onClick={() => scrollUp()}>About Me</Link>  
                </li>

                <li>
              <Link to = {'Resume'} onClick={() => scrollUp()}>Resume</Link>  
                </li>

            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navbar