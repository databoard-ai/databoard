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
const Security = require('../public/assets/Privacy.png')
const Visual = require('../public/assets/Visual.png')
const Connected = require('../public/assets/Connected.png')
const Avatar = require('../public/assets/avatar.png')
import AuthInput from '../components/AuthInput'
import AuthDropdown from '../components/AuthDropdown'
import { connected } from 'process'

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
            <div className='cta bg-primaryBlue px-10'>
                <div className='flex justify-around'>
                    <div>
                        <span className='block text-[40px] font-semibold text-pureWhite mt-32'>Privacy-focused <br/>Data acquisitor</span>
                        <br />
                        <span className='block text-pureWhite text-[16px]'>We focus on the data security of our users and <br/>priotizie thier privacy before anything else</span>
                    </div>
                    <div>
                        <Image
                        className='w-[400px]' 
                        alt='secure'
                        src={Security}/>
                    </div>
                </div>
                <div className='flex justify-around'>
                    <div>
                        <Image
                        className='w-[400px]' 
                        alt='visual'
                        src={Visual}/>
                    </div>
                    <div>
                        <span className='block text-[40px] font-semibold text-pureWhite mt-32'>Insights and <br/>Reporting</span>
                        <br />
                        <span className='block text-pureWhite text-[16px]'>Generate insights from data or <br/>perfromance optimization</span>
                    </div>
                </div>
                <div className='flex justify-around'>
                    <div>
                        <span className='block text-[40px] font-semibold text-pureWhite mt-32'>Communication tool</span>
                        <br />
                        <span className='block text-pureWhite text-[16px]'>Target and Engage your Databoard <br />audience with our communication tools.</span>
                    </div>
                    <div>
                        <Image
                        className='w-[400px]' 
                        alt='connect'
                        src={Connected}/>
                    </div>
                </div>
            </div>
            <div className='cta bg-[#010A26] py-9'>
                <div>
                    <h2 className='text-pureWhite text-[30px] text-center font-semibold'>Brands that trust us</h2>
                </div>
                <div className='flex justify-around'>
                    <Image 
                    alt='brands'
                    src={Logo1}/>
                    <Image 
                    alt='brands'
                    src={Logo1}/>
                    <Image 
                    alt='brands'
                    src={Logo1}/>
                    <Image 
                    alt='brands'
                    src={Logo1}/>
                </div>
            </div>
            <div className='cta bg-pureWhite py-9'>
                <div>
                    <h2 className='text-[30px] text-center font-semibold'>What our customers are saying</h2>
                </div>
                <div className='flex justify-around mt-5 px-10'>
                    <div className='w-[25%] bg-primaryBlue'>
                        <div className='p-5'>
                            <span className='block text-justify text-pureWhite'>
                                Eget justo vitae habitant dignissim arcu ut nibh fermentum. Duis nibh facilisis vulputate amet. Libero sodales urna duis sem nec amet libero. Interdum lectus eget iaculis sit. Semper faucibus ac quisque amet libero donec vestibulum. Et est adipiscing velit mus. Ac sed ac venenatis sit duis pellentesque porttitor ullamcorper tellus. Consectetur non metus neque sit faucibus. Imperdiet ante a enim pretium. Tortor faucibus sed odio placerat magnis sem neque ac. Vel diam in gravida agittis fusce mauris suspendisse.
                            </span>
                        </div>
                        <div className='p-5 pt-0 flex items-center'>
                            <div>
                                <Image 
                                className='w-[60px]'
                                alt='avatar'
                                src={Avatar}/>
                            </div>
                            <div className='ml-2'>
                                <span className='block text-[18px] text-pureWhite'>James Edwin</span>
                                <span className='block text-[12px] text-pureWhite'>Manger -Aviex Media</span>
                            </div>
                        </div>
                    </div>
                    <div className='w-[25%] bg-primaryBlue'>
                        <div className='p-5'>
                            <span className='block text-justify text-pureWhite'>
                                Eget justo vitae habitant dignissim arcu ut nibh fermentum. Duis nibh facilisis vulputate amet. Libero sodales urna duis sem nec amet libero. Interdum lectus eget iaculis sit. Semper faucibus ac quisque amet libero donec vestibulum. Et est adipiscing velit mus. Ac sed ac venenatis sit duis pellentesque porttitor ullamcorper tellus. Consectetur non metus neque sit faucibus. Imperdiet ante a enim pretium. Tortor faucibus sed odio placerat magnis sem neque ac. Vel diam in gravida agittis fusce mauris suspendisse.
                            </span>
                        </div>
                        <div className='p-5 pt-0 flex items-center'>
                            <div>
                                <Image 
                                className='w-[60px]'
                                alt='avatar'
                                src={Avatar}/>
                            </div>
                            <div className='ml-2'>
                                <span className='block text-[18px] text-pureWhite'>James Edwin</span>
                                <span className='block text-[12px] text-pureWhite'>Manger -Aviex Media</span>
                            </div>
                        </div>
                    </div>
                    <div className='w-[25%] bg-primaryBlue'>
                        <div className='p-5'>
                            <span className='block text-justify text-pureWhite'>
                                Eget justo vitae habitant dignissim arcu ut nibh fermentum. Duis nibh facilisis vulputate amet. Libero sodales urna duis sem nec amet libero. Interdum lectus eget iaculis sit. Semper faucibus ac quisque amet libero donec vestibulum. Et est adipiscing velit mus. Ac sed ac venenatis sit duis pellentesque porttitor ullamcorper tellus. Consectetur non metus neque sit faucibus. Imperdiet ante a enim pretium. Tortor faucibus sed odio placerat magnis sem neque ac. Vel diam in gravida agittis fusce mauris suspendisse.
                            </span>
                        </div>
                        <div className='p-5 pt-0 flex items-center'>
                            <div>
                                <Image 
                                className='w-[60px]'
                                alt='avatar'
                                src={Avatar}/>
                            </div>
                            <div className='ml-2'>
                                <span className='block text-[18px] text-pureWhite'>James Edwin</span>
                                <span className='block text-[12px] text-pureWhite'>Manger -Aviex Media</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex mt-9 justify-center'>
                    <div className='bg-primaryBlue w-12 h-2 rounded-full'></div>
                    <div className='bg-primaryBlue w-2 h-2 rounded-full ml-2'></div>
                    <div className='bg-primaryBlue w-2 h-2 rounded-full ml-1'></div>
                    <div className='bg-primaryBlue w-2 h-2 rounded-full ml-1'></div>
               </div>
            </div>
            <div className='flex justify-center'>
                <div className='w-[70%] my-9'>
                    <div>
                        <span className='block text-[64px] text-center'>Join Databoard to enjoy our 14-day Free trial</span>
                    </div>
                    <div className='flex gap-3 justify-center mt-9'>
                        <a href="#" className='flex border border-primaryBlue rounded-[4px] h-[50px] w-[100px] bg-primaryBlue'><span className='block m-auto text-pureWhite'>Get Started</span></a>
                        <a href="#" className='flex border border-primaryBlue rounded-[4px] h-[50px] w-[100px]'><span className='block m-auto text-primaryBlue'>Log In</span></a>
                    </div>
                </div>
            </div>
            <div className='footer flex h-[300px] bg-[#010A26]'>
                <span className='block m-auto text-pureWhite'>footer</span>
            </div>
        </>
    )
  }
  
  export default Index;
