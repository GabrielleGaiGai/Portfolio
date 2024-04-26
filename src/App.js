import React from 'react';
import './App.css';
import Header from './componenets/header/Header';
import Home from './componenets/home/Home';


function App() {
  return (
    <>
      <Header />
      <main className='main'>
        <Home />
      </main>
    </>
  );
}

export default App;
