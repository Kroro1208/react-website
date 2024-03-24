import React, { useEffect } from 'react';
import Hero from './components/Hero';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {

  useEffect(() => {
    AOS.init({
      duration: 2500,
      delay: 400
    });
  })

  return (
    <div className='overflow-hidden'>
      <Hero />
    </div>
  );
};

export default App;
