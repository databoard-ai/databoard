import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/NavBar'
import DataOptionsSection from '../components/DataOptionsSection'
import ViewTagBody from '../components/ViewTagBody'
import DataboardTable from '../components/DataboardTable'
import MessageModal from '../components/MessageModal'
import SendBroadcastButton from '../components/buttons/SendBroadcastButton'
import DownloadDropDown from '../components/DownloadDropDown'
import FilterDropDown from '../components/FilterDropDown'
import ClearFilterButton from '../components/ClearFilterButton'
import { useState } from 'react'
import Table from '../components/Table'
import  MOCK_DATA from '../components/MOCK_DATA.json'
import ContactDetailsModal from '../components/ContactDetailsModal'



const Home: NextPage = () => {
  const [showModal, setShowModal] = useState(false)
  
 const data= MOCK_DATA
  const handleOnClose = () => setShowModal(false)

  
  return (
    <>
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>Databoard</title>
        <link rel="icon" href="/fav.png" />
      </Head>
      <div className="font-montserrat h-full">
      <Navbar />
      <div className="">
       <div>
       <div className=" h-[120px] flex py-[30px] mx-[24px] px-4 justify-between bg-defaultBackground">
          <div className='flex justify-between items-center'>
            <div className='mr-2'>
              <FilterDropDown />
            </div>
            <div className='mr-2'>
              <ClearFilterButton />
            </div>
          </div>
          <div className='flex justify-between items-center'>
            <div className=' mr-4'>
              <SendBroadcastButton title="Broadcast Message" color="primaryBlue" onPressed={() => setShowModal(true)} />
            </div>
            <DownloadDropDown />
          </div>
        </div>
       </div>
        <Table/>
        {/* <DataboardTable /> */}
      </div>
      <MessageModal visible={showModal} onClose={handleOnClose} />
     
    </div>
    </>
  )
}

export default Home
