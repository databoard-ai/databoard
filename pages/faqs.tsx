import type { NextPage } from 'next'
import AuthButton from '../components/AuthButton'
import Image from 'next/image'
const Logo1 = require('../public/assets/logo-home.png')
const Dropdown = require('../public/assets/arrow-down.png')
const Dropup = require('../public/assets/arrow-up.png')
import Navbar from '../components/HomePages/Navbar'
import Footer from '../components/HomePages/Footer'
import { connected } from 'process'
import Join from '../components/HomePages/Join'
import Brands from '../components/HomePages/Brands'
import { useState } from 'react'

const Faq: NextPage = () => {

    const [show, setShow] = useState(false);
    const [showing, setShowing] = useState(false);

    const showAnswer = (question, e)=>{
        let answers = document.getElementsByClassName('answer')

        if (document.getElementById(question).hidden) {
            document.getElementById(question).hidden = false;
            e.target.classList.remove('border-y-0')
            e.target.classList.add('border-b-1')
        }else{
            document.getElementById(question).hidden = true;
            e.target.classList.add('border-y-0')
            e.target.classList.remove('border-b-1')
        }
    }

    return(
        <>
            <Navbar/>
            <div className='faq px-[10%] my-12'>
                <div className='header'>
                    <span className='block text-[50px] text-primaryBlue font-semibold'>Frequently Asked Questions</span>
                    <span className='block text-[18px]'>Get to know the questions our clients ask most often</span>
                </div>
                <div className='content mt-12 divide-y divide-grayInactive border border-x-0 border-grayInactive'>
                    <div>
                        <div className='question flex justify-between items-center px-5 py-5 cursor-pointer border border-y-0 border-grayInactive' onClick={(e)=>showAnswer('1', e)}>
                            <span className='font-semibold'>What is Databoard?</span>
                            <Image 
                            className='w-[15px] h-[10px]'
                            alt='dropdown'
                            src={Dropdown}/>
                        </div>
                        <div id='1' className='answer bg-[#F4F4F4] mt-2 text-justify p-2' hidden>
                            <span>Databoard is a multifaceted data dashboard that helps institutions view, manage, interact with and interpret the data of their audience. Databoard provides organizations with the tools to acquire, sort, and analyze their users' data, providing insights for efficient management. Institutions collect this data with the help of the Clocker App.</span>
                        </div>
                    </div>
                    <div className=''>
                        <div className='question flex justify-between items-center px-5 py-5 cursor-pointer border border-y-0 border-grayInactive' onClick={(e)=>showAnswer('2',e)}>
                            <span className='font-semibold'>Who Can Use Databoard?</span>
                            <Image 
                            className='w-[15px] h-[10px]'
                            alt='dropdown'
                            src={Dropdown}/>
                        </div>
                        <div id='2' className='answer bg-[#F4F4F4] mt-2 text-justify p-2' hidden>
                            <span>You start by first creating a databoard account, by signing up on our webpage www.databoard.ai This is done by clicking the Get Started button on the home page and going ahead to complete the sign-up process with your organization's email. <br />
                            A confirmation email is then sent to that email. Next, you click on Board on the navigation bar, to set up your databoard. This is done by specifying your Organisation Name, Organization Type/Category, and the Location of your Organization.</span>
                        </div>
                    </div>
                    <div>
                        <div className='question flex justify-between items-center px-5 py-5 cursor-pointer border border-y-0 border-grayInactive' onClick={(e)=>showAnswer('3',e)}>
                            <span className='font-semibold'>How Do I Create An Event Tag?</span>
                            <Image 
                            className='w-[15px] h-[10px]'
                            alt='dropdown'
                            src={Dropdown}/>
                        </div>
                        <div id='3' className='answer bg-[#F4F4F4] mt-2 text-justify p-2' hidden>
                            <span>An Event Tag is created by simply clicking the Create New Tag button, at the lower right corner of your board page. This will in turn prompt a page that will require you to specify the tag details. Tag details include the name of the tag, a checkbox to specify if the tag is an infinite tag or not, use the time and date picker to select when a tag should be active, and specify if you want to visualize the secondary data of your users. You finally end the process by clicking the Create New Tag button at the bottom of the page.</span>
                        </div>
                    </div>
                    <div className=''>
                        <div className='question flex justify-between items-center px-5 py-5 cursor-pointer border border-y-0 border-grayInactive' onClick={(e)=>showAnswer('4', e)}>
                            <span className='font-semibold'>What Is An Infinite Tag?</span>
                            <Image 
                            className='w-[15px] h-[10px]'
                            alt='dropdown'
                            src={Dropdown}/>
                        </div>
                        <div id='4' className='answer bg-[#F4F4F4] mt-2 text-justify p-2' hidden>
                            <span>An infinite tag is a type of event tag that is not restricted by time. It is built to always be active and only restricted by the maximum amount of clocks allowed by the current subscription of its creator.   <br />
                            This means that, if by any means its creator upgrades the subscription plan to a superior one, its capacity will also be upgraded to accommodate new clocks, up to its new maximum. <br />
                            The capacity of an infinite tag created with an enterprise subscription plan is unlimited.</span>
                        </div>
                    </div>
                    <div className=''>
                        <div className='question flex justify-between items-center px-5 py-5 cursor-pointer border border-y-0 border-grayInactive' onClick={(e)=>showAnswer('5', e)}>
                            <span className='font-semibold'>What Types of Data Gets Shared When A Clocker User Scans A Databoard Event Tag?</span>
                            <Image 
                            className='w-[15px] h-[10px]'
                            alt='dropdown'
                            src={Dropdown}/>
                        </div>
                        <div id='5' className='answer bg-[#F4F4F4] mt-2 text-justify p-2' hidden>
                            <span>Whenever a Databoard Event Tag is scanned during clock-ins or sign-ins, basic data of clocker users get shared across to aid and complete the clocking process. This data is categorized into two data groups: Primary data groups and Secondary data groups. The Primary Data Group contains the Name, Gender, and Clocking Time of the Clocker User, while the Secondary Data Group contains contact details like phone number, email, and age of the Clocker user. </span>
                        </div>
                    </div>
                    <div className=''>
                        <div className='question flex justify-between items-center px-5 py-5 cursor-pointer border border-y-0 border-grayInactive' onClick={(e)=>showAnswer('6', e)}>
                            <span className='font-semibold'>What are Primary and Secondary Data groups?</span>
                            <Image 
                            className='w-[15px] h-[10px]'
                            alt='dropdown'
                            src={Dropdown}/>
                        </div>
                        <div id='6' className='answer bg-[#F4F4F4] mt-2 text-justify p-2' hidden>
                            <span>Databoard categorizes data according to its sensitivity. In a bid to protect the privacy of our users and give them control of what gets shared, we operate with two main categories of data; primary data and secondary data. Primary data is the category of data that contains information about users that can be said to be harmless. This information is restricted to User Names, Gender, and Clocking Times. This information is basic and is the minimum data that gets shared during every clocking process. <br />
                            Secondary Data is the next category of data that contains contact details. These details can be said to be basic but are not categorized at the same level as those in the primary data level. This contains the Phone Number, Email Address,and User's Age. When Secondary data is not shared, it is restricted from being visualized by institutions, but may be used to aid data analysis and sorting.</span>
                        </div>
                    </div>
                    <div className=''>
                        <div className='question flex justify-between items-center px-5 py-5 cursor-pointer border border-y-0 border-grayInactive' onClick={(e)=>showAnswer('7', e)}>
                            <span className='font-semibold'>Do I Need To Pay To Start Using Databoard?</span>
                            <Image 
                            className='w-[15px] h-[10px]'
                            alt='dropdown'
                            src={Dropdown}/>
                        </div>
                        <div id='7' className='answer bg-[#F4F4F4] mt-2 text-justify p-2' hidden>
                            <span>No. Databoard allows institutions to try out our software for a period of two(2) weeks. Within two weeks, users get to use all the features without any restriction, as we expose them to a trial of our enterprise plan.This will give organizations enough time to have a feel of all our features. <br />
                            When the 14-day period is over, users can choose to subscribe to any of the Databoard plans that fits their budget and needs. In a case where the user needs to familiarise more with the software or is not yet ready for a paid subscription, Databoard still has them covered. Databaord operates with a freemium model. This means that any Institution can choose to try out Databoard for FREE with our Freemium plan, which allows the use of limited features and functions, enough to give you a proper experience.</span>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
  }
  
  export default Faq;
