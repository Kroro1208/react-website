import React from 'react';
import Image from '../assets/img/system.png'

const Why = () => {
  return (
    <section className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center gap-x-8 lg:flex-row'>
          <div
            data-aos="fade-right"
            data-aos-offset="200"
            className='order-2 lg:order-1'>
            <img src={Image} alt="" />
          </div>
          <div
            data-aos="fade-left"
            data-aos-offset="200"
            className='order-1 lg:order-2 max-w-[480px]'>
            <h2 className='section-title whitespace-nowrap overflow-hidden'>システム開発事業</h2>
            <p className='section-subtitle'>Web制作</p>
            <p className='section-subtitle'>システム開発</p>
            <button className='btn px-6'>Learn more</button>
          </div>
        </div>
        <div className='flex flex-col items-center gap-x-8 lg:flex-row'>
          <div
            data-aos="fade-right"
            data-aos-offset="200"
            className='order-2 lg:order-1 max-w-[480px]'>
            <h2 className='section-title whitespace-nowrap overflow-hidden'>ビジネス及び<br />テクノロジー教育事業</h2>
            <p className='section-subtitle'>エンジニアリアル・プラクティス・アカデミー</p>
            <p className='section-subtitle'>SNS運用のノウハウを教える事業: 「SNSマスタリー・アカデミー」</p>
            <button className='btn px-6'>Learn more</button>
          </div>
          <div
            data-aos="fade-left"
            data-aos-offset="200"
            className='order-2 lg:order-1'>
            <img src={Image} alt="" />
          </div>
        </div>
        <div className='flex flex-col items-center gap-x-8 lg:flex-row'>
          <div
            data-aos="fade-right"
            data-aos-offset="200"
            className='order-2 lg:order-1'>
            <img src={Image} alt="" />
          </div>
          <div
            data-aos="fade-left"
            data-aos-offset="200"
            className='order-1 lg:order-2 max-w-[480px]'>
            <h2 className='section-title whitespace-nowrap overflow-hidden'>マーケティング事業</h2>
            <p className='section-subtitle'>SNSコンサル</p>
            <p className='section-subtitle'>インスタ運用</p>
            <p className='section-subtitle'>LINE構築代行</p>
            <p className='section-subtitle'>副業支援</p>
            <button className='btn px-6'>Learn more</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
