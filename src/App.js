import { BrowserRouter } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from './components/Header';
import NavMobile from './components/NavMobile';
import PagesRouter from './components/PagesRouter';

const App = () => {
  const [navMobile, setNavMobile] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 2500,
      delay: 400
    });
  });

  return (
    <BrowserRouter>
      <div className='overflow-hidden'>
        <Header setNavMobile={setNavMobile} />
        <div className={`${navMobile ? 'right-0' : '-right-full'}
        fixed z-10 top-0 h-full transition-all duration-200`}>
          <NavMobile setNavMobile={setNavMobile} />
        </div>
        {/* ルーティングされたページを表示 */}
        <PagesRouter />
      </div>
    </BrowserRouter>
  );
};

export default App;
