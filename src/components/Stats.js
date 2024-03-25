import React from 'react';
import { GrSystem } from "react-icons/gr";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { RiRobot2Line } from "react-icons/ri";
import { IoMdPhonePortrait } from "react-icons/io";
import { SiInstagram } from "react-icons/si";
import { FaLine } from "react-icons/fa6";




const Stats = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-delay="1200"
      className='pt-24'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          <div className='flex items-center gap-x-6'>
            <div className='bg-gray-400 w-20 h-20 rounded-full flex justify-center items-center text-blue text-2xl lg:text-4xl'>
              <HiOutlineDesktopComputer />
            </div>
            <div>
              <div className='text-gray-200 text-2xl font-bold lg:text-[40px] lg:mb-2'>Web制作</div>
              <div className='text-gray-300'>description</div>
            </div>
          </div>
          <div className='flex items-center gap-x-6'>
            <div className='bg-gray-400 w-20 h-20 rounded-full flex justify-center items-center text-blue text-2xl lg:text-4xl'>
              <GrSystem />
            </div>
            <div>
              <div className='text-gray-200 text-2xl font-bold lg:text-[40px] lg:mb-2'>システム開発</div>
              <div className='text-gray-300'>description</div>
            </div>
          </div>
          <div className='flex items-center gap-x-6'>
            <div className='bg-gray-400 w-20 h-20 rounded-full flex justify-center items-center text-blue text-2xl lg:text-4xl'>
              <RiRobot2Line />
            </div>
            <div>
              <div className='text-gray-200 text-2xl font-bold lg:text-[40px] lg:mb-2'>AIコンサル</div>
              <div className='text-gray-300'>description</div>
            </div>
          </div>
          <div className='flex items-center gap-x-6'>
            <div className='bg-gray-400 w-20 h-20 rounded-full flex justify-center items-center text-blue text-2xl lg:text-4xl'>
              <IoMdPhonePortrait />
            </div>
            <div>
              <div className='text-gray-200 text-2xl font-bold lg:text-[40px] lg:mb-2'>SNSコンサル</div>
              <div className='text-gray-300'>description</div>
            </div>
          </div>
          <div className='flex items-center gap-x-6'>
            <div className='bg-gray-400 w-20 h-20 rounded-full flex justify-center items-center text-blue text-2xl lg:text-4xl'>
              <SiInstagram />
            </div>
            <div>
              <div className='text-gray-200 text-2xl font-bold lg:text-[40px] lg:mb-2'>インスタ運用</div>
              <div className='text-gray-300'>description</div>
            </div>
          </div>
          <div className='flex items-center gap-x-6'>
            <div className='bg-gray-400 w-20 h-20 rounded-full flex justify-center items-center text-blue text-2xl lg:text-4xl'>
              <FaLine />
            </div>
            <div>
              <div className='text-gray-200 text-2xl font-bold lg:text-[40px] lg:mb-2'>LINE構築代行</div>
              <div className='text-gray-300'>description</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
