function ContactDetailsModal({ visible, onClose}) {

    const handleOnClose = (e) => {
     if (e.target.id==="broadcast_msg_backdrop" || e.target.id==="close_btn") onClose();
    }
    if (!visible) return null
  
    return (
      <>
        <div id="broadcast_msg_backdrop" onClick={handleOnClose} className="fixed inset-0 bg-mainBlack bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
          <div className='xl:h-[479px] xl:w-[439px] sm:h-[479px] sm:w-[439px] bg-pureWhite rounded-lg py-11 px-8'>
            <h2 className='text-white font-semibold'>
             Individual Contact
            </h2>
            <div className="flex flex-wrap">
                <div flex-auto><p className=" text-mainBlack font-semibold">Individual Contact</p></div>
                <div flex-auto><p className=" text-mainBlack text-lg font-semibold">X</p></div>
            </div>
         
          </div>
        </div>
      </>
    )
  }
  
  export default ContactDetailsModal