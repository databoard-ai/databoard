import Image from 'next/image'

function SendBroadcastButton({ title,  color,  onPressed }) {
    //  const col = 'bg-'.concat(color)
    return (
        <div className="w-[262px] flex cursor-pointer h-[60px] hover:scale-105 transition transform duration-200 ease-out" onClick={onPressed}>
            <div className=" h-[60px] relative  w-[64px] border-r-2 border-r-pureWhite p-4 bg-primaryBlue rounded-l-lg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 2L11 13" stroke="#FEFEFE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="#FEFEFE" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <button className={`items-center  text-[#ffffff] transition-colors duration-150 bg-${color} w-[360px] h-[60px] hover:bg-primaryBlue text-lg rounded-r-lg font-montserrat `} onClick={onPressed}>{title}</button>
        </div>
    )

}

export default SendBroadcastButton