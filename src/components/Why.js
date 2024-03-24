import React from 'react';
import Image from '../assets/img/system.png'

const Why = () => {
  return (
    <section className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center gap-x-8 lg:flex-row'>
          <div
            data-aos="fade-right"
            data-aos-offset="400"
            className='order-2 lg:order-1'>
            <img src={Image} alt="" />
          </div>
          <div
            data-aos="fade-left"
            data-aos-offset="400"
            className='order-1 lg:order-2 max-w-[480px]'>
            <h2 className='section-title'>私たちが選ばれる理由</h2>
            <p className='section-subtitle'>モダンなスキルを使用し、保守性が高くユーザーフレンドリーなサービスを提供しています</p>
            <button className='btn px-6'>Learn more</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
