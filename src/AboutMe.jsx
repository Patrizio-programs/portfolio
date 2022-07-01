import "./App.scss";
import React from 'react';
import AppWrap from "./Wrapper/AppWrap";
import pic from './assets/profile_pic.jpg'

const AboutMe = () => {
  return (

    <div className ='aboutme' id='aboutme'>

<div class="card">
        <img src={pic} alt='profile-pic'/>
        <div class="details">
            <h2>Patrick Medley</h2>
            <p>Web Dev</p>
        </div>
        <p id="info">My name is Patrick Medley and I am from Jamaica 🇯🇲. I love sports and reading books. I am interested in all sciences and I love Technology.
        </p>
    </div>

    
        
 
        

    </div>
  )
}

export default AppWrap(AboutMe, 'aboutme')