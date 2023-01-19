import React from "react";
//Import all the components of the page into the react App

// import About from "./container/About";
// import Footer from "./container/Footer";
// import Header from "./container/Header";
// import Skills from "./container/Skills";
// import Testimonial from "./container/Testimonial";
// import Work from "./container/Work";

// Components imported by a single export file
import { About, Footer, Header, Skills, Testimonial, Work } from "./container";
import { Navbar } from "./components";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Work />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default App;
