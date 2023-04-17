import type { NextPage } from 'next'
import Image from 'next/image'
const James = require('../public/assets/images/team/james.png')
const Seyi = require('../public/assets/images/team/seyi.jpeg')
const Isy = require('../public/assets/images/team/isy.png')
const Chisom = require('../public/assets/images/team/chisom.jpeg')
const Duna = require('../public/assets/images/team/duna.jpeg')
const Michael = require('../public/assets/images/team/michael.png')
const Grace = require('../public/assets/images/team/grace.png')
import Navbar from '../components/HomePages/Navbar'
import Footer from '../components/HomePages/Footer'
import Join from '../components/HomePages/Join'

const About: NextPage = () => {
    return(
        <>
            <Navbar/>
            <div className='mt-12 px-12'>
                <div className='flex justify-center'> 
                    <div className='block text-[40px] lg:text-[60px] font-semibold text-center w-[90%] md:w-[70%]'><span>We are on a mission to bring you on </span><span className=' text-primaryBlue px-4'> board</span><span>with your data</span></div>
                    
                </div>
                <br />
                <div className='flex justify-center'> 
                    <span className='block text-[18px] lg:text-[20px] text-center w-[80%]'>At Databoard , we believe that attaining  data is the first step towards becoming  data-driven. If data can be successfully acquired, processed and interpreted, it can drive up the efficiency of any system</span>
                </div>
                <br />
                <div className='flex justify-center'> 
                    <span className='block text-[20px] text-center w-[90%]'>Databoard, an African startup, aims to revolutionize the way African organizations connect with their audiences through the use of data technology. Our goal is to become the leading provider of data technology solutions that enable African organizations to make data-driven decisions.</span>
                </div>
                <br />
                {/* <div className='flex justify-center'> 
                    <span className='block text-[20px] text-center w-[90%]'>Our value proposition is to provide African organizations with the tools to collect, sort, and analyze their users' data to provide actionable insights for efficient management and communication. Our data technology transforms the way organizations interact with their audiences, leading to improved customer satisfaction, increased engagement, and business growth.</span>
                </div> */}
            </div>
            <div className='team px-3 md:px-12 my-12'>
                <div className='header'>
                    <span className='block text-[32px] lg:text-[50px] text-primaryBlue font-semibold'>Our team</span>
                    <span className='block text-[16px] lg:text-[18px]'>We belive in the strength and uniqness of the young African mind.</span>
                </div>
                <div className='content px-12 mt-8 grid xsm:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-14'>
                    <div className='team-item m-auto'>
                        <div>
                            <Image 
                            alt='team'
                            src={Grace}/>
                        </div>
                        <div className='mt-5'>
                            <span className='block text-[18px] font-semibold'>Eche Grace</span>
                            <span className='block text-[15px]'>Marketing</span>
                        </div>
                    </div>
                    <div className='team-item m-auto'>
                        <div>
                            <Image 
                            alt='team'
                            src={James}/>
                        </div>
                        <div className='mt-5'>
                            <span className='block text-[18px] font-semibold'>James Onuh</span>
                            <span className='block text-[15px]'>Design & Marketing</span>
                        </div>
                    </div>
                    <div className='team-item m-auto'>
                        <div className='bg-primaryBlue'>
                            <Image 
                            alt='team'
                            src={Seyi}/>
                        </div>
                        <div className='mt-5'>
                            <span className='block text-[18px] font-semibold'>Ogundipe Oluseyi</span>
                            <span className='block text-[15px]'>Product & Design</span>
                        </div>
                    </div>
                    <div className='team-item m-auto'>
                        <div className='bg-primaryBlue'>
                            <Image 
                            alt='team'
                            src={Isy}/>
                        </div>
                        <div className='mt-5'>
                            <span className='block text-[18px] font-semibold'>Agom Israel</span>
                            <span className='block text-[15px]'>Business</span>
                        </div>
                    </div>
                    <div className='team-item m-auto'>
                        <div className='bg-primaryBlue'>
                            <Image 
                            alt='team'
                            src={Duna}/>
                        </div>
                        <div className='mt-5'>
                            <span className='block text-[18px] font-semibold'>Jilang Duna</span>
                            <span className='block text-[15px]'>Engineering</span>
                        </div>
                    </div>
                    <div className='team-item m-auto'>
                        <div className='bg-primaryBlue'>
                            <Image 
                            alt='team'
                            src={Chisom}/>
                        </div>
                        <div className='mt-5'>
                            <span className='block text-[18px] font-semibold'>Chisom Nteh</span>
                            <span className='block text-[15px]'>Engineering</span>
                        </div>
                    </div>
                    <div className='team-item m-auto'>
                        <div className='bg-primaryBlue'>
                            <Image 
                            alt='team'
                            src={Michael}/>
                        </div>
                        <div className='mt-5'>
                            <span className='block text-[18px] font-semibold'>Agom Michael</span>
                            <span className='block text-[15px]'>Content Marketing</span>
                        </div>
                    </div>
                </div>
                
            </div>
            {/* <Brands/> */}
            <Join/>
            <Footer />
        </>
    )
  }
  
  export default About;
