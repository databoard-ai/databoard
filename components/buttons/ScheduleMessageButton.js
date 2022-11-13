

function ScheduleMessageButton({ title, color, onPressed }) {
    //  const col = 'bg-'.concat(color)
    return (
        <div className="w-[204px] flex cursor-pointer h-[60px] hover:scale-105 border-inactiveText border-2 rounded-lg transition transform duration-200 ease-out" onClick={onPressed}>
            <div className=" h-[56px] relative  w-[44px] border-r-2 border-r-inactiveText py-4 px-2 bg-pureWhite rounded-l-lg text-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="">
                    <path d="M19 4H5C3.89543 4 3 4.89543 3 6V20C3 21.1046 3.89543 22 5 22H19C20.1046 22 21 21.1046 21 20V6C21 4.89543 20.1046 4 19 4Z" stroke="#838282" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M16 2V6" stroke="#838282" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M8 2V6" stroke="#838282" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M3 10H21" stroke="#838282" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
            </div>
            <button className={`items-center text-inactiveText transition-colors duration-150 bg-${color} w-[360px] h-[56px] text-lg rounded-r-lg font-montserrat text-center items-center`} onClick={onPressed}>{title}</button>
        </div>
    )

}

export default ScheduleMessageButton