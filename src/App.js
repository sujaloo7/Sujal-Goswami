import React, { useEffect } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import Navbar from './components/Navbar';
import "./components/main.css";
import Hero from './components/Hero';
import AOS from "aos";
import "aos/dist/aos.css";
import Projects from './components/Projects';
import Footer from './components/Footer';



function App() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
    AOS.refresh();
  }, []);
  return (

    <>
      <Navbar />
      <Hero />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
