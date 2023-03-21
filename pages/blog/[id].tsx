import type { NextPage } from 'next'
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

const singleBlogs: NextPage = () => {
    return(
        <>
            <Navbar/>
            <div className='blogs px-3 sm:px-12 my-12'>
                <div className='header text-center'>
                    <span className='block text-[32px] lg:text-[50px] text-primaryBlue font-semibold'>Let's Read!!</span>
                    <span className='block text-[23px] lg:text-[28px] font-bold'>Data Culture in Africa - The Past the Present and the Databoard</span>
                    <div className='flex gap-5 justify-center mt-5'>
                        <span className='block bg-primaryBlue bg-opacity-10 p-2 rounded-[20px] text-primaryBlue text-[13px]'>Education</span>
                        <span className='block bg-primaryBlue bg-opacity-10 p-2 rounded-[20px] text-primaryBlue text-[13px]'>History</span>
                    </div>                   
                </div>
                <div className='content mt-3'>
                    <div className='h-[300px] overflow-hidden'>
                        <Image 
                            className='m-auto h-[150%]'
                            src={Blog1}
                            alt='blog'
                        />
                    </div>

                    <div className='flex justify-center mt-5'>
                        <p className='m-auto font-sans font-semibold italic'>by Olusegun Israel</p>
                    </div>

                    <div className='mx-2 sm:mx-6 lg:mx-12 mt-5 text-[16px] sm:text-[20px] text-justify text-gray-700'>
                        <blockquote>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro placeat atque eum nulla voluptates esse odio quam minus aliquam, neque, ad facere officia quidem soluta? Impedit corrupti officia aspernatur. Inventore.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ipsum blanditiis quo porro sunt numquam enim ipsa ducimus, debitis dolore beatae earum ab, maiores non. Enim dolores optio nesciunt voluptatibus?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque expedita, laboriosam soluta corporis corrupti fugiat obcaecati illo ullam aliquid tempora eum quos earum, nisi ipsam! Ipsa voluptatum non quaerat. Itaque!
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi accusamus sed numquam consequuntur, inventore quae architecto veniam saepe temporibus vitae incidunt quos quam. Aperiam dolorum laborum blanditiis non possimus atque.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, voluptas iusto eaque necessitatibus aspernatur esse non enim optio quam molestias magni, expedita qui aliquid maxime quas corporis, neque quae modi.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima mollitia nemo tempore accusamus. Recusandae aperiam voluptate animi vitae delectus, nobis obcaecati officia temporibus blanditiis perferendis quaerat maxime similique facilis repellendus?
                        </blockquote>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
  }
  
  export default singleBlogs;
