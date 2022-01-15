import React from 'react'

export default function CenterHeaderButton({icon}) {
    return (
        <button className="rounded-full h-[46px] w-[46px] bg-gray-200 p-0 mx-2 outline-none dark:bg-[#1a2236] dark:text-gray-400 transition-all">
            <i className={`${icon} text-2xl text-gray-400`}></i>
        </button>
    )
}
