import React from 'react';

const CalcForm = () => {
  return (
    <div className='w-full bg-white ma-w-[942px] max-auto rounded-2xl text-darkblue p-12 shadow-primary'>
      <form className='flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-12 lg:space-y-0'>
        <input className='input placeholder:text-darkblue' type="text" placeholder='ご予算を入力してください' />
        <select className='select'>
          <option value="">~10万</option>
          <option value="">~30万</option>
          <option value="">~50万</option>
          <option value="">~70万</option>
          <option value="">~100万</option>
          <option value="">100万~</option>
        </select>
        <button>送信</button>
      </form>
    </div>
  );
};

export default CalcForm;
