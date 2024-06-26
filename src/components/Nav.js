import React from 'react';
import { navData } from '../data';

const Nav = () => {
  return (
    <nav className='flex items-center'>
      <ul className='flex gap-x-8'>
        {navData.map((item, index) => {
          return (
            <li className='text-lg border-b-2 border-transparent hover:border-white transition-all duration-500'
              key={index} >
              <a href={item.href}>{item.name}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
