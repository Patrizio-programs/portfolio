import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import {AiOutlineLinkedin} from 'react-icons/ai';

const SocialMedia = () => (
  <div className="app__social">

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



  </div>
);

export default SocialMedia;