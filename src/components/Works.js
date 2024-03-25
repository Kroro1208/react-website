import React, { useState } from 'react';
import { works } from '../data';
import { FaArrowRight } from "react-icons/fa6";



const Works = () => {
  const [itemName, setItemName] = useState('ECサイト');
  return (
    <section className='section lg:pt-[320px] bg-gradient-to-b from-gray-500 to-slate-200 text-darkblue lg:-mt-[320px]'>
      <div className='container mx-auto'>
        <h2
          data-aos="fade-up"
          data-aos-offset="100"
          className='section-title text-center mb-16'>開発実績</h2>
        <div
          data-aos="fade-up"
          data-aos-offset="150"
          className='flex flex-col gap-[45px] lg:flex-row'>
          {works.map((work, index) => {
            const { image, name, description } = work;
            return (
              <div
                onClick={() => setItemName(name)}
                className={`${name === itemName ? 'bg-red-400 text-white' : 'bg-withe'}
                w-full rounded-2xl py-12 px-6 shadow-primary cursor-pointer transition duration-300`}
                key={index}>

                <div className='flex flex-col justify-center items-center'>
                  <img src={image} alt="" className='w-5/12 mb-12' />
                  <div className='mb-4 flex items-center gap-x-2'>
                    <div className='text-[32px] font-bold'>{name}</div>
                  </div>
                  <p className='mb\6 text-center'>{description}</p>
                  <button
                    className={`${name === itemName ? 'text-white bg-blue-500 hover:bg-blue-500 border-none pl-8 pr-6 gap-x-3' : 'text-blue w-14'}
                    mt-5 border-2 border-gray-400 rounded-full h-14 flex justify-center items-center`}
                  >
                    {name === itemName && <div className='text-lg font-medium'>開発実績を見る</div>}
                    <FaArrowRight className={`${name === itemName ? 'text-2xl' : 'text-3xl'}`} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Works;
