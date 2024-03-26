import React from 'react';
import Image from '../assets/img/system.png'
import { MdOutlineInsertPageBreak } from "react-icons/md";
import { GrSystem } from "react-icons/gr";
import { SiHtmlacademy } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { ImInstagram } from "react-icons/im";
import { FaLine } from "react-icons/fa";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { Link } from 'react-router-dom';


const Why = () => {
  return (
    <section className='section'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center gap-x-8 lg:flex-row'>
          <div
            data-aos="fade-right"
            data-aos-offset="200"
            className='order-1'>
            <img src={Image} alt="" />
          </div>
          <div
            data-aos="fade-left"
            data-aos-offset="200"
            className='order-2 max-w-[480px] flex flex-col gap-3'>
            <h2 className='section-title whitespace-nowrap overflow-hidden'>システム開発事業</h2>
            <div className='flex gap-2 items-center'>
              <MdOutlineInsertPageBreak className='text-2xl' />
              <p className='text-2xl lg:text-[20px] font-medium'>Web制作</p>
            </div>
            <div className='flex gap-2 items-center'>
              <GrSystem className='text-xl' />
              <p className='text-2xl lg:text-[20px] font-medium'>システム開発</p>
            </div>
            <Link to={'/systems'}>
              <button className='bg-blue h-[60px] px-4 rounded-full mt-5 hover:bg-blue-400'>Learn more</button>
            </Link>
          </div>
        </div>
        <div className='flex flex-col items-center gap-x-8 lg:flex-row'>
          <div
            data-aos="fade-right"
            data-aos-offset="200"
            className='order-2 lg:order1 max-w-[480px] flex flex-col gap-3'>
            <h2 className='section-title whitespace-nowrap overflow-hidden'>ビジネス及びテクノロジー教育事業</h2>
            <div className='flex gap-2 items-center'>
              <SiHtmlacademy className='text-2xl' />
              <p className='text-2xl lg:text-[20px] font-medium'>エンジニアリアル・プラクティス・アカデミー</p>
            </div>
            <div className='flex gap-3 items-center'>
              <FaInstagram className='text-3xl' />
              <p className='text-2xl lg:text-[20px] font-medium'>SNS運用のノウハウを教える事業: 「SNSマスタリー・アカデミー」</p>
            </div>
            <Link to={'/business'}>
              <button className='bg-blue h-[60px] w-72 px-4 rounded-full mt-5 hover:bg-blue-400'>Learn more</button>
            </Link>
          </div>
          <div
            data-aos="fade-left"
            data-aos-offset="200"
            className='order-1 lg:order-2'>
            <img src={Image} alt="" />
          </div>
        </div>

        <div className='flex flex-col items-center gap-x-8 lg:flex-row'>
          <div
            data-aos="fade-right"
            data-aos-offset="200"
            className='order-1'>
            <img src={Image} alt="" />
          </div>
          <div
            data-aos="fade-left"
            data-aos-offset="200"
            className='order-2 max-w-[480px] flex flex-col gap-3'>
            <h2 className='section-title whitespace-nowrap overflow-hidden'>マーケティング事業</h2>
            <div className='flex gap-2 items-center'>
              <MdOutlinePhoneIphone className='text-2xl' />
              <p className='text-2xl lg:text-[20px] font-medium'>SNSコンサル</p>
            </div>
            <div className='flex gap-2 items-center'>
              <ImInstagram className='text-2xl' />
              <p className='text-2xl lg:text-[20px] font-medium'>インスタ運用</p>
            </div>
            <div className='flex gap-2 items-center'>
              <FaLine className='text-2xl' />
              <p className='text-2xl lg:text-[20px] font-medium'>LINE構築代行</p>
            </div>
            <div className='flex gap-2 items-center'>
              <FaMoneyBillTrendUp className='text-2xl' />
              <p className='text-2xl lg:text-[20px] font-medium'>副業支援</p>
            </div>
            <Link to={'/marketing'}>
              <button className='bg-blue h-[60px] w-72 px-4 rounded-full mt-5 hover:bg-blue-400'>Learn more</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
