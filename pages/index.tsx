import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/NavBar'
import AuthButton from '../components/AuthButton'
import SplitButton from '../components/SplitButton'
import Login from './login'
import ForgotPass from './forgot_pass'
import Setup from './setup'
import CreateTag from './create_tag'
import Index from './home'
import Pricing from './pricing'
import About from './about'
import Blogs from './blogs'
import Faq from './faq'
const sendIcon = require('../public/assets/pie-chart.png')
const filterIcon = require('../public/assets/filter_icon.png')
const downChevronIcon = require('../public/assets/down_chevron.png')

const Home: NextPage = () => {
  return (
    // <div className="font-montserrat">
    //   <Head>
    //     <title>Databoard</title>
    //     <link rel="icon" href="/fav.png" />
    //   </Head>
    //   <Navbar />
    //   <div className="bg-defaultBackground w-full mx-[34px] h-[900px]">
    //     <div className="flex">
    //       <div className="w-full h-[120px] flex py-[30px] px-[24px] gap-x-60">
    //         <div className="bg-pureWhite w-[127.17px] h-[28px] flex items-center py-[4px] my-4 hover:scale-105 transition transform duration-200 ease-out">
    //           <div className=" mx-2">
    //             <Image
    //               alt='filter'
    //               src={filterIcon}
    //               height='9'
    //               width='9.17'
    //               color='#4283E4'
    //             />
    //           </div>
    //           <p className="text-[16px] text-primaryBlue text-center">Add Filter</p>
    //           <div className=" mx-2 items-center">
    //             <Image
    //               alt='chevron'
    //               src={downChevronIcon}
    //               height='6'
    //               width='6'
    //               color='#4283E4'
    //             />
    //           </div>
    //         </div>
    //         <div className=''>
    //           <SplitButton title="Broadcast Message" icon={sendIcon} color="primaryBlue" />
    //         </div>
    //         <div className="bg-pureWhite w-[164px] h-[60px] flex items-center py-[4px] my-1 rounded-r-lg hover:scale-105 transition transform duration-200 ease-out">
    //           <p className="text-[16px] text-inactiveText text-center px-2 font-normal">Download</p>
    //           <div className=" mx-2 flex hover:border-x-2 hover:border-y-2 hover:border-primaryBlue py-2 px-1">
    //             <p className="text-[14px] text-inactiveText text-center px-2 font-light">CSV</p>
    //             <div className='relative '>
    //               <Image
    //                 alt='chevron'
    //                 src={downChevronIcon}
    //                 height='6'
    //                 width='6'
    //                 color='#4283E4'
    //                 className=' align-top '
    //               />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>

    //   </div>
    //   <div>
    //     <AuthButton title="Create new tag" />
    //   </div>
    //   <button  title="Contact Sale"
    //     className="fixed z-90 bottom-10 right-8 bg-blue-600 w-20 h-20 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-blue-700 hover:drop-shadow-2xl hover:animate-bounce duration-300">&#9993;</button>
    // </div>
    <div className="font-montserrat">
      <Head>
        <title>Databoard</title>
        <link rel="icon" href="/fav.png" />
      </Head>
      {/* <Login/> */}
      {/* <ForgotPass/> */}
      {/* <Setup/> */}
      {/* <CreateTag/> */}
      {/* <Index/> */}
      {/* <Pricing/> */}
      {/* <About/> */}
      {/* <Blogs/> */}
      <Faq/>
    </div>
  )
}

export default Home
