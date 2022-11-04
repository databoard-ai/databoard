import React from 'react'
const downChevronIcon = require('../public/assets/down_chevron.png')
import Image from 'next/image'
function DownloadDropDown() {
  return (
    <div className="bg-pureWhite w-[164px] h-[60px] flex items-center py-[4px] my-1 rounded-r-lg hover:scale-105 transition transform duration-200 ease-out">
    <p className="text-[16px] text-inactiveText text-center px-2 font-normal">Download</p>
    <div className=" mx-2 flex hover:border-x-2 hover:border-y-2 hover:border-primaryBlue py-2 px-1">
      <p className="text-[14px] text-inactiveText text-center px-2 font-light">CSV</p>
      <div className='relative '>
        <Image
          alt='chevron'
          src={downChevronIcon}
          height='6'
          width='6'
          color='#4283E4'
          className=' align-top '
        />
      </div>
    </div>
  </div>
  )
}

export default DownloadDropDown