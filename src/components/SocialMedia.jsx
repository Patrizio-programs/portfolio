import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <BsTwitter />
    </div>
    <a href='https://www.facebook.com/profile.php?id=100082245522864'>
    <div> 

      <FaFacebookF />

    </div>
    </a>
    <div>
      <BsInstagram />
    </div>
  </div>
);

export default SocialMedia;