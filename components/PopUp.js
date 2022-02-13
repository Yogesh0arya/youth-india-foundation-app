import { PhoneIcon, MailIcon, LocationMarkerIcon, LoginIcon } from '@heroicons/react/outline'
import {MenuIcon, XIcon} from '@heroicons/react/outline'
import {CalendarIcon, ChatAltIcon, UserGroupIcon, IdentificationIcon, PhoneOutgoingIcon, } from '@heroicons/react/solid'
import { Menu } from '@headlessui/react'
import {useState} from 'react'

function PopUp() {
    const [onSelect, setOnSelect] = useState(false)
    return (
        <div className="fixed z-20 bottom-5 right-5 sm:bottom-10 sm:right-10">
            <Menu as='div' className="relative" >
            {({open})=>(
                <>
                    <Menu.Button>
                        {!open ? 
                            <MenuIcon className='w-9 h-9 rounded-full sm:w-12 sm:h-12 bg-white p-2 cursor-pointer' />
                            :<XIcon className='w-9 h-9 rounded-full sm:w-12 sm:h-12 bg-white p-2 cursor-pointer' />
                        }
                    </Menu.Button>
            
                    <Menu.Items className="absolute bottom-16 right-0 space-y-3 w-max">
                        <div className={`flex space-x-2 justify-end items-center {$open && ('transform -translate-y-5 transition duration-1000')}`}>
                            <p  className="hover:text-black cursor-pointer">Events</p>
                            <CalendarIcon className='w-9 h-9 rounded-full sm:w-12 sm:h-12 bg-blue-400 text-white p-2 cursor-pointer'/>
                        </div>
                        
                        <div className="flex space-x-2 justify-end items-center">
                            <p  className="hover:text-black cursor-pointer">Chat With Us</p>
                            <ChatAltIcon className='w-9 h-9 hover:animate-wiggle rounded-full sm:w-12 sm:h-12 bg-orange-400 text-white p-2 cursor-pointer'/>
                        </div>
                        
                        <div className="flex space-x-2 justify-end items-center">
                            <p  className="hover:text-black cursor-pointer">Admin Login</p>
                            <UserGroupIcon className='w-9 h-9 rounded-full sm:w-12 sm:h-12 bg-violet-400 text-white p-2 cursor-pointer'/>
                        </div>
                        
                        <div className="flex space-x-2 justify-end items-center">
                            <p  className="hover:text-black cursor-pointer">Member Login</p>
                            <LoginIcon className='w-9 h-9 rounded-full sm:w-12 sm:h-12 bg-pink-400 text-white p-2 cursor-pointer'/>
                        </div>
                        
                        <div className="flex space-x-2 justify-end items-center">
                            <p  className="hover:text-black cursor-pointer">Lecture Certificate</p>
                            <IdentificationIcon className='w-9 h-9 rounded-full sm:w-12 sm:h-12 bg-green-400 text-white p-2 cursor-pointer'/>
                        </div>
                        
                        <div className="flex space-x-2 justify-end items-center">
                            <p  className="hover:text-black cursor-pointer">Contact us</p>
                            <PhoneOutgoingIcon className='w-9 h-9 rounded-full sm:w-12 sm:h-12 bg-purple-400 text-white p-2 cursor-pointer'/>
                        </div>
                        
                    </Menu.Items>
                </>
                )} 
            </Menu>
        </div>
    )
}
export default PopUp