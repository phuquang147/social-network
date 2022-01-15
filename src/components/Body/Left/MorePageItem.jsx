import React from 'react'

export default function MorePageItem({page}) {
    return (
        <li className="flex items-center p-3 hover:bg-gray-100 rounded-lg cursor-pointer dark:hover:bg-[#1a2236] transition-all">
            <i className={`${page.icon} p-2 mr-3 rounded-full text-[24px] leading-[24px] bg-sky-100 text-sky-400 dark:bg-[#1a2236]`}></i>
            <p className="text-md text-gray-600 dark:text-gray-200 font-bold">{page.title}</p>
        </li>
    )
}
