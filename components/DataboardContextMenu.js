import React from 'react'

function DataboardContextMenu({info, coordinates}) {
  return (
    <>
   
      <div className={'xl:h-[479px] xl:w-[439px] sm:h-[479px] sm:w-[439px] bg-pureWhite rounded-lg py-11 px-8 absolute top-'+(coordinates.y)+' left-'+(coordinates.x)}>
        <h2 className='text-white font-semibold'>
         Individual Contact
        </h2>
        <div className="flex flex-wrap">
            <div flex-auto><p className=" text-mainBlack font-semibold">Individual Contact</p></div>
            <div flex-auto><p className=" text-mainBlack text-lg font-semibold">X</p></div>
        </div>
     
      </div>
  </>
  )
}

export default DataboardContextMenu