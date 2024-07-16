import React from 'react'
import Header from "./Components/nav_header/header";
import About from "./Components/about/about";
import Services from "./Components/Services/services";
import Portfolio from "./Components/Portfolio/portfolio";
import Testimonial from "./Components/Testimonial/testimonial";
import Footer from "./Components/footer/Footer";

export default function home() {
  return (
<>
<Header></Header>
      <About></About>
      <Services></Services>
      <Portfolio></Portfolio>
      <Testimonial></Testimonial>
      <Footer></Footer></>
  )
}
