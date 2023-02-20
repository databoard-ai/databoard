import Image from "next/image"
const Logo1 = require('../../public/assets/Databoard Assets/Artboard 4@0.75x2.png')

function Footer() {
    return (
        <div className='footer h-[300px] bg-[#010A26] px-5 text-pureWhite pt-9'>
            <div className="grid grid-cols-4 mt-6">
                <div className="mt-[-15px] mr-5">
                    <Image 
                        className="m-auto w-[200px]"
                        src={Logo1}
                        alt='logo'
                    />
                    <br />
                    <div>
                        <span className="block text-center text-lg leading-7">
                            Databoard is a cloud-based data platform, thata is providing organizations with the tools to acquire, sort, and analyze first-party user data from their audience, to generate insights for efficient management.
                        </span>
                    </div>
                </div>
                <div className="px-12">
                    <div className="">
                        <span className="block">Company</span>
                        <hr className="border-none w-10 h-[5px] bg-pureWhite"/>
                    </div>
                    <br />
                    <div>
                        <a className="block text-[14px] mb-6" href="#"><span>About US</span></a>
                        <a className="block text-[14px] mb-6" href="#"><span>Pricing</span></a>
                        <a className="block text-[14px] mb-6" href="#"><span>Team</span></a>
                        <a className="block text-[14px] mb-6" href="#"><span>Contact Us</span></a>
                    </div>
                </div>
                <div className="px-12">
                    <div className="">
                        <span className="block">Products</span>
                        <hr className="border-none w-10 h-[5px] bg-pureWhite" />
                    </div>
                    <br />
                    <div>
                        <a className="block text-[14px] mb-6" href="#"><span>Clocker</span></a>
                        <a className="block text-[14px] mb-6" href="#"><span>Databoard</span></a>
                    </div>
                </div>
                <div className="px-12">
                    <div className="">
                        <span className="block">Company</span>
                        <hr className="border-none w-10 h-[5px] bg-pureWhite" />
                    </div>
                    <br />
                    <div>
                        <a className="block text-[14px] mb-6" href="#"><span>FAQs</span></a>
                        <a className="block text-[14px] mb-6" href="#"><span>Blog</span></a>
                        <a className="block text-[14px] mb-6" href="#"><span>Terms & Conditions</span></a>
                        <a className="block text-[14px] mb-6" href="#"><span>Privacy Policy</span></a>
                    </div>
                </div>
                {/* <span className='block m-auto text-pureWhite'>footer</span> */}
            </div>
            <div></div>
        </div>
    )
}

export default Footer