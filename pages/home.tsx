import type { NextPage } from 'next'
import AuthButton from '../components/AuthButton'
import Image from 'next/image'
const Logo1 = require('../public/assets/logo-home.png')
const Banner1 = require('../public/assets/banner-home.png')
import AuthInput from '../components/AuthInput'
import AuthDropdown from '../components/AuthDropdown'

const Index: NextPage = () => {
    return(
        <>
            <div className='nav bg-[#F4F4F4] h-[90px] flex items-center px-[150px] justify-between sticky top-0'>
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
        </>
    )
  }
  
  export default Index;
