import Image from 'next/image'

function SplitButton({title, icon, color}) {
//  const col = 'bg-'.concat(color)
    return (
        <div className="w-[262px] flex cursor-pointer h-[60px] hover:scale-105 transition transform duration-200 ease-out">
        <div className=" h-[60px] relative  w-[64px] border-r-2 border-r-pureWhite p-4 bg-primaryBlue rounded-l-lg">
            <Image
            src={icon}
            height='20px'
            width='20px'
            color='#ffff'
            />
        </div>
        <button className={`items-center  text-[#ffffff] transition-colors duration-150 bg-${color} w-[360px] h-[60px] hover:bg-primaryBlue text-lg rounded-r-lg font-montserrat `}>{title}</button>
    </div>
    )
  
}

export default SplitButton