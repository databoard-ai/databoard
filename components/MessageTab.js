import React,{useState} from "react";
import SendMessageButton from '../components/buttons/SendMessageButton'
import ScheduleMessageButton from '../components/buttons/ScheduleMessageButton'

const Tabs = ({ color }) => {
    const [openTab, setOpenTab] = React.useState(1);
    const  [selectedContacts, selectContacts]=useState([
        {  "id":"1",
            "short_name":"JS",
            "full_name":"Jilang Stanley"
        },
        {
            "id":"2",
            "short_name":"JS",
            "full_name":"Jilang Stanley"
        },
//         {"id":"3",
//             "short_name":"JS",
//             "full_name":"Jilang Stanley"
//         },
//         {
//             "id":"4",
//             "short_name":"JS",
//             "full_name":"Jilang Stanley"
//         },
//         {"id":"5",
//             "short_name":"JS",
//             "full_name":"Jilang Stanley"
//         },
//         {"id":"5",
//         "short_name":"JS",
//         "full_name":"Jilang Stanley"
//     },
//     {"id":"5",
//     "short_name":"JS",
//     "full_name":"Jilang Stanley"
// },
    ]);
    const selected = selectedContacts.map((d) => <SelectedContactItem key={d.short_name} shortName={d.short_name} fullName={d.full_name}/>);
    // useEffect(() => {
    //     // run this command when value changes
    //     document.getElementById("contacts").innerHTML = value
    //   }, [value]);
    return (
        <>
            <div className="flex flex-wrap mt-5 bg-pureWhite">
                <div className="w-full h-full bg-pureWhite">
                    <div className="flex flex-wrap border-b-2 border-x-inactiveText  hover:cursor-pointer transition-all ">
                        <div className={"flex-auto text-left p-2 hover:cursor-pointer hover:bg-defaultBackground transition-all " + (openTab === 1
                            ? "border-b-2 border-y-primaryBlue text-primaryBlue"
                            : " text-inactiveText border-transparent")} onClick={e => {
                                e.preventDefault();
                                setOpenTab(1);
                            }}>
                            <div className="flex flex-wrap transition ease-in-out delay-150">
                                <div className="text-left mr-2">
                                    <svg width="24" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="hover:animate-pulse">
                                        <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke={(openTab === 1
                                            ? "#4283E4" : "#838282")} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke={(openTab === 1
                                            ? "#4283E4" : "#838282")} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                                <div className=" align-bottom flex-auto">
                                    <p className=" align-bottom font-normal">Individual</p></div>
                            </div>
                        </div>
                        <div className={"flex-auto item-end p-2 hover:cursor-pointer hover:bg-defaultBackground transition-all " + (openTab === 2
                            ? "border-b-2 border-y-primaryBlue text-primaryBlue transition-all "
                            : " text-inactiveText border-transparent")} onClick={e => {
                                e.preventDefault();
                                setOpenTab(2);
                            }}>
                            <div className="flex flex-wrap items-end">
                                <div className="flex-auto">

                                </div>
                               <div className="mr-2">
                               <svg width="24" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="hover:animate-pulse">
                                    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke={(openTab === 2
                                        ? "#4283E4" : "#838282")} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke={(openTab === 2
                                        ? "#4283E4" : "#838282")} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M23 20.9989V18.9989C22.9993 18.1126 22.7044 17.2517 22.1614 16.5512C21.6184 15.8508 20.8581 15.3505 20 15.1289" stroke={(openTab === 2
                                        ? "#4283E4" : "#838282")} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M16 3.12891C16.8604 3.34921 17.623 3.84961 18.1676 4.55122C18.7122 5.25283 19.0078 6.11574 19.0078 7.00391C19.0078 7.89208 18.7122 8.75499 18.1676 9.4566C17.623 10.1582 16.8604 10.6586 16 10.8789" stroke={(openTab === 2
                                        ? "#4283E4" : "#838282")} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                               </div>

                               <div className="align-bottom text-right">
                               <p className="align-bottom font-normal">Broadcast</p>
                               </div>
                                
                                </div>
                        </div>
                    </div>

                    <div className="flex flex-col min-w-0 break-words bg-pureWhite w-full mb-6 h-full">
                        <div className="px-4 py-5 flex-auto h-full">
                            <div className="tab-content tab-space bg-pureWhite h-full">
                                <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                     <div className="w-full h-[103px] border-defaultBackground border-2 flex flex-wrap overflow-y-scroll rounded-lg my-2 focus:border-2 focus:border-primaryBlue p-2 mb-[40px]" contentEditable="false">
                                         {selected}
                                     </div>
                                    <textarea id="message" rows="4" className=" resize-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Type your message here"></textarea>
                                </div>
                                <div className={openTab === 2 ? "block" : "hidden"} id="link2">

                                <div className="w-full h-[103px] border-defaultBackground border-2 flex flex-wrap overflow-y-scroll rounded-lg my-2 focus:border-2 focus:border-primaryBlue p-2 mb-[40px]" contentEditable="false">
                                         {selected}
                                     </div>
                                    <textarea id="message" rows="4" className=" resize-none block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Type your message here"></textarea>
                                </div>
                                <div className="flex flex-wrap mt-10 gap-8">
                                <div className="flex-auto">
                                   <SendMessageButton title="Send"  color="primaryBlue" onClose={()=>console.log("Closed Button")} onClick={()=>console.log("Pressed Button")}/>
                                  </div>
                                  <div className="flex-auto">
                                   <ScheduleMessageButton title="Schedule" color="pureWhite" onClose={()=>console.log("Closed Button")} onClick={()=>console.log("Pressed Button")}/>
                                  </div>
                                  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default function MessageTab() {
    return (
        <>
            <Tabs color="pink" />
        </>
    )
}

const SelectedContactItem=({shortName,fullName})=>{
    return(<>
    <span className="pr-2">
    <div className="relative flex items-center h-8 cursor-pointer md:px-2  ">

<div className="inline-flex overflow-hidden relative justify-center items-center w-5 h-5 bg-primaryRed rounded-full dark:bg-gray-600 mr-1">
    <span className=" font-normal text-xs text-[#ffffff] dark:text-white">{shortName}</span>
</div>
<h1 className=" text-blackMain text-sm font-semibold">{fullName}</h1>
</div>
    </span>
    </>)
}