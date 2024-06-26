import React from 'react';
import Image from '../assets/img/sns.png';
import { FaRegArrowAltCircleRight } from "react-icons/fa";



const Hero = () => {
  return (
    <div className='container mx-auto'>
      <div className='flex flex-col items-center lg:flex-row'>
        <div className='flex-1'>
          {/* <div className='bg-white/10 p-1 mb-6 rounded-full pl-1 pr-3 max-w-[365px]'
            data-aos="fade-down"
            data-aos-delay="400"
          >
            <div className='flex items-center justify-between text-sm lg-text-base'>
              <div className='bg-white text-darkblue rounded-full font-medium py-1 px-4'>50% off</div>
              <div>只今セール中！</div>
            </div>
          </div> */}
          <h1
            data-aos="fade-down"
            data-aos-delay="500"
            className='text-[32px] lg:text-[64px] font-bold leading-tight mb-6'
          >
            Fastest & Secure Platform to development
          </h1>
          <p
            data-aos="fade-down"
            data-aos-delay="600"
            className='max-w-[440px] leading-tight mb-8 text-lg'>モダンな技術を使用したシステム開発なら我々にお任せください！
            幅広い技術を駆使して様々な面でサポートさせていただきます</p>
        </div>
        <div className='flex-1'
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <img src={Image} alt="" className='opacity-65' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
