import type { NextPage } from 'next'
import AuthButton from '../components/AuthButton'
import Image from 'next/image'
const bg_Img = require('../public/assets/setup_bg.png')
import AuthInput from '../components/AuthInput'
import AuthDropdown from '../components/AuthDropdown'

const Setup: NextPage = () => {
    return(
        <>
            <div className='bg-primaryBlue h-[1117px] font-montserrat'>
                <form className='bg-pureWhite h-[817px] w-[539px] absolute top-[150px] right-[170px] z-[1000]'>
                    <h1 className='text-[48px] font-medium ml-[88px] mt-[35px]'>Set up <br />Databoard</h1>
                    <p className='mx-[88px] mb-[35px] text-[#121212] text-opacity-[0.7]'>Your frst time? Let’s help you set up your databoard</p>
                    <AuthInput inpName={'name'} title={'Name of organization'}/>
                    <AuthDropdown inpName={'type'} title={'Type of organization'} options={[{name:'Item 1', value:'1'}, {name:'Item 2', value:'2'}, {name:'Item 3', value:'3'}]}/>
                    <AuthDropdown inpName={'type'} title={'Location'} options={[{name:'Item 1', value:'1'}, {name:'Item 2', value:'2'}, {name:'Item 3', value:'3'}]}/>
                    <div className='flex justify-center mb-[40px]'>
                        <AuthButton title='Setup databoard'/>
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
