import Image from "next/image"
const Logo1 = require('../../public/assets/logo-home.png')

function Join() {
    return (
            <div className='flex justify-center'>
                <div className='w-[70%] my-9'>
                    <div>
                        <span className='block text-[64px] text-center'>Join Databoard to enjoy our 14-day Free trial</span>
                    </div>
                    <div className='flex gap-3 justify-center mt-9'>
                        <a href="#" className='flex border border-primaryBlue rounded-[4px] h-[50px] w-[100px] bg-primaryBlue'><span className='block m-auto text-pureWhite'>Get Started</span></a>
                        <a href="#" className='flex border border-primaryBlue rounded-[4px] h-[50px] w-[100px]'><span className='block m-auto text-primaryBlue'>Log In</span></a>
                    </div>
                </div>
            </div>
    )
}

export default Join