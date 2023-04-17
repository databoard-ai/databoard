import { useEffect,useRef } from 'react';
import type { NextPage } from 'next'
import Image from 'next/image'
const Ellipses = require('../public/assets/ellipses.png')
const Playstore = require('../public/assets/playstore.png')
const Appstore = require('../public/assets/applestore.png')
const Cta2 = require('../public/assets/cta2-img.png')
const PhoneIco = require('../public/assets/phone-ico.png')
const Security = require('../public/assets/Privacy.png')
const Visual = require('../public/assets/Visual.png')
const Connected = require('../public/assets/Connected.png')
import Navbar from '../components/HomePages/Navbar'
import Footer from '../components/HomePages/Footer'
import Join from '../components/HomePages/Join'
import Setup from './setup'
import Head from 'next/head'

const Index: NextPage = () => {
    const bgRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const bgElement = document.getElementById("moving_image");
        window.addEventListener("scroll", () => {
          if (!bgElement) return;
          const yPos = -(window.pageYOffset / 6);
          bgElement.style.backgroundPosition = `center ${yPos}px`;
        });
      }, []);
      
    return (
        <>
            <Head>
                <title>Databoard</title>
                <link rel="shortcut icon" href="/fav.png" />
            </Head>
            <Navbar />
            <div className='flex h-screen items-center justify-center bg-cover bg-center home-banner w-full'>
                <div className='text-center w-full'>
                    <span className='block text-[32px] lg:text-[64px] font-semibold text-pureWhite'>Empowering You in<br /> a <span className='text-pureWhite'>data-driven</span> world</span>
                    <span className='block text-[18px] text-pureWhite mb-7'>Acquire Data, Discover significant insights, Optimize performance.
                        <br />Let us help you get more out of your audience without breaching privacy.
                    </span>
                    <form className="flex items-center rounded-lg justify-center w-full text-center">
                        <div className='relative'>
                            <input className="flex-1 bg-gray-100 rounded-l-lg py-4 md:w-80 px-4 text-xs md:text-sm  mr-0 focus:outline-none focus:bg-white" type="email" placeholder="Enter Email to join our Waitlist" />
                            <button className=" bg-primaryBlue hover:bg-blue-700 text-white font-normal px-2 md:text-sm py-4 text-xs md:px-10 rounded-r-lg text-pureWhite">Get Early Access</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className=' grid xsm:grid-cols-2 py-20'>
                <div className='hidden xsm:block clocker-banner bg-contain bg-no-repeat bg-center' id='moving-bg'>
                  
                </div>
                <div className='mt-5 xsm:mt-[80px] md:mt-[140px] xsm:ml-[20px]'>
                    <span className='block text-[40px] text-center xsm:text-left xsm:text-[40px] md:text-[64px] text-primaryBlue font-semibold'>Meet clocker</span>
                    <span className='block text-[18px] text-center xsm:text-left font-bold xsm:text-[24px] text-black mb-2'>Register your presence with Clocker</span>
                    <span className='block text-[16px] text-center xsm:text-left'>Clocker helps users to check into locations, events or any access point in seconds, by scanning Databoard access tags.
                        <br />
                        Databoard works hand in hand with clocker, to drive efficiency with data.
                    </span>
                    <div className='flex gap-2 justify-center xsm:justify-start mt-3'>
                        <Image
                            className='btn inline'
                            alt='playstore'
                            src={Playstore} />
                        <Image
                            className='btn inline'
                            alt='applestore'
                            src={Appstore} />
                    </div>
                </div>
                <div className='mt-10 py-20 xsm:mt-[90px] mb-[49.5px] ml-[20px] xsm:hidden clocker-iphone h-full bg-contain bg-no-repeat bg-center' id='moving-bg'>
                    {/* <Image
                        className='w-[200px] xsm:w-[350px] m-auto'
                        alt='phone'
                        src={Iphone} /> */}
                </div>
            </div>
            <div className='cta grid sm:grid-cols-2 justify-center bg-[#F4F4F4] overflow-hidden'>
                <div className='px-2 text-center sm:text-left md:pl-[20%]'>
                    <span className='block text-[32px] lg:text-[40px] text-primaryBlue font-semibold mt-5 mb-2 lg:mt-[100px]'>Contact Us About
                        <br />
                        Databoard Software
                    </span>
                    <span className='block text-[15px] mb-5'>We will love to help you acquire your user audience with ease, and also help you unlock hidden trends beneath their clocking-in data. Optimize performance and establish peak efficiency with Databoard. Here are a few ways to reach out to our sales team.</span>
                    <div className='flex gap-2 justify-center sm:justify-start'>
                        <a href="#" className='btn flex border border-primaryBlue rounded-[4px] h-[50px] px-4 w-auto bg-primaryBlue'>
                            <span className='m-auto text-pureWhite'>
                                <Image
                                    className='inline mr-2'
                                    alt='ico'
                                    src={PhoneIco} />
                                Contact Sales
                            </span>
                        </a>
                        <a href="#" className='btn px-4 flex border border-primaryBlue rounded-[4px] h-[50px] w-auto'><span className='m-auto text-primaryBlue px-4'>Get Started</span></a>
                    </div>
                </div>
                <div className='mt-5 mb-3'>
                    <Image
                        className='w-[400px] xsm:w-[500px] m-auto'
                        alt='cta2'
                        src={Cta2} />
                </div>
            </div>
            <div className='cta bg-primaryBlue px-10 text-center overflow-hidden'>
                <div className='grid sm:grid-cols-2 lg:flex justify-around my-2'>
                    <div className=''>
                        <span className='block text-[24px] sm:text-[30px] md:text-[40px] font-semibold text-pureWhite mt-5 sm:mt-20 lg:mt-32 mb-3'>Privacy-focused Data acquisitor</span>
                        <span className='block text-pureWhite xsm:text-[16px]'>We focus on the data security of our users and priotizie thier privacy before anything else</span>
                    </div>
                    <div>
                        <Image
                            className='w-[400px] m-auto sm-bg'
                            alt='secure'
                            src={Security} />
                    </div>
                </div>
                <div className='grid sm:grid-cols-2 lg:flex justify-around my-2'>
                    <div className='sm:hidden'>
                        <span className='block text-[24px] sm:text-[40px] font-semibold text-pureWhite mt-5 sm:mt-32 mb-5'>Insights and Reporting</span>
                        <span className='block text-pureWhite text-[16px]'>Generate insights from data or <br />performance optimization</span>
                    </div>
                    <div>
                        <Image
                            className='w-[400px] sm-bg'
                            alt='visual'
                            src={Visual} />
                    </div>
                    <div className='hidden sm:block'>
                        <span className='block text-[24px] sm:text-[30px] md:text-[40px] font-semibold text-pureWhite mt-5 sm:mt-20 lg:mt-32 mb-3'>Insights and <br />Reporting</span>
                        <span className='block text-pureWhite text-[16px]'>Generate insights from data, for <br />performance optimization</span>
                    </div>
                </div>
                <div className='grid sm:grid-cols-2 lg:flex justify-around my-2'>
                    <div>
                        <span className='block text-[24px] sm:text-[30px] md:text-[40px] font-semibold text-pureWhite mt-5 sm:mt-20 lg:mt-32 mb-3'>Communication tool</span>
                        <span className='block text-pureWhite xsm:text-[16px]'>Target and Engage your Databoard <br />audience with our communication tools.</span>
                    </div>
                    <div>
                        <Image
                            className='w-[400px] sm-bg'
                            alt='connect'
                            src={Connected} />
                    </div>
                </div>
            </div>
            {/* <Brands /> */}
            {/* <div className='cta bg-pureWhite py-9'>
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
            </div> */}
            <Join />
            <Footer />
        </>
    )
}

export default Index;