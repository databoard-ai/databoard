import Image from 'next/image'
const filterIcon = require('../public/assets/filter_icon.png')
const downChevronIcon = require('../public/assets/down_chevron.png')


export default function FilterComponent() {
  return (

    <div className="bg-pureWhite w-[135.17px] h-[28px] flex items-center py-[4px] my-4 hover:scale-105 transition transform duration-200 ease-out justify-between cursor-pointer">
      <div className=" mx-2">
        
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.1667 4.5H4L7.66667 9.23V12.5L9.5 13.5V9.23L13.1667 4.5Z" stroke="#4283E4" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
      <p className="text-[16px] text-primaryBlue text-center">Add Filter</p>
      <div className=" mx-2 items-center">
        <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.16666 4.5L6.16666 7.5L9.16666 4.5" stroke="#4283E4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
    </div>

  );
}