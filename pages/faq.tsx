import type { NextPage } from 'next'
import AuthButton from '../components/AuthButton'
import Image from 'next/image'
const Logo1 = require('../public/assets/logo-home.png')
const Dropdown = require('../public/assets/arrow-down.png')
import Navbar from '../components/HomePages/Navbar'
import Footer from '../components/HomePages/Footer'
import { connected } from 'process'
import Join from '../components/HomePages/Join'
import Brands from '../components/HomePages/Brands'
import { useState } from 'react'

const Faq: NextPage = () => {

    const [show, setShow] = useState(false);

    const showAnswer = (question, e)=>{
        console.log(e)
        if (show===true) {
            document.getElementById(question).hidden = true;
            e.target.classList.add('border-y-0')
            e.target.classList.remove('border-b-1')
            setShow(false)
        }else{
            document.getElementById(question).hidden = false;
            e.target.classList.remove('border-y-0')
            e.target.classList.add('border-b-1')
            setShow(true)
        }
        console.log(e.target.classList)

    }
    return(
        <>
            <Navbar active='resources'/>
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
                            <span>Pharetra ridiculus elit interdum lectus gravida urna ultrices id. Nulla auctor proin orci sed. Fringilla molestie convallis bibendum turpis vel sed id. Lectus sagittis ligula faucibus convallis et aenean viverra. Tortor morbi nunc mauris amet ut magnis eget curabitur. Quis nunc egestas velit ultrices nibh mattis sit amet. Dignissim sed lorem amet tellus enim adipiscing urna vestibulum varius. Neque viverra nibh lectus odio risus. Leo ullamcorper diam et feugiat lobortis. Facilisis laoreet adipiscing dignissim est diam pellentesque in nibh massa. Odio tortor vestibulum sem eu. Arcu at et amet amet sodales et tempus. Leo auctor suspendisse tincidunt elit vel.

                            Ultrices nunc posuere varius viverra convallis mauris morbi egestas donec. Elementum risus id elementum pretium maecenas tincidunt quam. At integer vel risus tristique. Et vel scelerisque ante placerat. Curabitur tempor odio varius id. Nullam ipsum pretium lorem diam. At nulla duis nam mauris tortor hac metus semper. Nascetur in aliquam hac eros integer.
                            Vulputate a augue consectetur sed tristique tempor. Ornare ut duis nec massa bibendum id facilisi. Ut sed sapien vulputate quis quis sit. Lectus risus nulla eget donec pretium pharetra aenean venenatis. Amet a ac nulla at.</span>
                        </div>
                    </div>
                    <div className=''>
                        <div className='question flex justify-between items-center px-5 py-5 cursor-pointer border border-y-0 border-grayInactive' onClick={(e)=>showAnswer('2',e)}>
                            <span className='font-semibold'>What is Databoard?</span>
                            <Image 
                            className='w-[15px] h-[10px]'
                            alt='dropdown'
                            src={Dropdown}/>
                        </div>
                        <div id='2' className='answer bg-[#F4F4F4] mt-2 text-justify p-2' hidden>
                            <span>Pharetra ridiculus elit interdum lectus gravida urna ultrices id. Nulla auctor proin orci sed. Fringilla molestie convallis bibendum turpis vel sed id. Lectus sagittis ligula faucibus convallis et aenean viverra. Tortor morbi nunc mauris amet ut magnis eget curabitur. Quis nunc egestas velit ultrices nibh mattis sit amet. Dignissim sed lorem amet tellus enim adipiscing urna vestibulum varius. Neque viverra nibh lectus odio risus. Leo ullamcorper diam et feugiat lobortis. Facilisis laoreet adipiscing dignissim est diam pellentesque in nibh massa. Odio tortor vestibulum sem eu. Arcu at et amet amet sodales et tempus. Leo auctor suspendisse tincidunt elit vel.

                            Ultrices nunc posuere varius viverra convallis mauris morbi egestas donec. Elementum risus id elementum pretium maecenas tincidunt quam. At integer vel risus tristique. Et vel scelerisque ante placerat. Curabitur tempor odio varius id. Nullam ipsum pretium lorem diam. At nulla duis nam mauris tortor hac metus semper. Nascetur in aliquam hac eros integer.
                            Vulputate a augue consectetur sed tristique tempor. Ornare ut duis nec massa bibendum id facilisi. Ut sed sapien vulputate quis quis sit. Lectus risus nulla eget donec pretium pharetra aenean venenatis. Amet a ac nulla at.</span>
                        </div>
                    </div>
                    <div>
                        <div className='question flex justify-between items-center px-5 py-5 cursor-pointer border border-y-0 border-grayInactive' onClick={(e)=>showAnswer('3',e)}>
                            <span className='font-semibold'>What is Databoard?</span>
                            <Image 
                            className='w-[15px] h-[10px]'
                            alt='dropdown'
                            src={Dropdown}/>
                        </div>
                        <div id='3' className='answer bg-[#F4F4F4] mt-2 text-justify p-2' hidden>
                            <span>Pharetra ridiculus elit interdum lectus gravida urna ultrices id. Nulla auctor proin orci sed. Fringilla molestie convallis bibendum turpis vel sed id. Lectus sagittis ligula faucibus convallis et aenean viverra. Tortor morbi nunc mauris amet ut magnis eget curabitur. Quis nunc egestas velit ultrices nibh mattis sit amet. Dignissim sed lorem amet tellus enim adipiscing urna vestibulum varius. Neque viverra nibh lectus odio risus. Leo ullamcorper diam et feugiat lobortis. Facilisis laoreet adipiscing dignissim est diam pellentesque in nibh massa. Odio tortor vestibulum sem eu. Arcu at et amet amet sodales et tempus. Leo auctor suspendisse tincidunt elit vel.

                            Ultrices nunc posuere varius viverra convallis mauris morbi egestas donec. Elementum risus id elementum pretium maecenas tincidunt quam. At integer vel risus tristique. Et vel scelerisque ante placerat. Curabitur tempor odio varius id. Nullam ipsum pretium lorem diam. At nulla duis nam mauris tortor hac metus semper. Nascetur in aliquam hac eros integer.
                            Vulputate a augue consectetur sed tristique tempor. Ornare ut duis nec massa bibendum id facilisi. Ut sed sapien vulputate quis quis sit. Lectus risus nulla eget donec pretium pharetra aenean venenatis. Amet a ac nulla at.</span>
                        </div>
                    </div>
                    <div className=''>
                        <div className='question flex justify-between items-center px-5 py-5 cursor-pointer border border-y-0 border-grayInactive' onClick={(e)=>showAnswer('4', e)}>
                            <span className='font-semibold'>What is Databoard?</span>
                            <Image 
                            className='w-[15px] h-[10px]'
                            alt='dropdown'
                            src={Dropdown}/>
                        </div>
                        <div id='4' className='answer bg-[#F4F4F4] mt-2 text-justify p-2' hidden>
                            <span>Pharetra ridiculus elit interdum lectus gravida urna ultrices id. Nulla auctor proin orci sed. Fringilla molestie convallis bibendum turpis vel sed id. Lectus sagittis ligula faucibus convallis et aenean viverra. Tortor morbi nunc mauris amet ut magnis eget curabitur. Quis nunc egestas velit ultrices nibh mattis sit amet. Dignissim sed lorem amet tellus enim adipiscing urna vestibulum varius. Neque viverra nibh lectus odio risus. Leo ullamcorper diam et feugiat lobortis. Facilisis laoreet adipiscing dignissim est diam pellentesque in nibh massa. Odio tortor vestibulum sem eu. Arcu at et amet amet sodales et tempus. Leo auctor suspendisse tincidunt elit vel.

                            Ultrices nunc posuere varius viverra convallis mauris morbi egestas donec. Elementum risus id elementum pretium maecenas tincidunt quam. At integer vel risus tristique. Et vel scelerisque ante placerat. Curabitur tempor odio varius id. Nullam ipsum pretium lorem diam. At nulla duis nam mauris tortor hac metus semper. Nascetur in aliquam hac eros integer.
                            Vulputate a augue consectetur sed tristique tempor. Ornare ut duis nec massa bibendum id facilisi. Ut sed sapien vulputate quis quis sit. Lectus risus nulla eget donec pretium pharetra aenean venenatis. Amet a ac nulla at.</span>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
  }
  
  export default Faq;
