import React from 'react'

export default function Notification({notification}) {
    return (
        <li className="bg-white flex justify-between p-3 hover:bg-gray-100 rounded-lg cursor-pointer dark:bg-[#293145] dark:hover:bg-[#1a2236] transition-all">
            <img src={notification.avatar} alt="" className="h-[50px] rounded-full mr-4 "/>
            <div>
                <div className="flex justify-between">
                    <p className="font-semibold text-[16px] dark:text-gray-100">{notification.name}</p>
                    <p className="font-semibold text-xs text-gray-500 dark:text-gray-400">{notification.time}</p>
                </div>
                <p className="text-left line-clamp-1 text-[13px] font-normal dark:text-gray-300" >{notification.content}</p>
            </div>
        </li>
    )
}
