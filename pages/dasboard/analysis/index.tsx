import Sidebar from '../../../components/dashboard/Sidebar'
import Navbar from '../../../components/NavBar'
import HorizontalBar from '../../../components/dashboard/HorizontalBar'
import {MdInfo, MdOutlinePeopleAlt, MdOutlineAccessTime, MdOutlineGridView, MdOutlineSkipPrevious, MdOutlineSkipNext} from 'react-icons/md'
import {GrClose,GrLinkPrevious,GrLinkNext} from 'react-icons/gr'
import {FcPrevious, FcNext} from 'react-icons/fc'
import {RxCountdownTimer} from 'react-icons/rx'
import {TfiMedall} from 'react-icons/tfi'
import LineChart from '../../../components/dashboard/Line'
import { useState } from 'react'

const AnalysisIndex = ()=>{

    const [overlay, setOverlay] = useState(false)

    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Product 1',
            backgroundColor: 'rgba(99, 171, 253, 1)',
            borderColor: 'rgba(22, 91, 170, 1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(99, 171, 253, .9)',
            hoverBorderColor: 'rgba(22, 91, 170, .9)',
            barThickness:'20',
            data: [65, 59, -80, 81, 56, 55, -40]
          }
        ]
    }

    const options = {indexAxis: 'y'}

    const dataMixed = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Product 1',
            backgroundColor: 'rgba(161, 85, 185, 1)',
            borderColor: 'rgba(161, 85, 185, 1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(161, 85, 185, .9)',
            hoverBorderColor: 'rgba(161, 85, 185, .9)',
            barThickness:'20',
            data: [55, 69, -70, 91, 56, 45, -50]
          },
          {
            label: 'Product 2',
            // type:'line',
            backgroundColor: 'rgba(99, 171, 253, 1)',
            borderColor: 'rgba(22, 91, 170, 1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(99, 171, 253, .9)',
            hoverBorderColor: 'rgba(22, 91, 170, .9)',
            barThickness:'20',
            data: [65, 59, -80, 81, 56, 55, -40]
          }
        ]
    }

    const optionsMixed = {}

    const hideOverlay = ()=>{
        setOverlay(false)
    }
    const showOverlay = ()=>{
        setOverlay(true)
    }

    return(
        <>
        <Navbar/>
        <Sidebar/>
        <div className='ml-[300px] p-10'>
            <div className='flex justify-around mb-10 mt-5'>
                <div>
                    <div className='text-[#FEFEFE] bg-[#9BC1F9] rounded-full p-4 w-[65px] flex justify-center'>
                        <MdOutlinePeopleAlt size={30}/>
                    </div>
                    <p className='text-center m-auto mt-1 text-blackMain'>Gender</p>
                </div>
                <div>
                    <div className='text-[#FEFEFE] bg-[#7BE098] rounded-full p-4 w-[65px] flex justify-center'>
                        <RxCountdownTimer size={30}/>
                    </div>
                    <p className='text-center m-auto mt-1 text-blackMain'>Age</p>
                </div>
                <div>
                    <div className='text-[#FEFEFE] bg-[#7BE098] rounded-full p-4 w-[65px] flex justify-center'>
                        <MdOutlineAccessTime size={30}/>
                    </div>
                    <p className='text-center m-auto mt-1 text-blackMain'>Time</p>
                </div>
                <div>
                    <div className='text-[#FEFEFE] bg-[#7BE098] rounded-full p-4 w-[65px] flex justify-center'>
                        <MdOutlineGridView size={30}/>
                    </div>
                    <p className='text-center m-auto mt-1 text-blackMain'>Clock graph</p>
                </div>
                <div>
                    <div className='text-[#FEFEFE] bg-[#7BE098] rounded-full p-4 w-[65px] flex justify-center'>
                        <TfiMedall size={30}/>
                    </div>
                    <p className='text-center m-auto mt-1 text-blackMain'>Ratings</p>
                </div>
            </div>
            <div className='p-5 mb-5' style={{boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)'}}>
                <div className='flex justify-between mx-10 text-[#828282] mb-3'>
                    <div>
                        <p>PRIMARY TEXT</p>
                        <p>Secondary text</p>
                    </div>
                    <div>
                        <MdInfo size={40} color='#BDBDBD'/>
                    </div>
                </div>
                <hr className='text-[#ECECEC]' />
                <div className='mt-5'>
                    <HorizontalBar data={data} options={options} />
                </div>
            </div>

            <div className='p-5' style={{boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)'}}>
                <div className='flex justify-between mx-10 text-[#828282] mb-3'>
                    <div>
                        <p>PRIMARY TEXT</p>
                        <p>Secondary text</p>
                    </div>
                    <div>
                        <MdInfo size={40} color='#BDBDBD'/>
                    </div>
                </div>
                <hr className='text-[#ECECEC]' />
                <div className='mt-5'>
                    <LineChart data={dataMixed} options={optionsMixed}/>
                </div>
            </div>

            <div className='mt-10 bg-[#F4F4F4] p-5 max-h-[250px] overflow-auto'>
                <button className='bg-[#7BE098] p-2 rounded text-pureWhite px-4'>
                    <span className=''>Insights</span>
                </button>
                <div className='mt-5'>
                    <div className='flex justify-between items-center mb-3'>
                        <p className='truncate'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur alias, odio necessitatibus quaerat harum nobis autem voluptates exercitationem quibusdam eius libero officia, quidem provident, quia vel deleniti. Quae, amet nemo.</p>
                        
                        <button className='bg-[#FA4F4F] p-2 rounded text-pureWhite px-4 w-[170px]'>
                            See more
                        </button>
                    </div>
                    <div className='flex justify-between items-center mb-3'>
                        <p className='truncate'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur alias, odio necessitatibus quaerat harum nobis autem voluptates exercitationem quibusdam eius libero officia, quidem provident, quia vel deleniti. Quae, amet nemo.</p>
                        
                        <button className='bg-[#FA4F4F] p-2 rounded text-pureWhite px-4 w-[170px]'>
                            See more
                        </button>
                    </div>
                    <div className='flex justify-between items-center mb-3'>
                        <p className='truncate'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur alias, odio necessitatibus quaerat harum nobis autem voluptates exercitationem quibusdam eius libero officia, quidem provident, quia vel deleniti. Quae, amet nemo.</p>
                        
                        <button className='bg-[#FA4F4F] p-2 rounded text-pureWhite px-4 w-[170px]' onClick={showOverlay}>
                            See more
                        </button>
                    </div>
                </div>
            </div>

            {overlay && <div className='w-full h-[100%] bg-[#F4F4F4] z-[1000] pl-[150px] overflow-scroll' style={{position:'fixed',top:'0px',left:'0px'}}>
                <div className='flex justify-between p-5 pl-0'>
                    <p className='text-[40px] font-bold'>Insights</p>
                    <GrClose className='cursor-pointer' onClick={hideOverlay} size={30}/>
                </div>
                <div className='border border-[#C3C3C3] mr-[150px] p-5'>
                    <pre className='whitespace-pre-wrap' style={{lineHeight:'30px'}}>
                        We believe      that understanding the human genome is key to unlocking breakthroughs in medicine, agriculture, and biotechnology.
                        

                        That's why we're committed to supporting the next generation of genomic researchers and scientists through our scholarship program. Whether you're an undergraduate student or pursuing advanced studies, we offer financial assistance to help you achieve your academic goals and make meaningful contributions to the field.
                    </pre>
                </div>
                <div className='mt-5 flex justify-between mr-[150px]'>
                    <div className='bg-[#7BE098] p-3 w-[70%]'>
                        <span className='font-bold text-[20px] text-pureWhite'>Remark</span>
                    </div>
                    <div className='btn-toggle-insight flex'>
                        <button className='p-3 text-pureWhite inactive rounded w-[120px] mr-1 flex justify-center items-center'>
                            <MdOutlineSkipPrevious size={20} className='mr-1'/>
                            <span>Previous</span>
                        </button>
                        <button className='p-3 text-pureWhite active rounded w-[120px] flex justify-center items-center'>
                            <span>Next</span>
                            <MdOutlineSkipNext size={20} className='ml-1'/>
                        </button>
                    </div>
                </div>
                <div className='mt-5 flex justify-center mr-[150px]'>
                    <button className='p-5 px-10 bg-blackMain text-pureWhite rounded'>
                        Generate Suggestions
                    </button>
                </div>
                <div className='mr-[150px] mt-20'>
                    <div className='border border-[#C3C3C3] p-5'>
                        <pre className='whitespace-pre-wrap' style={{lineHeight:'30px'}}>
                            We believe      that understanding the human genome is key to unlocking breakthroughs in medicine, agriculture, and biotechnology.
                            

                            That's why we're committed to supporting the next generation of genomic researchers and scientists through our scholarship program. Whether you're an undergraduate student or pursuing advanced studies, we offer financial assistance to help you achieve your academic goals and make meaningful contributions to the field.
                        </pre>
                    </div>
                    <p className='text-right text-[#838282]'>All suggestions are AI generated </p>
                </div>
            </div>}
        </div>
        </>
    )
}

export default AnalysisIndex