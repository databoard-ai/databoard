import Image from "next/image"
const Logo1 = require('../../public/assets/logo-home.png')

function Join() {
    return (
            <div className='flex justify-center bg-[#F4F4F4]'>
                <div className='w-[90%] md:w-[70%] my-9'>
                    <div>
                        <span className='block text-[32px] md:text-[40px] lg:text-[64px] text-center font-semibold'>Join Databoard to enjoy our 14-day Free trial</span>
                    </div>
                    <div className='flex gap-4 justify-center mt-9'>
                        <a href="#" className='btn flex border border-primaryBlue rounded-[4px] h-[50px] w-auto px-4 bg-primaryBlue duration-700'><span className='block m-auto text-pureWhite'>Get Started</span></a>
                        <a href="#" className='btn flex border border-primaryBlue rounded-[4px] h-[50px] w-auto px-8 duration-700'><span className='block m-auto text-primaryBlue'>  Log In   </span></a>
                    </div>
                </div>
            </div>
    )
}

export default Join