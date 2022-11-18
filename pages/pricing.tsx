import type { NextPage } from 'next'
import AuthButton from '../components/AuthButton'
import Image from 'next/image'
const Logo1 = require('../public/assets/logo-home.png')
const Banner1 = require('../public/assets/banner-home.png')
const Iphone = require('../public/assets/iphone.png')
const Ellipses = require('../public/assets/ellipses.png')
const Playstore = require('../public/assets/playstore.png')
const Appstore = require('../public/assets/applestore.png')
const Cta2 = require('../public/assets/cta2-img.png')
const PhoneIco = require('../public/assets/phone-ico.png')
const Security = require('../public/assets/Privacy.png')
const Visual = require('../public/assets/Visual.png')
const Connected = require('../public/assets/Connected.png')
const Avatar = require('../public/assets/avatar.png')
import Navbar from '../components/HomePages/Navbar'
import Footer from '../components/HomePages/Footer'
import { connected } from 'process'
import Join from '../components/HomePages/Join'
import Brands from '../components/HomePages/Brands'

const Pricing: NextPage = () => {
    return(
        <>
            <Navbar active='pricing'/>
            <Brands/>
            <Join/>
            <Footer />
        </>
    )
  }
  
  export default Pricing;
