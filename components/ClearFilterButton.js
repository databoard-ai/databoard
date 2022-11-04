import React from 'react'
import Image from 'next/image'
const downChevronIcon = require('../public/assets/down_chevron.png')

function ClearFilterButton() {
  return (
    <div className="bg-pureWhite w-[127.17px] h-[28px] flex items-center py-[4px] my-4 hover:scale-105 transition transform duration-200 ease-out justify-between px-2 cursor-pointer">
      <p className="text-[16px] text-inactiveText text-center">Clear Filter</p>
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
  )
}

export default ClearFilterButton