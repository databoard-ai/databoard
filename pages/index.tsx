import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/NavBar'
import AuthButton from '../components/AuthButton'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Databoard</title>
        <link rel="icon" href="/fav.png" />
      </Head>
<Navbar/>

<div>
  <AuthButton title="Create new tag"/>
</div>
    </div>
  )
}

export default Home
