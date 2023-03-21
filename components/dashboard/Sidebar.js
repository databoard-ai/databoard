const Sidebar = ()=>{
    
    return(
        <>
        <div className="sidebar bg-[#f4f4f4] w-[300px] text-[16px] h-screen fixed">
            <ul className="px-10 pt-10">
                <a href="/">
                    <li className="p-3 mb-1 active">
                        Clock Analysis
                    </li>
                </a>
                <a href="/">
                    <li className="p-3 mb-1">
                        Tag Analysis
                    </li>
                </a>
                <a href="">
                    <li className="p-3 mb-1">
                        Multi-tag Analysis
                    </li>
                </a>
                <a href="/">
                    <li className="p-3 mb-1">
                        Reviews
                    </li>
                </a>
            </ul>
            <div className="relative top-[100px] px-10">
                <div className="flex justify-around">
                    <p>Surname</p>
                    <p>Amakachai</p>
                </div>
                <div className="flex justify-around">
                    <p>Surname</p>
                    <p>Amakachai</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Sidebar