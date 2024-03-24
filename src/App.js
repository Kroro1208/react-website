import React, { useEffect } from 'react';
import Hero from './components/Hero';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';

const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 2500,
      delay: 400
    });
  })

  return (
    <div className='overflow-hidden'>
      <Header />
      <Hero />
    </div>
  );
};

export default App;
