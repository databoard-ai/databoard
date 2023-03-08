import type { NextPage } from 'next'
import AuthButton from '../components/AuthButton'
import Image from 'next/image'
const checkSquare = require('../public/assets/check-square.png')
const square = require('../public/assets/square.png')
const squareChecked = require('../public/assets/check.png')
const alertCircle = require('../public/assets/alert-circle.png')
const alertCircleDark = require('../public/assets/alert-circle-dark.png')
const bg_Img = require('../public/assets/setup_bg.png')
import AuthInput from '../components/AuthInput'
import AuthDateInput from '../components/AuthDatePicker'
import AuthTimeInput from '../components/AuthTimePicker'
import { useState } from 'react'

const CreateTag: NextPage = () => {
    const oldLimit = Error.stackTraceLimit;
Error.stackTraceLimit = 10000;
    
    const [checkSecondary, setCheckSecondary] = useState(false);

    const handleCheck = () => {
        if (checkSecondary) {
            document.getElementById('check')?.classList.remove('hidden')
            document.getElementById('check')?.classList.add('inline')
            document.getElementById('checked')?.classList.add('hidden')
            document.getElementById('checked')?.classList.remove('inline')
            setCheckSecondary(false)
        }else{
            document.getElementById('check')?.classList.add('hidden')
            document.getElementById('check')?.classList.remove('inline')
            document.getElementById('checked')?.classList.remove('hidden')
            document.getElementById('checked')?.classList.add('inline')
            setCheckSecondary(true)
        }
    }
    return(
        <>
            <div className='bg-primaryBlue h-[1117px] font-montserrat'>
                <form className='bg-pureWhite h-[817px] w-[539px] absolute top-[150px] right-[170px] z-[1000]'>
                    <h1 className='text-[48px] font-medium mx-[88px] mt-[35px]'>Create an <br/>event tag</h1>
                    <p className='mx-[88px] mb-[35px] text-[#121212] text-opacity-[0.7]'>Create a tag for your event to help you <br/>acess data of your attendees</p>
                    <AuthInput inpName={'name'} title={'Name'}/>
                    <div className='flex mx-[88px] justify-between'>
                        <AuthDateInput inpName={'start-date'} title={'Start Date'}/>
                        <AuthTimeInput inpName={'start-date'} title={'Start Time'}/>
                    </div>
                    <div className='flex mx-[88px] justify-between'>
                        <AuthDateInput inpName={'end-date'} title={'End Date'}/>
                        <AuthTimeInput inpName={'end-date'} title={'End Time'}/>
                    </div>
                    <div className='flex mx-[88px] mb-[25px] justify-between'>
                        <div className='flex items-center'>
                            <Image
                            className='inline mr-[5px] cursor-not-allowed'
                            alt=''
                            src={checkSquare}
                            />
                            <span className='text-[#C3C3C3]'>Primary Data</span>
                            <Image
                            className='inline ml-[5px]'
                            alt=''
                            src={alertCircle}
                            />
                        </div>
                        <div className='flex items-center'>
                            <Image
                            id='check'
                            className='inline mr-[5px] cursor-pointer'
                            alt=''
                            src={square}
                            onClick={handleCheck}
                            />
                            <Image
                            id='checked'
                            className='hidden mr-[5px] cursor-pointer'
                            alt=''
                            src={squareChecked}
                            width='24'
                            height='24'
                            onClick={handleCheck}
                            />
                            <span className='text-[#121212]'>Secondary Data</span>
                            <Image
                            className='inline ml-[5px]'
                            alt=''
                            src={alertCircleDark}
                            />
                        </div>
                    </div>
                    <div className='flex justify-center mb-[40px]'>
                        <AuthButton title='Create new tag'/>
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
  
  export default CreateTag;
