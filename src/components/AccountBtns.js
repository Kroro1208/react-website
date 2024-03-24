import React from 'react';


const AccountBtns = () => {
  return (
    <div className='flex items-center font-medium'>
      <a href="#" className='transition'>Login</a>
      <span className='mx-6 text-white/50 font-thin'>|</span>
      <button className='btn h-[52px] text-base px-8'>Resister</button>
    </div>
  );
};

export default AccountBtns;
