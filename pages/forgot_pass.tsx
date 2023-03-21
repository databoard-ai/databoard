import type { NextPage } from 'next'
import AuthButton from '../components/AuthButton'
import AuthInput from '../components/AuthInput'
import Image from 'next/image'
const bg_Img = require('../public/assets/forgot_password_bg.png')

const ForgotPass: NextPage = () => {
    return(
        <>
            <div className='bg-primaryBlue h-[1117px] font-montserrat'>
                <form className='bg-pureWhite h-[817px] w-[539px] absolute top-[150px] right-[170px] z-[1000]'>
                    <h1 className='text-[48px] font-medium ml-[88px] mt-[35px]'>Forgot <br/>Password?</h1>
                    <p className='ml-[88px] mb-[35px] text-[#121212] text-opacity-[0.7]'>Let's help you recover your account.</p>
                    <AuthInput inpName={'email'} title={'Email or Username'}/>
                    <div className='flex justify-center mb-[24px]'>
                        <AuthButton title='Reset password'/>
                    </div>

                    <div className="mx-[129px] flex justify-center">
                        <span className='text-center text-[#121212] text-opacity-[0.7]'>An email would be sent to reset your password</span>
                    </div>
                </form>
                <Image
                    className='pt-[110px] ml-[70px]'
                    alt='Sign in'
                    src={bg_Img}
                />
            </div>
        </>
    )
  }
  
  export default ForgotPass