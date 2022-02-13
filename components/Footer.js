import { FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

function Footer() {
    return (
    <div className="bg-black py-10">
        <div className="max-w-6xl xl:mx-auto mx-5 text-white">
            <div className="flex flex-col items-center text-center sm:flex-row justify-between border-b border-white pb-2 gap-4">
                <img src="/yif-logo.png" alt="logo" className="w-9 h-9 sm:w-12 sm:h-12 cursor-pointer" />
                <div>
                    <h1 className="sm:mb-1 font-bold text-lg sm:text-lg cursor-pointer">Menu</h1>
                    <p className='cursor-pointer text-sm sm:text-base'>About</p>
                    <p className='cursor-pointer text-sm sm:text-base'>Our Work</p>
                    <p className='cursor-pointer text-sm sm:text-base'>Our Team</p>
                    <p className='cursor-pointer text-sm sm:text-base'>Events</p>
                </div> 
                <div className="flex gap-3 sm:space-x-1">
                    <FaYoutube className="w-10 h-10 p-3 bg-orange-600 text-white hover:bg-white hover:text-red-500 rounded-full"/>
                    <FaTwitter className="w-10 h-10 p-3 bg-orange-600 text-white hover:bg-white hover:text-blue-500 rounded-full"/>
                    <FaInstagram className="w-10 h-10 p-3 bg-orange-600 text-white hover:bg-white hover:text-pink-500 rounded-full"/>
                    <FaLinkedinIn className="w-10 h-10 p-3 bg-orange-600 text-white hover:bg-white hover:text-blue-500 rounded-full"/>
                </div>
            </div>

            <div className='flex flex-col items-center sm:flex-row justify-around text-sm sm:text-base mt-3 gap-2'>
                <h1 className='cursor-pointer'>@ Youth India Foundation 2022</h1>
                <div className="flex space-x-5">
                    <p className='cursor-pointer'>Terms and condition</p>
                    <p className='cursor-pointer'>Annual Report</p>
                    <p className='cursor-pointer'>Privacy Policy</p>
                </div>
            </div>
            
        </div>
    </div>
    )
}
export default Footer