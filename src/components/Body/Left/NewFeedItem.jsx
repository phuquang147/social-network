import React from 'react'

export default function NewFeedItem({newFeedItem}) {
    return (
        <li className="flex items-center  p-3 hover:bg-gray-100 rounded-lg cursor-pointer  dark:hover:bg-[#1a2236] transition-all">
            <i className={`${newFeedItem.icon} p-2 mr-3 rounded-full text-[24px] leading-[24px] bg-sky-100 text-white dark:bg-[#1a2236] ${newFeedItem.classExtend}`}></i>
            <p className="text-md text-gray-600 dark:text-gray-200 font-bold">{newFeedItem.title}</p>
        </li>
    )
}