import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import GitStats from './components/GitStats';
import Contact from './Components/Contact';
import './style.css';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <GitStats />
      <Contact />
    </>
  );
}

export default App;
