import Image from "next/image"
const Logo1 = require('../../public/assets/logo-home.png')

function Brands() {
    return (
            <div className='cta bg-[#010A26] py-9'>
                <div>
                    <h2 className='text-pureWhite text-[30px] text-center font-semibold'>Brands that trust us</h2>
                </div>
                <div className='flex justify-around'>
                    <Image 
                    alt='brands'
                    src={Logo1}/>
                    <Image 
                    alt='brands'
                    src={Logo1}/>
                    <Image 
                    alt='brands'
                    src={Logo1}/>
                    <Image 
                    alt='brands'
                    src={Logo1}/>
                </div>
            </div>
    )
}

export default Brands