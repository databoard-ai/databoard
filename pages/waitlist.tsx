import type { NextPage } from 'next'
import Image from 'next/image'
const Checkblue = require('../public/assets/check-square-blue.png')
const Checkwhite = require('../public/assets/check-square.png')
import Navbar from '../components/HomePages/Navbar'
import Footer from '../components/HomePages/Footer'
import Join from '../components/HomePages/Join'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import axios from 'axios';
import AlertBox from '../components/HomePages/AlertBox';
import Toast from '../components/HomePages/Toast';

type Props = {
    value: string;
}


const AIRTABLE_API_KEY = 'patjhhl6FnXz2AIY7.2f7a975da39ecf43e00c47ea3e9ff624697ab873e0c81f37408a49a4f9d72a3c';
const AIRTABLE_BASE_ID = 'appAcSrJXpkEi7tem';
const AIRTABLE_TABLE_NAME = 'Waitlist';



const Waitlist: NextPage = () => {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [buttonText, setButtonText] = useState('Proceed');
    const [buttonDisabled, setButtonDisabled] = useState(false);

    


    const [toast, setToast] = useState<{ message: string, type: string } | null>(null);

    const showToast = (message: string, type: string = 'info') => {
      setToast({ message, type });
      setTimeout(() => {
        setToast(null);
      }, 3000);
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(event.target.value);
    };


    const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setButtonDisabled(true);
        setButtonText('Loading...');
        if (!name || !email || !phone) {
        showToast('Please fill in allthe fields','warning');
            return;
        }
            try {
            await createRecord(name, email, phone);
            showToast('Thank you for joining our waitlist','success');
            
            setName("");
            setEmail("");
            setPhone("");
          } catch (error) {
            console.log("This is the error: "+error);
            showToast('Ooops, something went wrong','error');
          }
          setButtonDisabled(false);
          setButtonText('Proceed');
    };

    const createRecord = async (name:String, email:String, phone:String) => {
        const response = await axios.post(
          `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`,
          {
            fields: {
              BusinessName: name,
              Email: email,
              Phone: phone,
            },
          },
          {
            headers: {
              Authorization: `Bearer ${AIRTABLE_API_KEY}`,
              'Content-Type': 'application/json',
            },
          }
        );
      
        return response.data;
      };
  


    return (
        <>
            <Navbar />
         <div className='md:mb-48 lg:mb-96'>
         <div className='mt-12 mb-10'>
                <span className='block text-center text-[24px] text-primaryBlue font-semibold'>Join our waitlist</span>
                <span className='block text-center text-[40px] font-semibold mt-8'>We just need a
                    <span className='text-primaryBlue'> few</span> more details about your Organization</span>
                    {toast && <Toast message={toast.message} type={toast.type} />}
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4 my-10 mx-auto max-w-lg p-4 md:p-0 w-full">
                <span className='block text-center text-[20px]'>Databoard fits perfectly for organizations big and small. <br />Regardless of your budget</span>
                <div className="flex flex-row items-center gap-4">
                    <label className="flex flex-col w-full">
                        <span>Email Address</span>
                        <input type="email" name="email" value={email} onChange={handleEmailChange} required className="border-gray-400 border-2 focus:border-2 rounded-md px-2 w-full h-[48px] rounded-l-lg py-4 md:w-80  text-xs md:text-sm" />
                    </label>
                    <label className="flex flex-col w-full">
                        <span>Organization Name</span>
                        <input type="text" name="name" value={name} onChange={handleNameChange} required className="border-gray-400 border-2 focus:border-2 rounded-md px-2 w-full h-[48px] rounded-l-lg py-4 md:w-80  text-xs md:text-sm" />
                    </label>
                </div>
                <div className="flex flex-row items-center gap-4 mb-28">
                    <label className="flex flex-col w-full">
                        <span>Phone Number</span>
                        <input type="tel" name="phone" value={phone} onChange={handlePhoneChange} required className="border-gray-400 border-2 focus:border-blue-500  rounded-md px-2 w-full h-[48px] rounded-l-lg py-4 md:w-80  text-xs md:text-sm" />
                    </label>
                    <div className='flex flex-col w-full'>
                    <button type="submit" disabled={buttonDisabled} className="bg-primaryBlue hover:bg-blue-700 mt-5 text-white font-normal px-2 md:text-sm py-4 text-xs md:px-12  h-[48px] rounded-lg text-pureWhite md:w-80">{buttonText}</button>
                    </div>
                </div>
            </form>
         </div>

            <Footer />
        </>
    )
}

export default Waitlist;
