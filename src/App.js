import React, { useEffect, useState } from 'react';
import Hero from './components/Hero';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import NavMobile from './components/NavMobile';
import Stats from './components/Stats';
import Why from './components/Why';
import Calculate from './components/Calculate';
import Contact from './components/Contacts';
import Works from './components/Works';

const App = () => {
  const [navMobile, setNavMobile] = useState(false);
  useEffect(() => {
    AOS.init({
      duration: 2500,
      delay: 400
    });
  })

  return (
    <div className='overflow-hidden'>
      <Header setNavMobile={setNavMobile} />
      <Hero />
      <div className={`${navMobile ? 'right-0' : '-right-full'}
      fixed z-10 top-0 h-full transition-all duration-200`}>
        <NavMobile setNavMobile={setNavMobile} />
      </div>
      <Stats />
      <Why />
      <Works />
      <Contact />
      <div className='h-[2000px]'></div>
    </div>
  );
};

export default App;
