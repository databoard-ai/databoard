import Image from "next/image"

function Navbar() {
    return (
        <header className="sticky z-50 flex py-7 sm:px-5 bg-primaryBlue left-0 right-0 top-0 ease-in duration-100 justify-between w-screen">

            {/* Left */}
            <div className="relative flex items-center h-10 cursor-pointer md:px-10  ">

                <div className="inline-flex overflow-hidden relative justify-center items-center w-10 h-10 bg-primaryRed rounded-full dark:bg-gray-600 mr-3">
                    <span className="font-medium text-[#ffffff] dark:text-white">JL</span>
                </div>
                <h1 className="text-[#ffffff]">Abc light room</h1>
            </div>



            {/* Right */}
            <div className="border-1  border-white rounded-md">
                <input type="text" placeholder="Search" className="bg-transparent rounded-md px-5 outline-none flex-grow h-9" />
            </div>

        </header>
    )
}

export default Navbar