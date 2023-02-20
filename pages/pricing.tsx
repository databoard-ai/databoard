import type { NextPage } from 'next'
import AuthButton from '../components/AuthButton'
import Image from 'next/image'
const Logo1 = require('../public/assets/logo-home.png')
const Checkblue = require('../public/assets/check-square-blue.png')
const Checkwhite = require('../public/assets/check-square.png')
import Navbar from '../components/HomePages/Navbar'
import Footer from '../components/HomePages/Footer'
import { connected } from 'process'
import Join from '../components/HomePages/Join'
import Brands from '../components/HomePages/Brands'
import { useEffect, useState } from 'react'

const Pricing: NextPage = () => {
    const [month, setMonth] = useState(true)

    let yearPrices  = [0,216,378,540,1080]
    let monthPrices  = [0,20,35,50,100]

    const changeDurationMonth = (e) => {
        let btns = document.getElementsByClassName('price-btn')
        for (let i = 0; i < btns.length; i++) {
            btns[i].classList.remove('active');
        }
        e.target.classList.add('active')

        let prices = document.getElementsByClassName('price')

        for (let i = 0; i < prices.length; i++) {
            prices[i].innerHTML = '$' + monthPrices[i].toString() + '/mo'
        }
    }

    const changeDurationYear = (e) => {
        let btns = document.getElementsByClassName('price-btn')
        for (let i = 0; i < btns.length; i++) {
            btns[i].classList.remove('active');
        }
        e.target.classList.add('active')

        let prices = document.getElementsByClassName('price')

        for (let i = 0; i < prices.length; i++) {
        prices[i].innerHTML = '$' + yearPrices[i].toString() + '/mo'
        }
    }

    useEffect(()=>{
    })
    return(
        <>
            <Navbar/>
            <div className='mt-12'>
                <span className='block text-center text-[24px] text-primaryBlue font-semibold'>Our Pricing</span>
                <span className='block text-center text-[40px] font-semibold mt-8'>Choose the 
                <span className='text-primaryBlue'> Plan</span> that suits your Organization</span>
                <span className='block text-center text-[20px]'>Databoard fits perfectly for organizations big and small. <br/>Regardless of your budget</span>
                <div className='flex justify-center mt-12'>
                    <div className='border border-primaryBlue rounded-sm p-1'>
                        <button className='price-btn active' onClick={(e)=>changeDurationMonth(e)}>Monthly</button>
                        <button className='price-btn ml-2' onClick={(e)=>changeDurationYear(e)}>Yearly</button>
                    </div>
                </div>
                <span className='block text-center mt-2 text-[20px]'>Enjoy a 10 % discount on any annual subscription</span>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 md:justify-around my-12'>
                <div className='w-[230px] m-auto sm:m-none mb-3 border border-[#C3C3C3] rounded-sm p-5 pb-2'>
                    <div className=''>
                        <span className='block text-center text-primaryBlue'>Free plan</span>
                        <span className='block text-center font-bold text-[40px] mt-5 price'>$0/mo</span>
                    </div>
                    <hr className='w-[95%] m-auto my-3 text-[#C3C3C3]' />
                    <div className=''>
                        <div className='flex items-center my-3'>
                            <span className='ml-4 text-[15px]'>What you get</span>
                        </div>
                        <div className='flex items-center my-3'>
                            <Image className='w-[20px]' alt='check' src={Checkblue} />
                            <span className='ml-4 text-[15px]'>Access to Analytics</span>
                        </div>
                        <div className='flex items-center my-3'>
                            <Image className='w-[20px]' alt='check' src={Checkblue} />
                            <span className='ml-4 text-[15px]'>4 tags/ Month</span>
                        </div>
                        <div className='flex items-center my-3'>
                            <Image className='w-[20px]' alt='check' src={Checkblue} />
                            <span className='ml-4 text-[15px]'>One Filter permit</span>
                        </div>
                        <div className='flex items-center my-3'>
                            <Image className='w-[20px]' alt='check' src={Checkblue} />
                            <span className='ml-4 text-[15px]'>Up to 50 clocks</span>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <button className='btn flex mx-auto my-0 border border-primaryBlue rounded-[4px] h-[50px] w-[100px]  bg-primaryBlue'><span className='block m-auto text-pureWhite'>Get Started</span></button>
                    </div>
                </div>
                <div className='w-[230px] m-auto sm:m-none mb-3 border border-[#C3C3C3] rounded-sm bg-primaryBlue p-5 pb-2'>
                    <div className=''>
                        <span className='block text-center text-pureWhite'>Free plan</span>
                        <span className='block text-center font-bold text-[40px] text-pureWhite mt-5 price'>$20/mo</span>
                    </div>
                    <hr className='w-[95%] m-auto my-3 text-[#C3C3C3]' />
                    <div className=''>
                        <div className='flex items-center my-3'>
                            <span className='ml-4 text-[15px] text-pureWhite'>What you get</span>
                        </div>
                        <div className='flex items-center my-3'>
                            <Image className='w-[20px]' alt='check' src={Checkwhite} />
                            <span className='ml-4 text-[15px] text-pureWhite'>Access to Analytics</span>
                        </div>
                        <div className='flex items-center my-3'>
                            <Image className='w-[20px]' alt='check' src={Checkwhite} />
                            <span className='ml-4 text-[15px] text-pureWhite'>4 tags/ Month</span>
                        </div>
                        <div className='flex items-center my-3'>
                            <Image className='w-[20px]' alt='check' src={Checkwhite} />
                            <span className='ml-4 text-[15px] text-pureWhite'>One Filter permit</span>
                        </div>
                        <div className='flex items-center my-3'>
                            <Image className='w-[20px]' alt='check' src={Checkwhite} />
                            <span className='ml-4 text-[15px] text-pureWhite'>Up to 50 clocks</span>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <button className='btn flex mx-auto my-0 border border-primaryBlue rounded-[4px] h-[50px] w-[100px]  bg-pureWhite'><span className='block m-auto text-primaryBlue'>Get Started</span></button>
                    </div>
                </div>
                <div className='w-[230px] m-auto sm:m-none mb-3 border border-[#C3C3C3] rounded-sm p-5 pb-2'>
                    <div className=''>
                        <span className='block text-center text-primaryBlue'>Standard plan</span>
                        <span className='block text-center font-bold text-[40px] mt-5 price'>$35/mo</span>
                    </div>
                    <hr className='w-[95%] m-auto my-3 text-[#C3C3C3]' />
                    <div className=''>
                        <div className='flex items-center my-3'>
                            <span className='ml-4 text-[15px]'>What you get</span>
                        </div>
                        <div className='flex items-center my-3'>
                            <Image className='w-[20px]' alt='check' src={Checkblue} />
                            <span className='ml-4 text-[15px]'>Access to Analytics</span>
                        </div>
                        <div className='flex items-center my-3'>
                            <Image className='w-[20px]' alt='check' src={Checkblue} />
                            <span className='ml-4 text-[15px]'>Unlimited tags</span>
                        </div>
                        <div className='flex items-center my-3'>
                            <Image className='w-[20px]' alt='check' src={Checkblue} />
                            <span className='ml-4 text-[15px]'>All Filter permit</span>
                        </div>
                        <div className='flex items-center my-3'>
                            <Image className='w-[20px]' alt='check' src={Checkblue} />
                            <span className='ml-4 text-[15px]'>Up to 5k clocks</span>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <button className='btn flex mx-auto my-0 border border-primaryBlue rounded-[4px] h-[50px] w-[100px]  bg-primaryBlue'><span className='block m-auto text-pureWhite'>Get Started</span></button>
                    </div>
                </div>
                <div className='w-[230px] m-auto sm:m-none mb-3 border border-[#C3C3C3] rounded-sm p-5 pb-2 bg-primaryBlue'>
                    <div className=''>
                        <span className='block text-center text-pureWhite'>Free plan</span>
                        <span className='block text-center font-bold text-[40px] text-pureWhite mt-5 price'>$50/mo</span>
                    </div>
                    <hr className='w-[95%] m-auto my-3 text-[#C3C3C3]' />
                    <div className=''>
                        <div className='flex items-center my-3'>
                            <span className='ml-4 text-[15px] text-pureWhite'>What you get</span>
                        </div>
                        <div className='flex items-center my-3'>
                            <Image className='w-[20px]' alt='check' src={Checkwhite} />
                            <span className='ml-4 text-[15px] text-pureWhite'>Access to Analytics</span>
                        </div>
                        <div className='flex items-center my-3'>
                            <Image className='w-[20px]' alt='check' src={Checkwhite} />
                            <span className='ml-4 text-[15px] text-pureWhite'>Unlimited tags</span>
                        </div>
                        <div className='flex items-center my-3'>
                            <Image className='w-[20px]' alt='check' src={Checkwhite} />
                            <span className='ml-4 text-[15px] text-pureWhite'>All Filter permit</span>
                        </div>
                        <div className='flex items-center my-3'>
                            <Image className='w-[20px]' alt='check' src={Checkwhite} />
                            <span className='ml-4 text-[15px] text-pureWhite'>Up to 20k clocks</span>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <button className='btn flex mx-auto my-0 border border-primaryBlue rounded-[4px] h-[50px] w-[100px]  bg-pureWhite'><span className='block m-auto text-primaryBlue'>Get Started</span></button>
                    </div>
                </div>
                <div className='w-[230px] m-auto sm:m-none mb-3 border border-[#C3C3C3] rounded-sm p-5 pb-2'>
                    <div className=''>
                        <span className='block text-center text-primaryBlue'>Enterprise plan</span>
                        <span className='block text-center font-bold text-[40px] mt-5 price'>$100/mo</span>
                    </div>
                    <hr className='w-[95%] m-auto my-3 text-[#C3C3C3]' />
                    <div className=''>
                        <div className='flex items-center my-3'>
                            <span className='ml-4 text-[15px]'>What you get</span>
                        </div>
                        <div className='flex items-center my-3'>
                            <Image className='w-[20px]' alt='check' src={Checkblue} />
                            <span className='ml-4 text-[15px]'>Access to Analytics</span>
                        </div>
                        <div className='flex items-center my-3'>
                            <Image className='w-[20px]' alt='check' src={Checkblue} />
                            <span className='ml-4 text-[15px]'>Unlimited tags</span>
                        </div>
                        <div className='flex items-center my-3'>
                            <Image className='w-[20px]' alt='check' src={Checkblue} />
                            <span className='ml-4 text-[15px]'>Unlimited clocks</span>
                        </div>
                        <div className='flex items-center my-3'>
                            <Image className='w-[20px]' alt='check' src={Checkblue} />
                            <span className='ml-4 text-[15px]'>Up to 50 clocks</span>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <button className='btn flex mx-auto my-0 border border-primaryBlue rounded-[4px] h-[50px] w-[100px]  bg-primaryBlue'><span className='block m-auto text-pureWhite'>Get Started</span></button>
                    </div>
                </div>
            </div>
            {/* <Brands/> */}
            <Join/>
            <Footer />
        </>
    )
  }
  
  export default Pricing;
