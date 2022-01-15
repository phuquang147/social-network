import React from 'react'
import {useState} from 'react'

export default function ShareBox() {
    const [show, setShow] = useState("hidden")

    const handleEnter = () => {
        setShow("flex")
    }

    const handleLeave = () => {
        setShow("hidden")
    }

    return (
        <div onMouseLeave={handleLeave} onMouseEnter={handleEnter} className="group hover:bg-sky-100 px-4 py-1 rounded-md cursor-pointer dark:text-gray-100 dark:hover:bg-[#1a2236]">
            <div className="flex items-center group-hover:text-sky-400">
                <i className='bx bx-share-alt text-2xl mr-2' ></i>
                Share
            </div> 
            <div className={`absolute items-center bg-white p-[6px] shadow-custom left-[245px] rounded-full top-4 animate-growth origin-bottom-left dark:bg-[#1a2236] ${show}`}>
                <i className='bx bxl-facebook h-[40px] w-[40px] leading-[40px] mr-2 text-2xl rounded-full text-[#1877f2] hover:text-white hover:bg-[#1877f2] transition-all'></i>
                <i className='bx bxl-messenger h-[40px] w-[40px] leading-[40px] mr-2 text-2xl rounded-full text-[#00b2ff] hover:text-white hover:bg-[#00b2ff]  transition-all'></i>
                <i className='bx bxl-instagram h-[40px] w-[40px] leading-[40px] mr-2 text-2xl rounded-full text-[#c32aa3] hover:text-white hover:bg-[#c32aa3] transition-all'></i>
                <i className='bx bxl-whatsapp h-[40px] w-[40px] leading-[40px] mr-2 text-2xl rounded-full text-[#25d369] hover:text-white hover:bg-[#25d369] transition-all'></i>
                <i className='bx bxl-twitter h-[40px] w-[40px] leading-[40px] text-2xl rounded-full text-[#1da1f2] hover:text-white hover:bg-[#1da1f2] transition-all'></i>
            </div>
        </div>
    )
}
