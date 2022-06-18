<<<<<<< HEAD
import React from 'react';
import { motion } from 'framer-motion';
import AppWrap  from '../../Wrapper/AppWrap';
import './Header.scss';


const Header = () => (
  <div className="app__header app__flex" id='home'>
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text intro">Hello, my name is</p>
            <h1 className="head-text intro">Patrick Medley</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">Call me PatrizioTheDev</p>
        
         
        </div>
      </div>
    </motion.div>

   
       
  </div>
);

=======
import React from 'react';
import { motion } from 'framer-motion';
import AppWrap  from '../../Wrapper/AppWrap';
import './Header.scss';


const Header = () => (
  <div className="app__header app__flex" id='home'>
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          <span>👋</span>
          <div style={{ marginLeft: 20 }}>
            <p className="p-text intro">Hello, my name is</p>
            <h1 className="head-text intro">Patrick Medley</h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text">Call me PatrizioTheDev</p>
        
         
        </div>
      </div>
    </motion.div>

   
       
  </div>
);

>>>>>>> a6e474b2306bb5af9cdbf466e4f260ea62e8664d
export default AppWrap(Header, 'home');