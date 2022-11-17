import type { NextPage } from 'next'
import AuthButton from '../components/AuthButton'
import Image from 'next/image'
const Logo1 = require('../public/assets/logo-home.png')
import AuthInput from '../components/AuthInput'
import AuthDropdown from '../components/AuthDropdown'

const Index: NextPage = () => {
    return(
        <>
            <div className='nav bg-[#F4F4F4] h-[90px] flex items-center px-[150px] justify-between'>
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
        </>
    )
  }
  
  export default Index;
