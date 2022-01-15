import React from 'react'

export default function Message({message}) {
    return (
        <li className="bg-white flex  w-full p-3 hover:bg-gray-100 rounded-lg cursor-pointer dark:bg-[#293145] dark:hover:bg-[#1a2236] transition-all">
            <img src={message.avatar} alt="" className="h-[50px] rounded-full mr-4 "/>
            <div className="w-full">
                <div className="flex justify-between">
                    <p className="font-semibold text-[16px] dark:text-gray-100">{message.name}</p>
                    <p className="font-semibold text-xs text-gray-500 dark:text-gray-400">{message.time}</p>
                </div>
                <p className="text-left line-clamp-1 text-[13px] font-normal dark:text-gray-300" >{message.content}</p>
            </div>
        </li>
    )
}
