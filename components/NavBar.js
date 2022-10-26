import Image from "next/image"

function Navbar() {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 py-7 px-5 bg-primaryBlue font-montserrat">

            {/* Left */}
            <div className="relative flex items-center h-10 cursor-pointer md:px-10  ">
                {/* <Image
            src="" layout="fill"
            /> */}
                <div className="inline-flex overflow-hidden relative justify-center items-center w-10 h-10 bg-primaryRed rounded-full dark:bg-gray-600 mr-3">
                    <span className="font-medium text-[#ffffff] dark:text-white">JL</span>
                </div>
                <h1 className="text-[#ffffff]">Abc light room</h1>
            </div>

            {/* Spacer */}
            <div className="xsm:hidden">

            </div>

            {/* Right */}
            <div className="py-2 flex flex-row items-end px-5 justify-end">
                <div className="border-1 flex border-white rounded-md w-12 basis-1/2 mx-5">
                    <input type="text" placeHolder="Search" className="bg-transparent rounded-md px-5 outline-none flex-grow h-9">

                    </input>
                </div>
            </div>

        </header>
    )
}

export default Navbar