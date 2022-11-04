import Image from 'next/image'
const filterIcon = require('../public/assets/filter_icon.png')
const downChevronIcon = require('../public/assets/down_chevron.png')


export default function FilterComponent() {
    return (
       
        <div className="bg-pureWhite w-[127.17px] h-[28px] flex items-center py-[4px] my-4 hover:scale-105 transition transform duration-200 ease-out justify-between cursor-pointer">
        <div className=" mx-2">
          <Image
            alt='filter'
            src={filterIcon}
            height='9'
            width='9.17'
            color='#4283E4'
          />
        </div>
        <p className="text-[16px] text-primaryBlue text-center">Add Filter</p>
        <div className=" mx-2 items-center">
          <Image
            alt='chevron'
            src={downChevronIcon}
            height='6'
            width='6'
            color='#4283E4'
          />
        </div>
      </div>
     
    );
}