import React from 'react';
import { HiChartBar } from "react-icons/hi";
import { GrSystem } from "react-icons/gr";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { RiRobot2Line } from "react-icons/ri";

const Stats = () => {
  return (
    <section
      data-aos="fade-up"
      data-aos-delay="1200"
      className='pt-24'>
      <div className='container mx-auto'>
        <div className=' flex flex-col gap-y-6 lg:flex-row lg:justify-between'>
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
        </div>
      </div>
    </section>
  );
};

export default Stats;
