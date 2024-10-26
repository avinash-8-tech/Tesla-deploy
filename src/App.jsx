import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AnimatedCursor from 'react-animated-cursor';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Features from './components/Features';
import Footer from './components/Footer';
import Model from './components/Model';
import Lenis from 'lenis'

const App = () => {

  useEffect(() => {
    const lenis = new Lenis();

    lenis.on('scroll', (e) => {
      console.log(e);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

  })

  return (
    <Router>
      <div>
        <AnimatedCursor
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={2}
          outerAlpha={0}
          hasBlendMode={true}
          innerStyle={{
            backgroundColor: '#000',
            zIndex: '10001',
          }}
          outerStyle={{
            border: '3px solid #000'
          }}
        />
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <Hero />
              <Highlights />
              <Features />
              <Footer />
            </>
          } />
          <Route path="/models" element={<Model />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
