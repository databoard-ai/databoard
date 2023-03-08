import type { NextPage } from 'next'
import AuthButton from '../components/AuthButton'
import Image from 'next/image'
const googleLogo = require('../public/assets/flat-color-icons_google.png')
const facebookLogo = require('../public/assets/logos_facebook.png')
const bg_Img = require('../public/assets/sign in.png')
import AuthInput from '../components/AuthInput'

const Login: NextPage = () => {
    const oldLimit = Error.stackTraceLimit;
Error.stackTraceLimit = 10000;
    return(
        <>
            <div className='bg-primaryBlue h-[1117px] font-montserrat'>
                <form className='bg-pureWhite h-[817px] w-[539px] absolute top-[150px] right-[170px] z-[1000]'>
                    <h1 className='text-[48px] font-medium ml-[88px] mt-[35px]'>Sign in</h1>
                    <p className='ml-[88px] mb-[35px] text-[#121212] text-opacity-[0.7]'>Enter your Provezone Databoard</p>
                    <AuthInput inpName={'email'} title={'Email or Username'}/>
                    <AuthInput inpName={'password'} title={'Password'}/>
                    <div className='flex mx-[88px] mb-[32px] justify-between'>
                        <div className='remember-me flex items-center'>
                            <input type='checkbox'id='check' className='w-[24px] h-[24px]' />
                            <label htmlFor="check" className='ml-[16px] text-[#121212] text-opacity-[0.7]'>Remember me</label>
                        </div>

                        <div className='forgot-pass'>
                            <a href='#' className='text-[16px] text-primaryBlue'>Forgot password?</a>
                        </div>
                    </div>
                    <div className='flex justify-center mb-[40px]'>
                        <AuthButton title='Sign in'/>
                    </div>

                    <div className="mx-[88px] relative flex py-5 items-center">
                        <div className="flex-grow border-t border-[#121212] border-opacity-[0.7]"></div>
                        <span className="flex-shrink mx-4 text-[#121212] text-opacity-[0.7]">Or login with</span>
                        <div className="flex-grow border-t border-[#121212] border-opacity-[0.7]"></div>
                    </div>
                    <div className='mx-[88px] flex justify-center'>
                        <a href='#' className='mr-[20px]'><Image
                            className='inline transition duration-500 ease-in-out transform hover:scale-110'
                            alt='filter'
                            src={googleLogo}
                            height='30.15'
                            width='30.15'
                        /></a>
                        <a href='#'><Image
                            className='inline transition duration-500 ease-in-out transform hover:scale-110'
                            alt='filter'
                            src={facebookLogo}
                            height='30.15'
                            width='30.15'
                        /></a>
                    </div>
                </form>
                <Image
                    className='pt-[149px] ml-[88px]'
                    alt='Sign in'
                    src={bg_Img}
                />
            </div>
        </>
    )
  }
  
  export default Login;
