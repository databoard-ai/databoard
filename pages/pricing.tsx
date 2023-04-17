

    import type { NextPage } from 'next'
    import Image from 'next/image'
    const Checkblue = require('../public/assets/check-square-blue.png')
    const Checkwhite = require('../public/assets/check-square.png')
    import Navbar from '../components/HomePages/Navbar'
    import Footer from '../components/HomePages/Footer'
    import Join from '../components/HomePages/Join'
    import { useEffect, useState } from 'react'
    
    type Props = {
        value: string;
    }
    
    
    
const Pricing: NextPage = () => {
    
      
    
        const [freePlan, setFreePlan] = useState("$0/mo")
        const [starterPlan, setStarterPlan] = useState("$20/mo")
        const [standardPlan, setStandardPlan] = useState("$35/mo")
        const [proPlan, setProPlan] = useState("$50/mo")
        const [entPlan, setEntPlan] = useState("$100/mo")
        const [month, setMonth] = useState(true)
    
    
    
        const changeDurationMonth = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            let btns = document.getElementsByClassName('price-btn')
            for (let i = 0; i < btns.length; i++) {
                btns[i].classList.remove('active');
            }
            const target = e.target as HTMLElement
            target.classList.add('active')
            setFreePlan("$0/mo");
            setStarterPlan("$20/mo");
            setStandardPlan("$35/mo");
            setProPlan("$50/mo");
            setEntPlan("$100/mo");
    
        }
    
        const changeDurationYear = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            let btns = document.getElementsByClassName('price-btn')
            for (let i = 0; i < btns.length; i++) {
                btns[i].classList.remove('active');
            }
            const target = e.target as HTMLElement
            target.classList.add('active')
            setFreePlan("$0/yr");
            setStarterPlan("$"+((20 * 12) - (20 * 12) * 0.1).toString() + "/yr");
            setStandardPlan("$"+((35 * 12) - (35 * 12) * 0.1).toString() + "/yr");
            setProPlan("$"+((50 * 12) - (50 * 12) * 0.1).toString() + "/yr");
            setEntPlan("$"+((100 * 12) - (100 * 12) * 0.1).toString() + "/yr");
    
        }
    
        useEffect(() => {
        })
        return (
            <>
                <Navbar />
                <div className='mt-12'>
                    <span className='block text-center text-[24px] text-primaryBlue font-semibold'>Our Pricing</span>
                    <span className='block text-center text-[40px] font-semibold mt-8'>Choose the
                        <span className='text-primaryBlue'> Plan</span> that suits your Organization</span>
                    <span className='block text-center text-[20px]'>Databoard fits perfectly for organizations big and small. <br />Regardless of your budget</span>
                    <div className='flex justify-center mt-12'>
                        <div className='border border-primaryBlue rounded-sm p-1'>
                            <button className='price-btn active ease-in-out duration-1000 rounded-lg' onClick={(e) => changeDurationMonth(e)}>Monthly</button>
                            <button className='price-btn ml-2 ease-in-out duration-1000 rounded-lg' onClick={(e) => changeDurationYear(e)}>Yearly</button>
                        </div>
                    </div>
                    <span className='block text-center mt-2 text-[20px]'>Enjoy a 10 % discount on any annual subscription</span>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  my-12'>
                    <div className='w-[230px] m-auto sm:m-none mb-3 border border-[#C3C3C3] rounded-sm p-5 pb-2 py-12 px-5'>
                        <div className=''>
                            <span className='block text-center text-primaryBlue'>Free plan</span>
                            <span className='block text-center font-bold text-[40px] mt-5 price'>{freePlan}</span>
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
                            <button className='btn flex mx-auto my-3 py-3 px-5 border border-primaryBlue rounded-[4px] duration-500  w-auto]  bg-primaryBlue'><span className='block m-auto text-pureWhite'>Get Started</span></button>
                        </div>
                    </div>
                    <div className='w-[230px] m-auto sm:m-none mb-3 border border-[#C3C3C3] rounded-sm bg-primaryBlue p-5 pb-2 py-12'>
                        <div className=''>
                            <span className='block text-center text-pureWhite'>Starter plan</span>
                            <span className='block text-center font-bold text-[40px] text-pureWhite mt-5 price ease-in-out duration-1000'>{starterPlan}</span>
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
                                <span className='ml-4 text-[15px] text-pureWhite'>20 tags/ Month</span>
                            </div>
                            <div className='flex items-center my-3'>
                                <Image className='w-[20px]' alt='check' src={Checkwhite} />
                                <span className='ml-4 text-[15px] text-pureWhite'>One Filter permit</span>
                            </div>
                            <div className='flex items-center my-3'>
                                <Image className='w-[20px]' alt='check' src={Checkwhite} />
                                <span className='ml-4 text-[15px] text-pureWhite'>Up to 1k clocks</span>
                            </div>
                        </div>
                        <div className='mt-5 '>
                            <button className='btn flex mx-auto my-3 py-3 duration-500 px-5 border border-primaryBlue rounded-[4px] w-auto  bg-pureWhite'><span className='block m-auto text-primaryBlue'>Get Started</span></button>
                        </div>
                    </div>
                    <div className='w-[230px] m-auto sm:m-none mb-3 border border-[#C3C3C3] py-12 rounded-sm p-5 pb-2'>
                        <div className=''>
                            <span className='block text-center text-primaryBlue'>Standard plan</span>
                            <span className='block text-center font-bold text-[40px] mt-5 price'>{standardPlan}</span>
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
                            <button className='btn flex mx-auto my-3 py-3 border border-primaryBlue px-5 rounded-[4px] w-auto  bg-primaryBlue duration-500'><span className='block m-auto text-pureWhite'>Get Started</span></button>
                        </div>
                    </div>
                    <div className='w-[230px] m-auto sm:m-none mb-3 py-12 border border-[#C3C3C3] rounded-sm p-5 pb-2 bg-primaryBlue'>
                        <div className=''>
                            <span className='block text-center text-pureWhite'>Pro plan</span>
                            <span className='block text-center font-bold text-[40px] text-pureWhite mt-5 price'>{proPlan}</span>
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
                            <button className='btn flex mx-auto my-3 py-3 border duration-500 border-primaryBlue rounded-[4px] w-auto px-5  bg-pureWhite'><span className='block m-auto text-primaryBlue'>Get Started</span></button>
                        </div>
                    </div>
                    <div className='w-[230px] m-auto sm:m-none mb-3 py-12 border border-[#C3C3C3] rounded-sm p-5 pb-2'>
                        <div className=''>
                            <span className='block text-center text-primaryBlue'>Enterprise plan</span>
                            <span className='block text-center font-bold text-[40px] mt-5 price'>{entPlan}</span>
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
                                <span className='ml-4 text-[15px]'>All Filter Permit</span>
                            </div>
                            <div className='flex items-center my-3'>
                                <Image className='w-[20px]' alt='check' src={Checkblue} />
                                <span className='ml-4 text-[15px]'>Unlimited clocks</span>
                            </div>
                        </div>
                        <div className='mt-5'>
                            <button className='btn flex mx-auto my-3 py-3 border border-primaryBlue rounded-[4px] w-auto px-5  bg-primaryBlue duration-500'><span className='block m-auto text-pureWhite'>Get Started</span></button>
                        </div>
                    </div>
                </div>
                {/* <Brands/> */}
                <Join />
                <Footer />
            </>
        )
    }
    
    export default Pricing;
    