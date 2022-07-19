import Home from "./Home";
import "./App.scss";
import emailjs from "@emailjs/browser";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import AboutMe from "./AboutMe";
import Footer from "./container/Footer/Footer";
import React from "react";
import Resume from "./Resume";
import {HashRouter as Router} from "react-router-dom";
import { createContext, useState } from "react";
import ReactSwitch from "react-switch";

(function () {
  emailjs.init("LfuScSUIeiHe69orR");
})();

export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {

    setTheme((curr) =>  (curr === 'light' ? 'dark' : 'light'));
  };
  
  return (

    <ThemeContext.Provider>
    
    <div id={theme}>
    
   
      
    <Router>
    <div className="app">
   
      <Navbar/>
      
     
      <Routes>
    
              <Route path='/' element={<Home/>} />
              <Route path='/aboutme' element={<AboutMe/>} />
              <Route path='/resume' element={<Resume/>}/>
    </Routes>
 
    <Footer/>
    <div className="app__switch">
    
            <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'}/> <br></br>
            <label>{theme=== 'light' ? "Light Mode" : "Dark Mode"}</label> 
            
            </div>
    </div>
    </Router>

    </div>
    </ThemeContext.Provider>
    
   

  );
}

export default App;
