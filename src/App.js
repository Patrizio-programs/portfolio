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

(function () {
  emailjs.init("LfuScSUIeiHe69orR");
})();

function App() {
  
  return (
    
    <div>
    
   
      
    <Router>
    <div className="app">
   
      <Navbar/>
     
      <Routes>
    
              <Route path='/' element={<Home/>} />
              <Route path='/aboutme' element={<AboutMe/>} />
              <Route path='/resume' element={<Resume/>}/>
    </Routes>
    <Footer/>
    </div>
    </Router>

    </div>
    
   

  );
}

export default App;
