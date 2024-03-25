import React from 'react';

const NewsletterForm = () => {
  return (
    <form className='flex-1 flex flex-col items-start w-full gap-y-6 lg:flex-row lg:gap-x-p10'>
      <input type="text" placeholder='メールアドレスをご入力ください'
        className='input text-base text-white placeholder:text-gray-200' />
      <button className='btn ml-5 bg-white text-darkblue px-8 hover:bg-white/70'>Subscribe</button>
    </form>
  );
};

export default NewsletterForm;
