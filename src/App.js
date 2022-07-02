import Home from "./Home";
import "./App.scss";
import emailjs from "@emailjs/browser";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import AboutMe from "./AboutMe";
import Footer from "./container/Footer/Footer";
import React from "react";


(function () {
  emailjs.init("LfuScSUIeiHe69orR");
})();

function App() {
  return (



    


    
    <div className="app">
      <Navbar/>
      <Routes>
    
              <Route path='/' element={<Home/>} />
              <Route path='/aboutme' element={<AboutMe/>} />

         
    </Routes>

    <Footer/>
  
    </div>

  );
}

export default App;
