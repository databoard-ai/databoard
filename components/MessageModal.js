import React from 'react'
import MessageTab from './MessageTab'

function MessageModal({ visible, onClose}) {

  const handleOnClose = (e) => {
   if (e.target.id==="broadcast_msg_backdrop" || e.target.id==="close_btn") onClose();
  }
  if (!visible) return null

  return (
    <>
      <div id="broadcast_msg_backdrop" onClick={handleOnClose} className="fixed inset-0 bg-mainBlack bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
        <div className='xl:h-[624px] xl:w-[533px] sm:h-[624px] sm:w-[533px] bg-pureWhite rounded-lg py-11 px-8'>
          <h2 className='text-white font-semibold'>
            Send message to:
          </h2>
       <MessageTab/>
        </div>
      </div>
    </>
  )
}

export default MessageModal