import React from 'react'

export default function HeaderSettingItem({setting}) {
    return (
        <li className="bg-white flex  item-center p-3 hover:bg-gray-100 rounded-lg cursor-pointer dark:bg-[#293145] dark:hover:bg-[#1a2236] transition-all">
            <i className={`${setting.icon} p-2 rounded-full text-[30px] leading-[30px] bg-sky-100 text-sky-400 dark:bg-[#1a2236]`}></i>
            <div className="flex flex-col items-start ml-3">
                <p className="font-semibold text-[16px] dark:text-gray-100">{setting.title}</p>
                <p className="text-left text-[13px] font-normal dark:text-gray-300">{setting.description}</p>
            </div>
        </li>
    )
}
