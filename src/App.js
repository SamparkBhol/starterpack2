import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
import BotSection from './components/BotSection';
import ContactSlider from './components/ContactSlider';
import Footer from './components/Footer';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [ripples, setRipples] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Create ripple effect
      const newRipple = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
      };
      
      setRipples(prev => [...prev.slice(-5), newRipple]);
      
      // Remove ripple after animation
      setTimeout(() => {
        setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
      }, 1000);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="App relative overflow-x-hidden">
      {/* Cursor ripple effects */}
      {ripples.map(ripple => (
        <div
          key={ripple.id}
          className="fixed pointer-events-none z-50 rounded-full border-2 border-blue-400 animate-ping"
          style={{
            left: ripple.x - 10,
            top: ripple.y - 10,
            width: '20px',
            height: '20px',
            opacity: 0.6,
          }}
        />
      ))}
      
      {/* Custom cursor */}
      <div
        className="fixed pointer-events-none z-40 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-50 transition-all duration-100"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: 'translate(0, 0)',
        }}
      />

      <Header />
      <Hero />
      <Experience />
      <Projects />
      <Education />
      <Skills />
      <BotSection />
      <ContactSlider />
      <Footer />
    </div>
  );
}

export default App;