import type { NextPage } from 'next'
import AuthButton from '../components/AuthButton'
import Image from 'next/image'
const Logo1 = require('../public/assets/logo-home.png')
const Banner1 = require('../public/assets/banner-home.png')
const Iphone = require('../public/assets/iphone.png')
const Ellipses = require('../public/assets/ellipses.png')
const Playstore = require('../public/assets/playstore.png')
const Appstore = require('../public/assets/applestore.png')
const Cta2 = require('../public/assets/cta2-img.png')
const PhoneIco = require('../public/assets/phone-ico.png')
import AuthInput from '../components/AuthInput'
import AuthDropdown from '../components/AuthDropdown'

const Index: NextPage = () => {
    return(
        <>
            <div className='nav z-50 bg-[#F4F4F4] h-[90px] flex items-center px-[150px] justify-between sticky top-0'>
                <div className=''>
                    <a href='#'><Image
                    src={Logo1}
                    alt = 'Logo'
                    /></a>
                </div>
                <div className='flex'>
                    <a href="#" className='mx-[15px]'>Home</a>
                    <a href="#" className='mx-[15px]'>Board</a>
                    <a href="#" className='mx-[15px]'>Pricing</a>
                    <a href="#" className='mx-[15px]'>Resources</a>
                    <a href="#" className='mx-[15px]'>About Us</a>
                </div>
                <div className='flex gap-x-3'>
                    <a href="#" className='flex border border-primaryBlue rounded-[4px] h-[50px] w-[100px]'><span className='block m-auto text-primaryBlue'>Log In</span></a>
                    <a href="#" className='flex border border-primaryBlue rounded-[4px] h-[50px] w-[100px] bg-primaryBlue'><span className='block m-auto text-pureWhite'>Get Started</span></a>
                </div>
            </div>
            <div className='banner'>
                <div className='banner-content absolute top-[35%] left-[25%] text-center'>
                    <span className='block text-[64px] font-semibold text-pureWhite'>Empowering you in a <br/><span className='text-primaryBlue'>Data-driven</span> world</span>
                    <span className='block text-[18px] text-pureWhite'>Optimise performance and establish peak efficiency with Databoard. 
                        <br/>Let us help you get more out of your visitors without breaching privacy
                    </span>
                    <br />
                    <div>
                        <input className='w-[350px] h-[50px] pl-5' type="text" name="" id="" placeholder='Enter email for a 14 day enterprise trial'/>
                        <button className='bg-primaryBlue h-[50px] w-[150px] text-pureWhite rounded-r-sm'>Get started</button>
                    </div>
                </div>
                <Image
                className='h-[670px]'
                alt='banner'
                src={Banner1}
                />
            </div>
            <div className='cta grid grid-cols-2'>
                <div className='mt-[90px] mb-[49.5px] ml-[20px]'>
                    <Image 
                    className='float-left w-[400px] mb-[-250px]'
                    alt='ellipse'
                    src={Ellipses}/>
                    <center>
                    <Image 
                    className='relative top-[-35px] w-[350px]'
                    alt='phone'
                    src={Iphone}/>
                    </center>
                    <Image 
                    className='float-right w-[400px] mt-[-210px]'
                    alt='ellipse'
                    src={Ellipses}/>
                </div>
                <div className='mt-[140px] ml-[20px]'>
                    <span className='block text-[64px] text-primaryBlue font-semibold'>Meet clocker</span>
                    <span className='block text-[24px] text-black'>The easist way to create a digital footprint.</span>
                    <span className='block text-[16px]'>Clocker helps users to check into Access points, Events, and locations in Seconds.
                        <br />
                        Databoard works hand in hand with cloker, to drive efficieny with data. 
                    </span>
                    <div>
                        <Image 
                        className='inline'
                        alt='playstore'
                        src={Playstore}/>
                        <Image 
                        className='inline'
                        alt='applestore'
                        src={Appstore}/>
                    </div>
                </div>
            </div>
            <div className='cta grid grid-cols-2 justify-center bg-[#F4F4F4]'>
                <div className='pl-[20%]'>
                    <span className='block text-[50px] text-primaryBlue font-semibold mt-[100px]'>Contact Us  About 
                        <br />
                        Databoard Software
                    </span>
                    <span className='block text-[15px]'>We will love to help you optimize performance and establish peak efficiency with Databoard.  Let us help you get more out of your visitors without breaking privacy.</span>
                    <br />
                    <div className='flex gap-2'>
                        <a href="#" className='flex border border-primaryBlue rounded-[4px] h-[50px] w-auto px-1 bg-primaryBlue'>
                            <span className='m-auto text-pureWhite'>
                            <Image
                            className='inline mr-1'
                            alt='ico'
                            src={PhoneIco}/>
                            Call Sales
                            </span>
                        </a>
                        <a href="#" className='flex border border-primaryBlue rounded-[4px] h-[50px] w-[100px]'><span className='m-auto text-primaryBlue'>Get Started</span></a>
                    </div>
                </div>
                <div>
                    <div className='w-[50px] h-[50px] border-4 border-primaryBlue rounded-full relative top-[30px] left-[475px]'></div>
                    <Image
                    className='w-[500px]'
                    alt='cta2'
                    src={Cta2}/>
                    <div className='w-[50px] h-[50px] border-4 border-primaryBlue rounded-full relative bottom-[30px] left-[-20px]'></div>
                </div>
            </div>
        </>
    )
  }
  
  export default Index;
