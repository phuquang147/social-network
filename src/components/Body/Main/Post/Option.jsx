import React from 'react'

export default function Option({option}) {
    return (
        <li className="group flex bg-white p-3 items-center rounded-md hover:bg-gray-100 cursor-pointer dark:bg-[#1a2236] dark:hover:bg-[#293145]">
            <i className={`${option.icon} bx bx-bookmark text-gray-500 bg-gray-100 p-2 mr-3 text-xl leading-5 rounded-full dark:text-sky-400 dark:bg-[#293145]`}></i>
            <div className="">
                <h4 className="text-left text-sm font-bold text-gray-600 dark:text-gray-200">{option.title}</h4>
                <h5 className="text-left text-[12px] dark:text-gray-400">{option.description}</h5>
            </div>
        </li>
    )
}
