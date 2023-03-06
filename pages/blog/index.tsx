import type { NextPage } from 'next'
import AuthButton from '../../components/AuthButton'
import Image from 'next/image'
const Blog1 = require('../../public/assets/images/blog/1.png')
const Blog2 = require('../../public/assets/images/blog/2.png')
const Blog3 = require('../../public/assets/images/blog/3.png')
const Blog4 = require('../../public/assets/images/blog/4.png')
const Blog5 = require('../../public/assets/images/blog/5.png')
const Blog6 = require('../../public/assets/images/blog/6.png')
const Blog7 = require('../../public/assets/images/blog/7.png')
const Blog8 = require('../../public/assets/images/blog/8.png')
const Blog9 = require('../../public/assets/images/blog/9.png')
import Navbar from '../../components/HomePages/Navbar'
import Footer from '../../components/HomePages/Footer'

const Blogs: NextPage = () => {
    return(
        <>
            <Navbar/>
            <div className='blogs px-3 sm:px-12 my-12'>
                <div className='header'>
                    <span className='block text-[32px] lg:text-[50px] text-primaryBlue font-semibold'>Blog</span>
                    <span className='block text-[16px] lg:text-[18px]'>Tips, tutorials, data practices and related contents, to help manage your audience</span>
                </div>
                <div className='content mt-12 grid xsm:grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-12'>
                    <div className='blog-item ring-1 ring-[#C3C3C3] rounded-sm cursor-pointer'>
                        <div className='overflow-hidden'>
                            <Image 
                            className='img-transform'
                            alt='team'
                            src={Blog1}/>
                        </div>
                        <div className='mt-5 px-2'>
                            <div className='flex'>
                                <span className='text-[#838282] text-[16px]'>Education</span>
                                <span className='text-[#838282] text-[16px] ml-5'>Software</span>
                            </div>
                            <a href='' className='block text-[18px] font-semibold mt-5 hover:text-primaryBlue'>Welcome! Getting started with Databoard</a>
                            <span className='block text-[#838282] text-[13px] mt-2'>2/2/2023</span>
                        </div>
                    </div>
                    <div className='blog-item ring-1 ring-[#C3C3C3] rounded-sm cursor-pointer'>
                        <div className='overflow-hidden'>
                            <Image 
                            className='img-transform'
                            alt='team'
                            src={Blog2}/>
                        </div>
                        <div className='mt-5 px-2'>
                            <div className='flex'>
                                <span className='text-[#838282] text-[16px]'>Education</span>
                                <span className='text-[#838282] text-[16px] ml-5'>History</span>
                            </div>
                            <a href='/blog/2' className='block text-[18px] font-semibold mt-5 hover:text-primaryBlue'>Data Culture in Africa - The Past the Present and the Databoard</a>
                            <span className='block text-[#838282] text-[13px] mt-2'>5/2/2023</span>
                        </div>
                    </div>
                    <div className='blog-item ring-1 ring-[#C3C3C3] rounded-sm cursor-pointer'>
                        <div className='overflow-hidden'>
                            <Image 
                            className='img-transform'
                            alt='team'
                            src={Blog3}/>
                        </div>
                        <div className='mt-5 px-2'>
                            <div className='flex'>
                                <span className='text-[#838282] text-[16px]'>Marketing</span>
                                <span className='text-[#838282] text-[16px] ml-5'>Business</span>
                            </div>
                            <a href='' className='block text-[18px] font-semibold mt-5 hover:text-primaryBlue'>The Use of Data in personalized marketing, and its impact on Customer Engagement</a>
                            <span className='block text-[#838282] text-[13px] mt-2'>9/2/2023</span>
                        </div>
                    </div>
                    <div className='blog-item ring-1 ring-[#C3C3C3] rounded-sm cursor-pointer'>
                        <div className='overflow-hidden'>
                            <Image 
                            className='img-transform'
                            alt='team'
                            src={Blog4}/>
                        </div>
                        <div className='mt-5 px-2'>
                            <div className='flex'>
                                <span className='text-[#838282] text-[16px]'>Governance</span>
                                <span className='text-[#838282] text-[16px] ml-5'>Education</span>
                            </div>
                            <a href='' className='block text-[18px] font-semibold mt-5 hover:text-primaryBlue'>Thinking Data in an Emerging Economy</a>
                            <span className='block text-[#838282] text-[13px] mt-2'>10/2/2023</span>
                        </div>
                    </div>
                    <div className='blog-item ring-1 ring-[#C3C3C3] rounded-sm cursor-pointer'>
                        <div className='overflow-hidden'>
                            <Image 
                            className='img-transform'
                            alt='team'
                            src={Blog5}/>
                        </div>
                        <div className='mt-5 px-2'>
                            <div className='flex'>
                                <span className='text-[#838282] text-[16px]'>Business</span>
                                <span className='text-[#838282] text-[16px] ml-5'>Education</span>
                            </div>
                            <a href='' className='block text-[18px] font-semibold mt-5 hover:text-primaryBlue'>How Data helps Businesses save Time and become more Efficient</a>
                            <span className='block text-[#838282] text-[13px] mt-2'>12/2/2023</span>
                        </div>
                    </div>
                    <div className='blog-item ring-1 ring-[#C3C3C3] rounded-sm cursor-pointer'>
                        <div className='overflow-hidden'>
                            <Image 
                            className='img-transform'
                            alt='team'
                            src={Blog6}/>
                        </div>
                        <div className='mt-5 px-2'>
                            <div className='flex'>
                                <span className='text-[#838282] text-[16px]'>Business</span>
                                <span className='text-[#838282] text-[16px] ml-5'>Education</span>
                            </div>
                            <a href='' className='block text-[18px] font-semibold mt-5 hover:text-primaryBlue'>Consumer Data: Little is Much</a>
                            <span className='block text-[#838282] text-[13px] mt-2'>14/2/2023</span>
                        </div>
                    </div>
                    <div className='blog-item ring-1 ring-[#C3C3C3] rounded-sm cursor-pointer'>
                        <div className='overflow-hidden'>
                            <Image 
                            className='img-transform'
                            alt='team'
                            src={Blog7}/>
                        </div>
                        <div className='mt-5 px-2'>
                            <div className='flex'>
                                <span className='text-[#838282] text-[16px]'>Education</span>
                                <span className='text-[#838282] text-[16px] ml-5'>Analysis</span>
                            </div>
                            <a href='' className='block text-[18px] font-semibold mt-5 hover:text-primaryBlue'>The Challenges and Limitation of Data analysis, and how to Overcome Them</a>
                            <span className='block text-[#838282] text-[13px] mt-2'>16/2/2023</span>
                        </div>
                    </div>
                    <div className='blog-item ring-1 ring-[#C3C3C3] rounded-sm cursor-pointer'>
                        <div className='overflow-hidden'>
                            <Image 
                            className='img-transform'
                            alt='team'
                            src={Blog8}/>
                        </div>
                        <div className='mt-5 px-2'>
                            <div className='flex'>
                                <span className='text-[#838282] text-[16px]'>Security</span>
                                <span className='text-[#838282] text-[16px] ml-5'>Legal</span>
                            </div>
                            <a href='' className='block text-[18px] font-semibold mt-5 hover:text-primaryBlue'>The Role of Data Governance in ensuring the Quality and Integrity of your Data</a>
                            <span className='block text-[#838282] text-[13px] mt-2'>18/2/2023</span>
                        </div>
                    </div>
                    <div className='blog-item ring-1 ring-[#C3C3C3] rounded-sm cursor-pointer'>
                        <div className='overflow-hidden'>
                            <Image 
                            className='img-transform'
                            alt='team'
                            src={Blog9}/>
                        </div>
                        <div className='mt-5 px-2'>
                            <div className='flex'>
                                <span className='text-[#838282] text-[16px]'>Privacy</span>
                                <span className='text-[#838282] text-[16px] ml-5'>Security</span>
                            </div>
                            <a href='' className='block text-[18px] font-semibold mt-5 hover:text-primaryBlue'>The Role of Data Governance in ensuring the Quality and Integrity of your Data</a>
                            <span className='block text-[#838282] text-[13px] mt-2'>20/2/2023</span>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center mt-12'>
                    <button className='btn flex border border-primaryBlue rounded-[4px] h-[50px] w-[100px]'><span className='block m-auto text-primaryBlue'>View More</span></button>
                </div>
            </div>
            <Footer />
        </>
    )
  }
  
  export default Blogs;
