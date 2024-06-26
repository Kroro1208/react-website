import React from 'react';
import Logo from '../assets/img/icons8.svg'
import Nav from './Nav'
import { CgMenu } from "react-icons/cg";
import AccountBtns from './AccountBtns';


const Header = ({ setNavMobile }) => {
  return <header className='py-[30px] lg:pt-[60px]'
    data-aos="fade-down"
    data-aos-delay="900"
    data-aos-duration="2000"

  >
    <div className='mx-auto flex items-center justify-between'>
      <a href="#" className='flex items-center text-black text-lg ml-14'>
        <img src={Logo} alt="" />
        Next Develop
      </a>
      <div className='hidden lg:flex gap-x-[55px] mr-14'>
        <Nav />
      </div>
      <div
        onClick={() => setNavMobile(true)}
        className='lg:hidden cursor-pointer'>
        <CgMenu className='text-4xl' />
      </div>
    </div>
  </header>;
};

export default Header;
