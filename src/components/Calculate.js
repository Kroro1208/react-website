import React from 'react';
import CalcForm from './CalcForm';

const Calculate = () => {
  return (
    <section className='section'>
      <div className='container mx-auto'>
        <div className='text-center'>
          <h2
            data-aos="fade-up"
            data-aos-offset="400"
            className='section-title'>開発実績</h2>
          <p
          data-aos="fade-up"
          data-aos-offset="450"
          className='section-subtitle text-lg mb-16 max-w-[622px] mx-auto'>
            クライアントファーストでご予算内で最大限のパフォーマンスを発揮いたします
          </p>
        </div>
      </div>
      <CalcForm />
    </section>
  );
};

export default Calculate;
