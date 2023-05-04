import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner.js";
import Features from './Components/Features.js';
import About from './Components/About.js';
import Services from './Components/Services.js';
import Roadmap from './Components/Roadmap';
import History from './Components/History';
import Testimonial from './Components/Testimonial';
import Footer from './Components/Footer.js';
import PartnerSection from './Components/PartnerSection';
import ContactUs from './Components/ContactUs';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App" >
        <Navbar />
        <Routes>
          <Route exact path="/" element={<>
            <Banner />
            <Features />
            <About />
            <Services />
            <Roadmap />
            <History />
            <Testimonial />
            <PartnerSection />
          </>} />
          <Route exact path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;