import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <div id="home" className="section fade-in"><Home /></div>
      <div id="about" className="section slide-up"><About /></div>
      <div id="skills" className="section fade-in"><Skills /></div>
      <div id="projects" className="section slide-up"><Projects /></div>
      <div id="experience" className="section fade-in"><Experience /></div>
      <div id="certificates" className="section slide-up"><Certificates /></div>
      <div id="contact" className="section fade-in"><Contact /></div>
    </div>
  );
}

export default App;       