import React from 'react'

function MessageModal({ visible, onClose}) {

  const handleOnClose = (e) => {
   if (e.target.id==="broadcast_msg_backdrop" || e.target.id==="close_btn") onClose();
  }
  if (!visible) return null

  return (
    <>
      <div id="broadcast_msg_backdrop" onClick={handleOnClose} className="fixed inset-0 bg-mainBlack bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
        <div className='h-[624px] w-[533px] bg-pureWhite rounded-lg py-11 px-8'>
          <h2 className='text-white font-semibold'>
            Send message to:
          </h2>
          <div className='py-2 items-center relative w-max mx-auto h-12 grid grid-cols-2 px-[3xl] overflow-hidden transition' role='tablist'>
          <button
            role="tab"
            aria-selected="true"
            aria-controls="panel-1"
            id="tab-1"
            tabindex="0"
            class="relative block h-10 px-6 tab rounded-full"
          >
            <span class="text-gray-800">First Tab</span>
          </button>
          <button
            role="tab"
            aria-selected="false"
            aria-controls="panel-2"
            id="tab-2"
            tabindex="-1"
            class="relative block h-10 px-6 tab rounded-full"
          >  <span class="text-gray-800">Second Tab</span>
          </button>
          </div>
          <div class="mt-6 relative rounded-3xl bg-purple-50">
          <div
            role="tabpanel"
            id="panel-1"
            class="tab-panel p-6 transition duration-300"
          >
            <h2 class="text-xl font-semibold text-gray-800">First tab panel</h2>
            <p class="mt-4 text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas dolores voluptate temporibus, atque ab eos, delectus at ad hic voluptatem veritatis iure, nulla voluptates quod nobis doloremque eaque! Perferendis, soluta.</p>
          </div>
          <div
            role="tabpanel"
            id="panel-2"
            class="absolute top-0 invisible opacity-0 tab-panel p-6 transition duration-300"
          >
            <h2 class="text-xl font-semibold text-gray-800">Second tab panel</h2>
            <p class="mt-4 text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas dolores voluptate temporibus, atque ab eos, delectus at ad hic voluptatem veritatis iure, nulla voluptates quod nobis doloremque eaque! Perferendis, soluta.</p>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MessageModal