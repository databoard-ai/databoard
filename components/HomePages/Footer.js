import Image from "next/image"
import Link from "next/link"
import Logo1 from '../../public/assets/databoard_assets/artboard_x75.png'

function Footer() {
    return (
       <div className="footer-container">
         <div className='footer relative md:fixed bg-[#010A26] px-5 text-pureWhite pt-9'>
            <div className="grid sm:grid-cols-5 mt-6">
                <div className="col-span-5 lg:col-span-1 mt-[-15px] mr-5 mb-5">
                    <Image 
                        className="m-auto lg:m-0 w-[200px]"
                        src={Logo1}
                        alt='logo'
                    />
                    <br />
                    <div className="">
                        <span className="block text-justify md:text-left text-lg leading-7">
                            {/* Databoard is a cloud-based data platform, that is providing organizations with the tools to acquire, sort, and analyze first-party user data from their audience, to generate insights for efficient management. */}
                        </span>
                    </div>
                </div>
                <div className="col-span-5 xsm:col-span-2 sm:col-span-3 lg:col-span-1 xsm:px-12">
                    <div className="mb-3">
                        <span className="block">Company</span>
                        <hr className="border-none w-10 h-[3px] bg-pureWhite"/>
                    </div>
                    <div>
                        <Link className="block text-[14px] mb-3" href="/about"><span>About US</span></Link>
                        <Link className="block text-[14px] mb-3" href="/pricing"><span>Pricing</span></Link>
                        <Link className="block text-[14px] mb-3" href="/about"><span>Team</span></Link>
                        <Link className="block text-[14px] mb-5" href="#"><span>Contact Us</span></Link>
                    </div>
                </div>
                <div className="col-span-5 xsm:col-span-3 sm:col-span-2 lg:col-span-1 xsm:px-12">
                    <div className="mb-3">
                        <span className="block">Products</span>
                        <hr className="border-none w-10 h-[3px] bg-pureWhite" />
                    </div>
                    <div>
                        <Link className="block text-[14px] mb-3" href="#"><span>Clocker</span></Link>
                        <Link className="block text-[14px] mb-5" href="#"><span>Databoard</span></Link>
                    </div>
                </div>
                <div className="col-span-5 xsm:col-span-2 sm:col-span-3 lg:col-span-1 xsm:px-12">
                    <div className="mb-3">
                        <span className="block">Legal</span>
                        <hr className="border-none w-10 h-[3px] bg-pureWhite" />
                    </div>
                    <div>
                        <Link className="block text-[14px] mb-3" href="#"><span>Terms & Conditions</span></Link>
                        <Link className="block text-[14px] mb-5" href="#"><span>Privacy Policy</span></Link>
                    </div>
                </div>
                <div className="col-span-5 xsm:col-span-3 sm:col-span-2 lg:col-span-1 xsm:px-12">
                    <div className="mb-3">
                        <span className="block">Useful Links</span>
                        <hr className="border-none w-10 h-[3px] bg-pureWhite" />
                    </div>
                    <div>
                        <Link className="block text-[14px] mb-3" href="/faqs"><span>FAQs</span></Link>
                        <Link className="block text-[14px] mb-3" href="/blog"><span>Blog</span></Link>
                    </div>
                </div>
                {/* <span className='block m-auto text-pureWhite'>footer</span> */}
            </div>
            <div></div>
        </div>
       </div>
    )
}

export default Footer