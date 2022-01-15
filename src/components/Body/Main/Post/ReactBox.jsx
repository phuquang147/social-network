import React from 'react'
import ReactIcon from './ReactIcon'
import {useState} from 'react'

export default function ReactBox() {
    const [show, setShow] = useState("hidden")

    const handleEnter = () => {
        setShow("flex")
    }

    const handleLeave = () => {
        setShow("hidden")
    }

    return (
        <div onMouseLeave={handleLeave} onMouseEnter={handleEnter} className="hover:bg-sky-100 px-4 py-1 rounded-md cursor-pointer dark:text-gray-100 dark:hover:bg-[#1a2236] group">
            <button className="flex items-center group-hover:text-sky-400" >
                <i className='bx bx-like text-2xl mr-2 '></i>
                <p>React</p>
            </button>
            <div className={`absolute bg-white p-[6px] pr-[2px] shadow-custom left-0 rounded-full top-4 animate-growth origin-bottom-left dark:bg-[#1a2236] ${show}`}>
                <ReactIcon type="like" classExtend="h-[40px] hover:p-[2px]"/>
                <ReactIcon type="heart" classExtend="h-[40px] hover:p-[2px]"/>
                <ReactIcon type="haha" classExtend="h-[40px] hover:p-[2px]"/>
                <ReactIcon type="wow" classExtend="h-[40px] hover:p-[2px]"/>
                <ReactIcon type="sad" classExtend="h-[40px] hover:p-[2px]"/>
                <ReactIcon type="angry" classExtend="h-[40px] hover:p-[2px]"/>
            </div>
        </div>
    )
}
