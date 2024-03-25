import React from 'react';
import NewsletterForm from './NewsletterForm';

const Newsletter = () => {
  return (
    <section className='py-[40px] lg:py-[88px] bg-newsletter bg-cover'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row items-center justify-between bg-blue p-12 rounded-2xl lg:bg-newsletterBox lg:bg-no-repeat lg:h-[216px]'>
          <div className='flex-1 w-full'>
            <h3 className='mb-4'>メール配信</h3>
            <p className='max-w-[420px] mb-8'>無料でお得な情報が欲しい方はこちらからご登録ください</p>
          </div>
          <NewsletterForm />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
