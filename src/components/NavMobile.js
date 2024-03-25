import React from 'react';
import { navData } from '../data';
import { IoMdClose } from "react-icons/io";



const NavMobile = ({ setNavMobile }) => {
  return (
    <nav className='lg:hidden bg-gray-800 opacity-85 h-full top-0 bottom-0 w-80 flex justify-center items-center'>
      <div
        onClick={() => setNavMobile(false)}
        className='absolute top-2 left-2 cursor-pointer'>
        <IoMdClose className='text-3xl' />
      </div>
      <ul className='text-xl flex flex-col gap-y-8 cursor-pointer'>
        {navData.map((item, index) => {
          return (
            <li key={index}>
              <a href={item.href}>{item.name}</a>
            </li>
          )
        })}
      </ul>
    </nav>
  );
};

export default NavMobile;
