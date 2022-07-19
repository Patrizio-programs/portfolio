import React from 'react'
import AppWrap from "./Wrapper/AppWrap";
import byu from './assets/BYU.webp'


const Resume = () => {
  return (
    <div id='resume' className='resume'>
        <h1 className='head-text'>Resume</h1>

    <div className='byu'>
    <h2>Education</h2>

       <p>Currently studying to recieve a B.S in Applied Technology at Brigham Young University-Idaho in 2024.</p>

        <a href='https://www.byui.edu/' target='blank'>
        <img src={byu} alt='BYU pic' width='auto' height='auto'/>
        </a>
    </div>

    <div className='experience'>

    <h2>Experience</h2>

<br></br>

    HGS - Hinduja Global Solutions as <b>Customer Service Agent</b>
    <p>Apr 2016 - Aug 2019 · 3 yrs 5 mos</p>

<br></br>
    
    Ibex Global as <b>Inside Sales Representative</b>
    <p>Oct 2019 - Jan 2021 · 1 yr 4 mos</p>

<br></br>

    Influx as <b>Bilingual Customer Service Agent</b>
    <p>May 2021 - Present · 1 yr+</p>

<br></br>

    Freelance as <b>Web Designer and Developer</b>
    <p>3 years experience working with small businesses on website design and development.</p>

    </div>

    <div>
        <h2>Skills</h2>

        <ul className='skills'>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Bootstrap</li>
            <li>Wordpress</li>
            <li>React</li>
            <li>Svelte</li>
            <li>Git</li>
            <li>Next Js</li>
        </ul>
    </div>
    
    </div>
  )
}

export default AppWrap(Resume, 'resume');