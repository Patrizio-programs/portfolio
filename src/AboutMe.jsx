import "./App.scss";
import React from 'react';
import AppWrap from "./Wrapper/AppWrap";
import pic from './assets/profile_pic.jpg';
import {
  motion,
  useMotionValue,
  useTransform,
} from "framer-motion";


const AboutMe = () => {
  const x = useMotionValue(0)
  const background = useTransform(
    x,
    [-100, 0, 100],
    ["#ff008c", "#edf2f8", "#ca2a02"]
  )
  return (

    <div className ='aboutme' id='aboutme'>

      <h2>Hint: Drag the card left or right...</h2>

<motion.div style={{ background }} className='motion-background'>
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        style={{ x }}
        className='motion-card'
      >
        <div class="card">
        <img src={pic} alt='profile-pic'/>
        <div class="details">
            <h2>Patrick Medley</h2>
            <p>Web Dev</p>
        </div>
        <p id="info">My name is Patrick Medley and I am from Jamaica 🇯🇲. I love sports and reading books. I am interested in all sciences and I love Technology.
        </p>
    </div>

     
      </motion.div>

    </motion.div>




    
        
 
        

    </div>
  )
}

export default AppWrap(AboutMe, 'aboutme')