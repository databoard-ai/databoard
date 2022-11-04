import React, { useState } from 'react'
import SendBroadcastButton from './buttons/SendBroadcastButton'
import DownloadDropDown from './DownloadDropDown'
import FilterDropDown from './FilterDropDown'
import ClearFilterButton from './ClearFilterButton'


function DataOptionsSection() {
    const [showModal,setShowModal]=useState(false)
    
    const handleOnClose = ()=>setShowModal(false)

    return (
        <>
            <div className="w-screen h-[120px] flex py-[30px] px-[24px] justify-between">

                <div className='flex justify-between items-center'>

                    <div className='mr-2'>
                        <FilterDropDown />
                    </div>
                    <div className='mr-2'>
                        <ClearFilterButton />
                    </div>
                </div>
                <div className='flex justify-between items-center'>
                    <div className=' mr-4'>
                        <SendBroadcastButton title="Broadcast Message"  color="primaryBlue" onClose={handleOnClose} onClick={()=>setShowModal(true)}/>
                    </div>

                    <DownloadDropDown />
                </div>

             

            </div>
        </>
    )
}

export default DataOptionsSection