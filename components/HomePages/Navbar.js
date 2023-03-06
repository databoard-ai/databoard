import Image from "next/image"
import Link from "next/link";
import { useRouter } from "next/router";
import {useState} from 'react'
const Logo1 = require('../../public/assets/logo-home.png')
const dropdown = require('../../public/assets/arrow-down.png')
import { FiMenu, FiPlus, FiMinus } from 'react-icons/fi';
import {GrClose} from 'react-icons/gr'


function Navbar() {

    const location = useRouter()

    const [showdropdownMenu, setShowdropdownMenu] = useState(false)
    const [showSideMenu, setShowSideMenu] = useState(false)

    const showDdmenu = ()=> {
        setShowdropdownMenu(!showdropdownMenu)
    }

    const showSmenu = ()=> {
        setShowSideMenu(!showSideMenu)
    }

    return (
        <>
        <div className='font-montserrat nav z-20 bg-[#F4F4F4] h-[90px] flex items-center justify-between sticky inset-x-0 top-0 px-[5px] md:px-[50px]'>
            <div className=''>
                <Link href='/'>
                    <Image
                    src={Logo1}
                    alt = 'Logo'
                    />
                </Link>
            </div>
            <div className='hidden lg:flex'>
                <Link id="home" href="/" className={location.pathname=="/"?'mx-[15px] active':'mx-[15px] hover:text-primaryBlue'}>Home</Link>
                <Link id="board" href="#" className='mx-[15px] hover:text-primaryBlue'>Board</Link>
                <Link id="pricing" href="/pricing" className={location.pathname=="/pricing"?'mx-[15px] active':'mx-[15px] hover:text-primaryBlue'}>Pricing</Link>
                <div className="overflow-hidden">
                    <div className={location.pathname=='/blog'||location.pathname=='/faqs'?"flex items-center hover:text-primaryBlue cursor-pointer active":"flex items-center hover:text-primaryBlue cursor-pointer"} onClick={showDdmenu}>
                        <span className="mr-1 block">Resources</span>
                        <div className={showdropdownMenu?"hidden":""}>
                            <FiPlus size={20}/>
                        </div>
                        <div className={showdropdownMenu?"":"hidden"}>
                            <FiMinus size={20}/>
                        </div>
                    </div>
                    <div className={showdropdownMenu? "absolute mt-5 w-[150px] z-1 bg-defaultBackground":"hidden"}>
                        <ul className="">
                            <li className="hover:text-primaryBlue mb-3 ml-2">
                                <Link href="/blog" className={location.pathname=='/blog'?"block active":'block'}>Blog</Link>
                            </li>
                            <li className="hover:text-primaryBlue ml-2">
                                <Link href="/faqs" className={location.pathname=='/faqs'?"block active":'block'}>FAQs</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <Link id="about" href="/about" className={location.pathname=="/about"?'mx-[15px] active':'mx-[15px] hover:text-primaryBlue'}>About Us</Link>
            </div>
            <div className='hidden lg:flex gap-x-3'>
                <a href="#" className='btn flex border border-primaryBlue rounded-[4px] h-[50px] w-[100px]'><span className='block m-auto text-primaryBlue'>Log In</span></a>
                <a href="#" className='btn flex border border-primaryBlue rounded-[4px] h-[50px] w-[100px] bg-primaryBlue'><span className='block m-auto text-pureWhite'>Get Started</span></a>
            </div>
            <div className={showSideMenu?"hidden lg:hidden":"flex cursor-pointer lg:hidden"} onClick={showSmenu}>
                <FiMenu size={30}/>
            </div>
            <div className={showSideMenu?"flex cursor-pointer lg:hidden":"hidden lg:hidden"} onClick={showSmenu}>
                <GrClose size={30}/>
            </div>
        </div>
        <div id="side-nav" className={showSideMenu?"nav fixed top-0 left-[0px] w-[250px] h-full z-[1000] bg-defaultBackground overflow-scroll ease-in-out duration-700":"fixed top-0 left-[-250px] w-[250px] h-full z-[1000] bg-defaultBackground duration-700 ease-in-out"}>
            <div className='mt-7 mb-8'>
                <Link href='/'>
                    <Image
                    src={Logo1}
                    alt = 'Logo'
                    />
                </Link>
            </div>
            <ul className="text-[18px] ml-5 mt-2">
                <li className="mb-5 hover:text-primaryBlue">
                    <Link href="/" className={location.pathname=='/'?"block active":'block'}>Home</Link>
                </li>
                <li className="mb-5 hover:text-primaryBlue">
                    <Link href="#" className={location.pathname=='#'?"block active":'block'}>Board</Link>
                </li>
                <li className="mb-5 hover:text-primaryBlue">
                    <Link href="/pricing" className={location.pathname=='/pricing'?"block active":'block'}>Pricing</Link>
                </li>
                <li className="mb-5">
                    <div className={location.pathname=='/blog'||location.pathname=='/faqs'?"flex items-center mb-5  hover:text-primaryBlue cursor-pointer active":"flex items-center mb-5  hover:text-primaryBlue cursor-pointer"} onClick={showDdmenu}>
                        <span className="mr-5 block">Resources</span>
                        <div className={showdropdownMenu?"hidden":""}>
                            <FiPlus size={20}/>
                        </div>
                        <div className={showdropdownMenu?"":"hidden"}>
                            <FiMinus size={20}/>
                        </div>
                    </div>
                    <div className={showdropdownMenu? "ml-5":"hidden"}>
                        <ul className="">
                            <li className="mb-5 hover:text-primaryBlue">
                                <Link href="/blog" className={location.pathname=='/blog'?"block active":'block'}>Blog</Link>
                            </li>
                            <li className="mb-5 hover:text-primaryBlue">
                                <Link href="/faqs" className={location.pathname=='/faqs'?"block active":'block'}>FAQs</Link>
                            </li>
                        </ul>
                    </div>
                </li>
                <li className="mb-5 hover:text-primaryBlue">
                    <Link href="/about" className={location.pathname=='/about'?"block active":'block'}>About Us</Link>
                </li>
            </ul>
            <div className='m-auto mb-5'>
                <a href="#" className='btn flex border border-primaryBlue rounded-[4px] h-[40px] w-[100px] m-auto mb-2'><span className='block m-auto text-primaryBlue'>Log In</span></a>
                <a href="#" className='btn flex border border-primaryBlue rounded-[4px] h-[40px] w-[100px] m-auto bg-primaryBlue'><span className='block m-auto text-pureWhite'>Get Started</span></a>
            </div>
        </div>
        </>
    )
}

export default Navbar