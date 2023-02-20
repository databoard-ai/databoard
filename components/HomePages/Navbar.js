import Image from "next/image"
const Logo1 = require('../../public/assets/logo-home.png')
const dropdown = require('../../public/assets/arrow-down.png')

function Navbar({active}) {
    
    if (typeof window !== 'undefined') {
        console.log('You are on the browser')
        
        let navItems = document.getElementsByClassName('nav-item')
        for (let i = 0; i < navItems.length; i++) {
            navItems[i].classList.remove('active');
        }
        if (active) {
            document.getElementById(active).classList.add('active')
            console.log(active)
        }
    }

    return (
        <div className='nav z-50 bg-[#F4F4F4] h-[90px] flex items-center justify-between sticky top-0 px-[5px] md:px-[50px]'>
            <div className=''>
                <a href='#'>
                    <Image
                    src={Logo1}
                    alt = 'Logo'
                    />
                </a>
            </div>
            <div className='hidden lg:flex'>
                <a id="home" href="#" className='nav-item mx-[15px]'>Home</a>
                <a id="board" href="#" className='nav-item mx-[15px]'>Board</a>
                <a id="pricing" href="#" className='nav-item mx-[15px]'>Pricing</a>
                <a id="resources" href="#" className='nav-item mx-[15px]'>Resources</a>
                <a id="about" href="#" className='nav-item mx-[15px]'>About</a>
            </div>
            <div className='hidden lg:flex gap-x-3'>
                <a href="#" className='flex border border-primaryBlue rounded-[4px] h-[50px] w-[100px]'><span className='block m-auto text-primaryBlue'>Log In</span></a>
                <a href="#" className='flex border border-primaryBlue rounded-[4px] h-[50px] w-[100px] bg-primaryBlue'><span className='block m-auto text-pureWhite'>Get Started</span></a>
            </div>
        </div>
    )
}

export default Navbar