import type { NextPage } from 'next'
import AuthButton from '../components/AuthButton'
import Image from 'next/image'
const Logo1 = require('../public/assets/logo-home.png')
const Banner1 = require('../public/assets/banner-home.png')
const Team = require('../public/assets/team.png')
import Navbar from '../components/HomePages/Navbar'
import Footer from '../components/HomePages/Footer'
import { connected } from 'process'
import Join from '../components/HomePages/Join'
import Brands from '../components/HomePages/Brands'

const About: NextPage = () => {
    return(
        <>
            <Navbar active='about'/>
            <div className='mt-12'>
                <div className='flex justify-center'> 
                    <span className='block text-[60px] font-semibold text-center w-[70%]'>We are on a mission to bring you on board with data</span>
                </div>
                <br />
                <div className='flex justify-center'> 
                    <span className='block text-[20px] text-center w-[80%]'>At Databoard , we belive that attaining  dat is the first step  towrds becoming  data-driven. If data can be successfully acquired, processed and interpretedn, it can drive up the efficinecny of any system.</span>
                </div>
                <br />
                <div className='flex justify-center'> 
                    <span className='block text-[20px] text-center w-[90%]'>Suspendisse ac tellus etiam eu. Dolor scelerisque justo aenean venenatis sit sed turpis turpis sagittis. Donec augue pellentesque at malesuada risus in. Adipiscing viverra neque neque lacus mattis ligula at. Nam commodo cursus consequat luctus. Felis id urna euismod dapibus lacus orci risus. Morbi egestas nec nulla tellus magna. Sagittis lectus velit nisi lacus lacus molestie tellus ullamcorper pellentesque.</span>
                </div>
            </div>
            <div className='team px-12 my-12'>
                <div className='header'>
                    <span className='block text-[50px] text-primaryBlue font-semibold'>Our team</span>
                    <span className='block text-[18px]'>We belive in the strength and uniqness of the young African mind.</span>
                </div>
                <div className='content mt-12 grid grid-cols-4 gap-12'>
                    <div className='team-item'>
                        <div className='bg-primaryBlue'>
                            <Image 
                            alt='team'
                            src={Team}/>
                        </div>
                        <div className='mt-5'>
                            <span className='block text-[18px] font-semibold'>Name of individual</span>
                            <span className='block text-[15px]'>Role in organization</span>
                        </div>
                    </div>
                    <div className='team-item'>
                        <div className='bg-primaryBlue'>
                            <Image 
                            alt='team'
                            src={Team}/>
                        </div>
                        <div className='mt-5'>
                            <span className='block text-[18px] font-semibold'>Name of individual</span>
                            <span className='block text-[15px]'>Role in organization</span>
                        </div>
                    </div>
                    <div className='team-item'>
                        <div className='bg-primaryBlue'>
                            <Image 
                            alt='team'
                            src={Team}/>
                        </div>
                        <div className='mt-5'>
                            <span className='block text-[18px] font-semibold'>Name of individual</span>
                            <span className='block text-[15px]'>Role in organization</span>
                        </div>
                    </div>
                    <div className='team-item'>
                        <div className='bg-primaryBlue'>
                            <Image 
                            alt='team'
                            src={Team}/>
                        </div>
                        <div className='mt-5'>
                            <span className='block text-[18px] font-semibold'>Name of individual</span>
                            <span className='block text-[15px]'>Role in organization</span>
                        </div>
                    </div>
                    <div className='team-item'>
                        <div className='bg-primaryBlue'>
                            <Image 
                            alt='team'
                            src={Team}/>
                        </div>
                        <div className='mt-5'>
                            <span className='block text-[18px] font-semibold'>Name of individual</span>
                            <span className='block text-[15px]'>Role in organization</span>
                        </div>
                    </div>
                    <div className='team-item'>
                        <div className='bg-primaryBlue'>
                            <Image 
                            alt='team'
                            src={Team}/>
                        </div>
                        <div className='mt-5'>
                            <span className='block text-[18px] font-semibold'>Name of individual</span>
                            <span className='block text-[15px]'>Role in organization</span>
                        </div>
                    </div>
                    <div className='team-item'>
                        <div className='bg-primaryBlue'>
                            <Image 
                            alt='team'
                            src={Team}/>
                        </div>
                        <div className='mt-5'>
                            <span className='block text-[18px] font-semibold'>Name of individual</span>
                            <span className='block text-[15px]'>Role in organization</span>
                        </div>
                    </div>
                    <div className='team-item'>
                        <div className='bg-primaryBlue'>
                            <Image 
                            alt='team'
                            src={Team}/>
                        </div>
                        <div className='mt-5'>
                            <span className='block text-[18px] font-semibold'>Name of individual</span>
                            <span className='block text-[15px]'>Role in organization</span>
                        </div>
                    </div>
                </div>
                
            </div>
            <Brands/>
            <Join/>
            <Footer />
        </>
    )
  }
  
  export default About;
