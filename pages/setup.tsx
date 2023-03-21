import type { NextPage } from 'next'
import AuthButton from '../components/AuthButton'
import Image from 'next/image'
const bg_Img = require('../public/assets/setup_bg.png')
import AuthInput from '../components/AuthInput'
import AuthDropdown from '../components/AuthDropdown'
import { useState } from 'react'

const Setup: NextPage = () => {
    const oldLimit = Error.stackTraceLimit;
Error.stackTraceLimit = 10000;

    const [showForm, setShowform] = useState(false)
    
    const handleShow = (e)=>{
        e.preventDefault()
        setShowform(!showForm)
    }
    return(
        <>
            <div className='bg-primaryBlue h-[1117px] font-montserrat'>
                <form className={!showForm ? 'bg-pureWhite h-[817px] w-[539px] absolute top-[150px] right-[170px] z-[1000]':'hidden'} onSubmit={handleShow}>
                    <h1 className='text-[48px] font-medium ml-[88px] mt-[35px]'>Set up <br />Databoard</h1>
                    <p className='mx-[88px] mb-[35px] text-[#121212] text-opacity-[0.7]'>Your frst time? Let’s help you set up your databoard</p>
                    <AuthInput inpName={'name'} title={'Name of organization'}/>
                    <AuthDropdown inpName={'type'} title={'Type of organization'} options={[{name:'Item 1', value:'1'}, {name:'Item 2', value:'2'}, {name:'Item 3', value:'3'}]}/>
                    <AuthDropdown inpName={'type'} title={'Location'} options={[{name:'Item 1', value:'1'}, {name:'Item 2', value:'2'}, {name:'Item 3', value:'3'}]}/>
                    <div className='flex justify-center mb-[40px]' >
                        <AuthButton title='Continue'/>
                    </div>
                </form>
                <form className={showForm ? 'bg-pureWhite h-[817px] w-[539px] absolute top-[150px] right-[170px] z-[1000]':'hidden'}>
                    <h1 className='text-[48px] font-medium ml-[88px] mt-[35px]'>Set up <br />Databoard</h1>
                    <p className='mx-[88px] mb-[35px] text-[#121212] text-opacity-[0.7]'>Your Account Setup is almost Complete...</p>
                    <AuthInput inpName={'no_employees'} title={'Number of Employees'}/>
                    <AuthInput inpName={'no_branches'} title={'Number of Branches'}/>  
                    <div className='flex justify-center mb-[40px]'>
                        <AuthButton title='Finish'/>
                    </div>
                </form>
                <Image
                    className='pt-[149px] ml-[5px]'
                    alt='Sign in'
                    src={bg_Img}
                />
            </div>
        </>
    )
  }
  
  export default Setup;
