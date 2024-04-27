import React from 'react';
import './App.css';
import Header from './componenets/header/Header';
import Home from './componenets/home/Home';
import About from './componenets/about/About';
import Skills from './componenets/skills/Skills';


function App() {
  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
      </main>
    </>
  );
}

export default App;
