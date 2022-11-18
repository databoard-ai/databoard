import type { NextPage } from 'next'
import AuthButton from '../components/AuthButton'
import Image from 'next/image'
const Blog1 = require('../public/assets/blog1.png')
const Blog2 = require('../public/assets/blog2.png')
const Blog3 = require('../public/assets/blog3.png')
import Navbar from '../components/HomePages/Navbar'
import Footer from '../components/HomePages/Footer'
import { connected } from 'process'

const Blogs: NextPage = () => {
    return(
        <>
            <Navbar active='resources'/>
            <div className='blogs px-12 my-12'>
                <div className='header'>
                    <span className='block text-[50px] text-primaryBlue font-semibold'>Stay updated</span>
                    <span className='block text-[18px]'>Increase your Organzation’s productivity with more info on data</span>
                </div>
                <div className='content mt-12 grid grid-cols-3 gap-12'>
                    <div className='blog-item ring-1 ring-[#C3C3C3] rounded-sm'>
                        <div className=''>
                            <Image 
                            alt='team'
                            src={Blog1}/>
                        </div>
                        <div className='mt-5 px-2'>
                            <div className='flex'>
                                <span className='text-[#838282] text-[16px]'>Security</span>
                                <span className='text-[#838282] text-[16px] ml-5'>Privacy</span>
                            </div>
                            <span className='block text-[18px] font-semibold mt-5'>Ensuring data privacy for small startups</span>
                            <span className='block text-[#838282] text-[13px] mt-2'>October 13, 2022</span>
                        </div>
                    </div>
                    <div className='blog-item ring-1 ring-[#C3C3C3] rounded-sm'>
                        <div className=''>
                            <Image 
                            alt='team'
                            src={Blog2}/>
                        </div>
                        <div className='mt-5 px-2'>
                            <div className='flex'>
                                <span className='text-[#838282] text-[16px]'>User</span>
                                <span className='text-[#838282] text-[16px] ml-5'>Data</span>
                            </div>
                            <span className='block text-[18px] font-semibold mt-5'>Using clocker  to optimize data tracking</span>
                            <span className='block text-[#838282] text-[13px] mt-2'>October 14, 2022</span>
                        </div>
                    </div>
                    <div className='blog-item ring-1 ring-[#C3C3C3] rounded-sm'>
                        <div className=''>
                            <Image 
                            alt='team'
                            src={Blog3}/>
                        </div>
                        <div className='mt-5 px-2'>
                            <div className='flex'>
                                <span className='text-[#838282] text-[16px]'>Data</span>
                                <span className='text-[#838282] text-[16px] ml-5'>Monitoring</span>
                            </div>
                            <span className='block text-[18px] font-semibold mt-5'>fully understanding the category of individuls that visit your faacility with clocker</span>
                            <span className='block text-[#838282] text-[13px] mt-2'>October 14, 2022</span>
                        </div>
                    </div>
                    <div className='blog-item ring-1 ring-[#C3C3C3] rounded-sm'>
                        <div className=''>
                            <Image 
                            alt='team'
                            src={Blog2}/>
                        </div>
                        <div className='mt-5 px-2'>
                            <div className='flex'>
                                <span className='text-[#838282] text-[16px]'>User</span>
                                <span className='text-[#838282] text-[16px] ml-5'>Data</span>
                            </div>
                            <span className='block text-[18px] font-semibold mt-5'>Using clocker  to optimize data tracking</span>
                            <span className='block text-[#838282] text-[13px] mt-2'>October 14, 2022</span>
                        </div>
                    </div>
                    <div className='blog-item ring-1 ring-[#C3C3C3] rounded-sm'>
                        <div className=''>
                            <Image 
                            alt='team'
                            src={Blog3}/>
                        </div>
                        <div className='mt-5 px-2'>
                            <div className='flex'>
                                <span className='text-[#838282] text-[16px]'>Data</span>
                                <span className='text-[#838282] text-[16px] ml-5'>Monitoring</span>
                            </div>
                            <span className='block text-[18px] font-semibold mt-5'>fully understanding the category of individuls that visit your faacility with clocker</span>
                            <span className='block text-[#838282] text-[13px] mt-2'>October 14, 2022</span>
                        </div>
                    </div>
                    <div className='blog-item ring-1 ring-[#C3C3C3] rounded-sm'>
                        <div className=''>
                            <Image 
                            alt='team'
                            src={Blog1}/>
                        </div>
                        <div className='mt-5 px-2'>
                            <div className='flex'>
                                <span className='text-[#838282] text-[16px]'>Security</span>
                                <span className='text-[#838282] text-[16px] ml-5'>Privacy</span>
                            </div>
                            <span className='block text-[18px] font-semibold mt-5'>Ensuring data privacy for small startups</span>
                            <span className='block text-[#838282] text-[13px] mt-2'>October 13, 2022</span>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center mt-12'>
                    <button className='flex border border-primaryBlue rounded-[4px] h-[50px] w-[100px]'><span className='block m-auto text-primaryBlue'>View More</span></button>
                </div>
            </div>
            <Footer />
        </>
    )
  }
  
  export default Blogs;
