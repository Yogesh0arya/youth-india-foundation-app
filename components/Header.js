import {MenuIcon} from '@heroicons/react/outline'
import { Link } from "react-scroll";
import React, {useState, useEffect} from 'react'

function Header() {
    const [colorChange, setColorchange] = useState(false);
    const [yScroll, setYScroll] = useState(window.scrollY);

    useEffect(()=>{

        const changeNavbarColor = () =>{
            if(window.scrollY >= 100){
            setColorchange(true); 
            // setYScroll(window.scrollY)
            // console.log(yScroll)           
            }else{
            setColorchange(false);
            }
        };

        window.addEventListener('scroll', changeNavbarColor);
        
        return function unMount() {
            window.removeEventListener("scroll", changeNavbarColor);
        };
    },[yScroll])

    
    return (
        <div className={` ${!colorChange ? ('bg-transparent') : ('bg-white shadow-md')} z-50 fixed top-0 left-0 right-0`}>
            <div className="flex justify-between max-w-screen-2xl xl:mx-auto items-center mx-5 py-3 xl:px-3">
                <div className="flex items-center justify-center">
                    <MenuIcon className='w-6 sm:w-8 mr-1 sm:mr-6 cursor-pointer lg:hidden' />
                    <img className="cursor-pointer lg:mx-14 w-10 h-10 sm:w-14 sm:h-14 object-contain" src="yif-logo.png" alt="logo" />
                </div>
                
                
                <div className="hidden flex-grow lg:flex lg:space-x-12">
                    <Link  className="navBtnLg" to="about" spy={true} smooth={true} offset={50} duration={500}>About Us</Link>
                    <Link  className="navBtnLg" to="courses" spy={true} smooth={true} offset={50} duration={500}>Our Work</Link>
                    <Link  className="navBtnLg" to="highlights" spy={true} smooth={true} offset={50} duration={500}>Our Team</Link>
                    <Link  className="navBtnLg" to="events" spy={true} smooth={true} offset={50} duration={500}>Our Events</Link>
                </div>

                <div className="flex space-x-4 lg:mr-24 xl:space-x-8">
                    <button className="navBtn">Join Us</button>
                    <button className="navBtn">Member Login</button>
                </div>
            </div>
        </div>
    )
}

export default Header
