import React from "react";
import Services from "./Components/Services/services";
import Portfolio from "./Components/Portfolio/portfolio";
import Testimonial from "./Components/Testimonial/testimonial";
import Home from "./home";
import Contact from "./Components/contact/Contact";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Router>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Portfolio />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}
