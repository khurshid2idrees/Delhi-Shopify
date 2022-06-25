import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
// import Footer from './Components/Footernewcomp/Footer';
import BottomBar from './Components/Bottombar';
import HeroSection from './Components/HeaderHome';
import Myprod from './Components/Myproducts/Myprod';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>
      <Navbar toggle={toggle}></Navbar>
      <Routes>
        {/* <Route path="/bigriggroup" element={<Home />} /> */}
        
      </Routes>
      <HeroSection></HeroSection>
      <Myprod/>
      {/* <Footer /> */}
      {/* <FooterSection></FooterSection> */}
      {/* <BottomBar /> */}
    </Router>
  );
}

export default App;
