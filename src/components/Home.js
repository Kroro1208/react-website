// pages/Home.js
import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Why from '../components/Why';
import Works from '../components/Works';
import Contact from '../components/Contacts';

const Home = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Why />
      <Works />
      <Contact />
      {/* 他のホームページ固有のコンポーネント */}
    </>
  );
};

export default Home;
