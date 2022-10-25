import Image from 'next/image'

function SplitButton(title, icon, color) {
asset = "assets/"+icon
col = 'bg-'+color
    return 
    <div className="w-[-206px]">
        <div className=" h-[60px]">
            <Image
            src={asset}
            height='20px'
            width='20px'
            />
        </div>
        <button className=" px-5 m-2 text-[#ffffff] transition-colors duration-150 bg-primaryBlue rounded-lg w-[360px] h-[60px] hover:bg-primaryBlue text-lg">{title}</button>
    </div>
}